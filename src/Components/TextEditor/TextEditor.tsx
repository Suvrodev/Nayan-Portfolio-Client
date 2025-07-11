/**
 * TextEditor.tsx - Fully Enhanced Custom Editor
 */

import React, { useRef, useState } from "react";
import "./TextEditor.css";

const TextEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [htmlOutput, setHtmlOutput] = useState("");

  const format = (command: string, value: string = "") => {
    document.execCommand(command, false, value);
    setHtmlOutput(editorRef.current?.innerHTML || "");
  };

  const insertResizableImage = (base64: string) => {
    const wrapper = document.createElement("div");
    wrapper.style.display = "inline-block";
    wrapper.style.position = "relative";
    wrapper.style.maxWidth = "100%";
    wrapper.style.margin = "10px 0";
    wrapper.contentEditable = "false";

    const img = document.createElement("img");
    img.src = base64;
    img.style.width = "300px";
    img.style.height = "auto";
    img.style.display = "block";
    img.style.border = "1px dashed gray";
    img.style.padding = "2px";
    img.draggable = true;

    // Resize handle div
    const handle = document.createElement("div");
    handle.style.width = "10px";
    handle.style.height = "10px";
    handle.style.background = "gray";
    handle.style.position = "absolute";
    handle.style.right = "0";
    handle.style.bottom = "0";
    handle.style.cursor = "nwse-resize";
    handle.style.userSelect = "none";

    let isResizing = false;

    handle.addEventListener("mousedown", (e) => {
      e.preventDefault();
      isResizing = true;
      document.addEventListener("mousemove", resize);
      document.addEventListener("mouseup", stopResize);
    });

    function resize(e: MouseEvent) {
      if (!isResizing) return;
      const rect = wrapper.getBoundingClientRect();
      let newWidth = e.clientX - rect.left;
      if (newWidth < 50) newWidth = 50; // minimum width
      img.style.width = newWidth + "px";
    }

    function stopResize() {
      isResizing = false;
      document.removeEventListener("mousemove", resize);
      document.removeEventListener("mouseup", stopResize);
      // Update editor content HTML after resize
      setHtmlOutput(editorRef.current?.innerHTML || "");
    }

    wrapper.appendChild(img);
    wrapper.appendChild(handle);

    const range = window.getSelection()?.getRangeAt(0);
    if (range) {
      range.deleteContents();
      range.insertNode(wrapper);
      setHtmlOutput(editorRef.current?.innerHTML || "");
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      insertResizableImage(base64);
    };
    reader.readAsDataURL(file);
  };

  const handleDropImage = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      insertResizableImage(base64);
    };
    reader.readAsDataURL(file);
  };

  const applyLink = () => {
    const url = prompt("Enter the URL");
    if (url) {
      format("createLink", url);
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    format("foreColor", e.target.value);
  };

  const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    format("hiliteColor", e.target.value);
  };

  return (
    <div className="bg-[#0b0b1d] p-6 rounded-lg max-w-3xl mx-auto text-white">
      {/* Toolbar */}
      <div className="flex gap-3 flex-wrap text-white mb-4 items-center z-10 relative">
        {[
          "bold",
          "italic",
          "underline",
          "insertOrderedList",
          "insertUnorderedList",
          "justifyLeft",
          "justifyCenter",
          "justifyRight",
        ].map((cmd) => (
          <button
            key={cmd}
            onClick={() => format(cmd)}
            className={`hover:text-purple-400`}
          >
            {cmd === "bold" && "B"}
            {cmd === "italic" && "I"}
            {cmd === "underline" && "U"}
            {cmd === "insertOrderedList" && "OL"}
            {cmd === "insertUnorderedList" && "UL"}
            {cmd === "justifyLeft" && "←"}
            {cmd === "justifyCenter" && "↔"}
            {cmd === "justifyRight" && "→"}
          </button>
        ))}

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          id="imageUpload"
        />
        <label
          htmlFor="imageUpload"
          className="cursor-pointer hover:text-purple-400"
        >
          📷
        </label>

        <button onClick={applyLink} className="hover:text-purple-400">
          🔗
        </button>

        <input
          type="color"
          onChange={handleColorChange}
          title="Text color"
          className="w-6 h-6 cursor-pointer"
        />

        <input
          type="color"
          onChange={handleBgColorChange}
          title="Background color"
          className="w-6 h-6 cursor-pointer"
        />

        <select
          onChange={(e) => format("fontSize", e.target.value)}
          className="bg-[#1f1f2f] text-white rounded px-2 py-1"
        >
          <option value="">Font Size</option>
          <option value="1">10px</option>
          <option value="2">13px</option>
          <option value="3">16px</option>
          <option value="4">18px</option>
          <option value="5">24px</option>
          <option value="6">32px</option>
          <option value="7">48px</option>
        </select>

        <select
          onChange={(e) => format("fontName", e.target.value)}
          className="bg-[#1f1f2f] text-white rounded px-2 py-1"
        >
          <option value="">Font Family</option>
          <option value="Arial">Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Verdana">Verdana</option>
        </select>

        <select
          onChange={(e) => {
            editorRef.current?.style.setProperty("line-height", e.target.value);
            setHtmlOutput(editorRef.current?.innerHTML || "");
          }}
          className="bg-[#1f1f2f] text-white rounded px-2 py-1"
        >
          <option value="">Line Height</option>
          <option value="1">1</option>
          <option value="1.5">1.5</option>
          <option value="2">2</option>
          <option value="2.5">2.5</option>
        </select>
      </div>

      {/* Editor Area */}
      <div
        ref={editorRef}
        contentEditable
        data-placeholder="Write something awesome..."
        onInput={() => setHtmlOutput(editorRef.current?.innerHTML || "")}
        onDrop={handleDropImage}
        onDragOver={(e) => e.preventDefault()}
        className="w-full min-h-[150px] p-3 bg-[#1f1f2f] text-white rounded outline-none mb-3 prose prose-invert list-outside list-disc marker:text-white relative z-0"
        style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}
      >
        {!htmlOutput && (
          <div className="absolute left-4 top-3 text-gray-400 pointer-events-none">
            Write something awesome...
          </div>
        )}
      </div>

      {htmlOutput && (
        <div className="mt-6 bg-black p-4 rounded text-green-400 text-sm overflow-x-auto whitespace-pre-wrap">
          <h3 className="text-white font-semibold mb-2">Converted HTML:</h3>
          <code>{htmlOutput}</code>
        </div>
      )}
    </div>
  );
};

export default TextEditor;
