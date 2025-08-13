import { useState } from "react";
import { ContentInput } from "../component/ContentInput";
import { viewModeEnum } from "./HomePage.types";
import { Button, Checkbox, Field, Label, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Diff } from "../component/DiffView";
import { CheckIcon, Cog6ToothIcon, EyeIcon, PencilSquareIcon } from "@heroicons/react/16/solid";

const HomePage = () => {

  const [viewMode, setViewMode] = useState(viewModeEnum.Edit);
  const [oldValue, setOldValue] = useState<string>('');
  const [newValue, setNewValue] = useState<string>('');
  

  const onInputOldValue = (value: string) => {
    setOldValue(value);  
  }

  const onInputNewValue = (value: string) => {
    setNewValue(value);  
  }

  const toggleViewMode = () => {
    if (oldValue !== '' || newValue !== '') {
      setViewMode(
        viewMode === viewModeEnum.Edit ? viewModeEnum.Diff : viewModeEnum.Edit
      );
    }
    else {
      alert('Please enter something before switching views.');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="grid grid-cols-3 p-1">
        <div className="flex flex-1 items-center">
          <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2.5C6 1.39543 6.89543 0.5 8 0.5H21.1716C21.702 0.5 22.2107 0.710714 22.5858 1.08579L27.4142 5.91421C27.7893 6.28929 28 6.79799 28 7.32843V25.5C28 26.6046 27.1046 27.5 26 27.5H8C6.89543 27.5 6 26.6046 6 25.5V2.5Z" 
                  stroke="#24292e" stroke-width="1.2" stroke-linejoin="round"/>
            <path d="M21 0.5V6.5C21 7.05228 21.4477 7.5 22 7.5H28" stroke="#24292e" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <g transform="translate(6 5) scale(0.9)">
              <path d="M12 3V21" stroke="#24292e" stroke-width="2" stroke-linecap="round"/>
              <path d="M8 7L16 7" stroke="#24292e" stroke-width="2" stroke-linecap="round"/>
              <path d="M5 11L11 11" stroke="#d73a49" stroke-width="2" stroke-linecap="round"/>
              <path d="M13 11L19 11" stroke="#28a745" stroke-width="2" stroke-linecap="round"/>
              <circle cx="6" cy="15" r="2" fill="#d73a49"/>
              <circle cx="18" cy="15" r="2" fill="#28a745"/>
            </g>
          </svg>
        </div>
        <div className="justify-self-center pl-2 p-1">
          <Button 
            onClick={toggleViewMode}
            disabled={viewMode === viewModeEnum.Diff}
            className="inline-flex gap-2 items-center rounded-l-lg disabled:bg-gray-600 disabled:text-white px-5 py-1.5 text-sm/6 font-semibold">
            <EyeIcon className="size-5"/>
            Diff View
          </Button>
          <Button 
            onClick={toggleViewMode}
            disabled={viewMode === viewModeEnum.Edit}
            className="inline-flex gap-2 items-center rounded-r-lg disabled:bg-gray-600 disabled:text-white px-5 py-1.5 text-sm/6 font-semibold">
            <PencilSquareIcon className="size-5"/>
            Edit Mode
          </Button>
        </div>
        <div className="flex-1 justify-self-end p-1">
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 px-3 py-1.5 text-white data-open:bg-gray-900">
              <Cog6ToothIcon className="size-4" />
            </MenuButton>

            <MenuItems
              transition
              anchor="bottom end"
              className="w-52 origin-top-right rounded-xl border p-1 text-sm/6 bg-gray-400 transition duration-100 ease-out [--anchor-gap:--spacing(1)] data-closed:scale-95 data-closed:opacity-0"
            >
              <MenuItem>
                <Field className="flex items-center gap-2">
                  <Checkbox
                    // checked={enabled}
                    // onChange={setEnabled}
                    className="group size-6 rounded-md bg-white/10 p-1 ring-1 ring-white/15 ring-inset focus:not-data-focus:outline-none data-checked:bg-white data-focus:outline data-focus:outline-offset-2 data-focus:outline-white"
                  >
                    <CheckIcon className="hidden size-4 fill-black group-data-checked:block" />
                  </Checkbox>
                  <Label>Enable beta features</Label>
                </Field>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
      {
        viewMode === viewModeEnum.Edit && (
          <ContentInput 
            oldValue={oldValue}
            newValue={newValue}
            onInputOldValue={onInputOldValue} 
            onInputNewValue={onInputNewValue}
          ></ContentInput>
        )
      }
      {
        viewMode === viewModeEnum.Diff && (
          <Diff
            oldValue={oldValue}
            newValue={newValue}
          ></Diff>
        )
      }
    </div>
  );
};

export default HomePage;
