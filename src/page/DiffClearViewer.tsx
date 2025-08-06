import { useState, useMemo } from "react";
import { DiffView, DiffModeEnum } from "@git-diff-view/react";
import { generateDiffFile } from "@git-diff-view/file";  
import "@git-diff-view/react/styles/diff-view.css";
import { ContentInput } from "../component/ContentInput";
import { viewModeEnum } from "./DiffClearView.types";

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
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
          </button>
        </div>
        <div className="flex-1">
          <span className="btn btn-ghost text-xl">DiffClear Viewer</span>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost" onClick={toggleViewMode}>
            {viewMode === viewModeEnum.Edit  ? "Edit" : "Diff"} Mode
          </button>
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
