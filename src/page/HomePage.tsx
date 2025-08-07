import { useState } from "react";
import { ContentInput } from "../component/ContentInput";
import { viewModeEnum } from "./HomePage.types";
import { Field, Label, Switch } from "@headlessui/react";
import { Diff } from "../component/DiffView";

const HomePage = () => {

  const [viewMode, setViewMode] = useState(viewModeEnum.Edit);

  const handleContentChange = (value: string) => {
    // setPageBValue(value);
  };

  const toggleViewMode = () => {
    setViewMode(
      viewMode === viewModeEnum.Edit ? viewModeEnum.Diff : viewModeEnum.Edit
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
        </div>
        <div className="">
          <span className="btn btn-ghost text-xl">DiffClear Viewer</span>
        </div>
        <div className="">  
          <Field>
            <Label>Mode </Label>
            <Switch
              checked={viewMode === viewModeEnum.Diff}
              onChange={toggleViewMode}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-800 transition data-checked:bg-blue-600"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
            </Switch>
          </Field>
        </div>
      </div>
      {
        viewMode === viewModeEnum.Edit && (
          <ContentInput onInput={handleContentChange}></ContentInput>
        )
      }
      {
        viewMode === viewModeEnum.Diff && (
          <Diff></Diff>
        )
      }
    </div>
  );
};

export default HomePage;
