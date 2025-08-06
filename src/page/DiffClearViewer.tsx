import { useState, useMemo } from "react";
import { DiffView, DiffModeEnum } from "@git-diff-view/react";
import { generateDiffFile } from "@git-diff-view/file";  
import "@git-diff-view/react/styles/diff-view.css";
import { ContentInput } from "../component/ContentInput";
import { viewModeEnum } from "./DiffClearView.types";
import { Field, Label, Switch } from "@headlessui/react";

const DiffClearViewer = () => {
  const oldFileContent = `function hello() {
  console.log("Hello, World!");
}`;
  const newFileContent = `function hello() {
  console.log("Hello, Universe!");
  return "Updated";
}`;

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [diffMode, setDiffMode] = useState(DiffModeEnum.Split);
  const [viewMode, setViewMode] = useState(viewModeEnum.Edit);

  const diffFile = useMemo(() => {  
    const file = generateDiffFile(  
      "hello.js",           // oldFileName  
      oldFileContent,       // oldContent    
      "hello.js",           // newFileName  
      newFileContent,       // newContent  
      "javascript",         // oldFileLang  
      "javascript"          // newFileLang  
    );  
    file.initTheme(theme);  
    file.init();  
    file.buildSplitDiffLines();  
    file.buildUnifiedDiffLines();  
    return file;  
  }, [theme]);  

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleContentChange = (value: string) => {
    // setPageBValue(value);
  };

  const toggleViewMode = () => {
    setViewMode(
      viewMode === viewModeEnum.Edit ? viewModeEnum.Diff : viewModeEnum.Edit
    );
  };

  const toggleDiffMode = () => {
    setDiffMode(
      diffMode === DiffModeEnum.Split ? DiffModeEnum.Unified : DiffModeEnum.Split
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
          <div>
            <div style={{ marginBottom: "10px" }}>
              <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "Dark" : "Light"} Theme
              </button>
              <button onClick={toggleDiffMode} style={{ marginLeft: "10px" }}>
                Switch to {diffMode === DiffModeEnum.Split ? "Unified" : "Split"} View
              </button>
            </div>
            <DiffView
              diffFile={diffFile}
              diffViewMode={diffMode}
              diffViewTheme={theme}
              diffViewHighlight={true} // Enable syntax highlighting
              diffViewFontSize={14} // Readable font size
              diffViewWrap={false} // Disable line wrapping for GitHub-like style
            />
          </div>
        )
      }
    </div>
  );
};

export default DiffClearViewer;
