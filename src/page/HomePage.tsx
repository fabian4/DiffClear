import { useState } from "react";
import { ContentInput } from "../component/ContentInput";
import { viewModeEnum } from "./HomePage.types";
import { Button, Field, Label, Switch } from "@headlessui/react";
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
    setViewMode(
      viewMode === viewModeEnum.Edit ? viewModeEnum.Diff : viewModeEnum.Edit
    );
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between p-1">
        <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
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
