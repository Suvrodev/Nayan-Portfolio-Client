import React from "react";

interface ToolbarProps {
  editorRef: React.RefObject<HTMLDivElement | null>;
  setHtmlOutput: (val: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ editorRef, setHtmlOutput }) => {
  const format = (command: string, value: string = "") => {
    const editor = editorRef.current;
    if (!editor) return;
    editor.focus();

    const selection = window.getSelection();

    if (editor.innerHTML.trim() === "") {
      const p = document.createElement("p");
      const textNode = document.createTextNode("\u200B");
      p.appendChild(textNode);
      editor.appendChild(p);

      const range = document.createRange();
      range.setStart(textNode, 1);
      range.collapse(true);

      selection?.removeAllRanges();
      selection?.addRange(range);
    } else if (selection && selection.rangeCount === 0) {
      const range = document.createRange();
      range.selectNodeContents(editor);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    }

    document.execCommand(command, false, value);
    setHtmlOutput(editor.innerHTML);
  };

  return (
    <div className="flex gap-3 flex-wrap text-white mb-4 items-center z-10 relative">
      {/* Formatting buttons (bold, italic, underline, etc.) */}
      <button onClick={() => format("bold")}>B</button>
      <button onClick={() => format("italic")}>I</button>
      {/* ... Add all the rest here like insertImage, link, colors, rotation, etc. */}
    </div>
  );
};

export default Toolbar;
