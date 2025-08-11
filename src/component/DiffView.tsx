import { generateDiffFile } from "@git-diff-view/file";
import { DiffModeEnum, DiffView } from "@git-diff-view/react";
import { useMemo, useState } from "react";
import "@git-diff-view/react/styles/diff-view-pure.css";

export const Diff = ({oldValue, newValue}) => {

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [diffMode, setDiffMode] = useState(DiffModeEnum.Split);

  const diffFile = useMemo(() => {  
    const file = generateDiffFile(  
      "oldValue.js",
      oldValue,
      "newValue.js",
      newValue,
      "javascript",
      "javascript"
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
    <div className="diff-view-component-wrapper">
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
