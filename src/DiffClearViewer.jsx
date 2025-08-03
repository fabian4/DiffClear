import { useState, useMemo } from "react";
import { DiffView, DiffModeEnum } from "@git-diff-view/react";
import { generateDiffFile } from "@git-diff-view/file";  
import "@git-diff-view/react/styles/diff-view.css";

const DiffClearViewer = () => {
  const oldFileContent = `function hello() {
  console.log("Hello, World!");
}`;
  const newFileContent = `function hello() {
  console.log("Hello, Universe!");
  return "Updated";
}`;

  const [theme, setTheme] = useState("light");
  const [viewMode, setViewMode] = useState(DiffModeEnum.Split);

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

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Toggle between split and unified view
  const toggleViewMode = () => {
    setViewMode(
      viewMode === DiffModeEnum.Split ? DiffModeEnum.Unified : DiffModeEnum.Split
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>DiffClear Viewer</h1>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
        <button onClick={toggleViewMode} style={{ marginLeft: "10px" }}>
          Switch to {viewMode === DiffModeEnum.Split ? "Unified" : "Split"} View
        </button>
      </div>
      <DiffView
        diffFile={diffFile}
        diffViewMode={viewMode}
        diffViewTheme={theme}
        diffViewHighlight={true} // Enable syntax highlighting
        diffViewFontSize={14} // Readable font size
        diffViewWrap={false} // Disable line wrapping for GitHub-like style
      />
    </div>
  );
};

export default DiffClearViewer;
