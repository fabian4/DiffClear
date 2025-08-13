import { useState } from "react";
import { ContentInput } from "../component/ContentInput";
import { viewModeEnum } from "./HomePage.types";
import { Button } from "@headlessui/react";
import { Diff } from "../component/DiffView";

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
      <div className="flex justify-between p-1">
        <div className="flex gap-5">
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
        <div className="p-1">
          <Button 
            onClick={toggleViewMode}
            disabled={viewMode === viewModeEnum.Diff}
            className="inline-flex gap-2 items-center rounded-l-lg disabled:bg-gray-600 disabled:text-white px-5 py-1.5 text-sm/6 font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" clipRule="evenodd" />
            </svg>
            Diff View
          </Button>
          <Button 
            onClick={toggleViewMode}
            disabled={viewMode === viewModeEnum.Edit}
            className="inline-flex gap-2 items-center rounded-r-lg disabled:bg-gray-600 disabled:text-white px-5 py-1.5 text-sm/6 font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
              <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
            </svg>
            Edit Mode
          </Button>
        </div>
        <div className="p-1">  
          {/* <Field>
            <Label>Mode </Label>
            <Switch
              checked={viewMode === viewModeEnum.Diff}
              onChange={toggleViewMode}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-800 transition data-checked:bg-blue-600"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
            </Switch>
          </Field> */}
          <Button 
            className="inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
              <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
            </svg>
          </Button>
          <Button 
            className="inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
              <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
            </svg>
          </Button>
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
