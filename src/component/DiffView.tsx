import { generateDiffFile } from "@git-diff-view/file";
import { DiffModeEnum, DiffView } from "@git-diff-view/react";
import { useMemo, useState } from "react";
import "@git-diff-view/react/styles/diff-view.css";

export const Diff = () => {
  const oldFileContent = `function hello() {
  console.log("Hello, World!");
}`;
  const newFileContent = `function hello() {
  console.log("Hello, Universe!");
  return "Updated";
}`;

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [diffMode, setDiffMode] = useState(DiffModeEnum.Split);

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

  const toggleDiffMode = () => {
    setDiffMode(
      diffMode === DiffModeEnum.Split ? DiffModeEnum.Unified : DiffModeEnum.Split
    );
  };

  return (
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
