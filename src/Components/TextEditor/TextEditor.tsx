/**
 * TextEditor.tsx - Fully Enhanced Custom Editor with Superscript, Subscript, Strikethrough
 * Plus:
 * 1. Image select with visible outline
 * 2. Image alignment buttons (left, center, right, reset)
 * 3. Image rotation buttons (+15°, -15°)
 * 4. Clear formatting button to reset styles and formatting to default
 */

import React, { useRef, useState } from "react";
import "./TextEditor.css";

const TextEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [htmlOutput, setHtmlOutput] = useState("");

  // Formatting function remains same
  const format = (command: string, value: string = "") => {
    const editor = editorRef.current;
    if (!editor) return;

    editor.focus();

    const selection = window.getSelection();

    // Ensure editor has paragraph and caret inside text node
    if (editor.innerHTML.trim() === "") {
      const p = document.createElement("p");
      const textNode = document.createTextNode("\u200B"); // zero-width space
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

  // Insert image with resizable handle + selectable + rotation + alignment support
  const insertResizableImage = (base64: string) => {
    const wrapper = document.createElement("div");
    wrapper.style.display = "inline-block";
    wrapper.style.position = "relative";
    wrapper.style.maxWidth = "100%";
    wrapper.style.margin = "10px 0";
    wrapper.contentEditable = "false";
    wrapper.classList.add("image-wrapper");

    const img = document.createElement("img");
    img.src = base64;
    img.style.width = "300px";
    img.style.height = "auto";
    img.style.display = "block";
    img.style.border = "1px dashed gray";
    img.style.padding = "2px";
    img.draggable = true;

    // For rotation, store current rotation angle
    img.setAttribute("data-rotation", "0");

    // Resize handle
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
      if (newWidth < 50) newWidth = 50;
      img.style.width = newWidth + "px";
    }

    function stopResize() {
      isResizing = false;
      document.removeEventListener("mousemove", resize);
      document.removeEventListener("mouseup", stopResize);
      setHtmlOutput(editorRef.current?.innerHTML || "");
    }

    // Image selection logic: click to select this image wrapper, deselect others
    wrapper.addEventListener("click", (e) => {
      e.stopPropagation();
      const editor = editorRef.current;
      if (!editor) return;
      const selectedImages = editor.querySelectorAll(".selected");
      selectedImages.forEach((el) => el.classList.remove("selected"));

      wrapper.classList.add("selected");
    });

    wrapper.appendChild(img);
    wrapper.appendChild(handle);

    const range = window.getSelection()?.getRangeAt(0);
    if (range) {
      range.deleteContents();
      range.insertNode(wrapper);
      setHtmlOutput(editorRef.current?.innerHTML || "");
    }
  };

  // Handle clicking outside images to deselect any selected image
  const handleEditorClick = () => {
    const editor = editorRef.current;
    if (!editor) return;
    const selectedImages = editor.querySelectorAll(".selected");
    selectedImages.forEach((el) => el.classList.remove("selected"));
  };

  // Image upload handlers same as before
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

  // Toolbar handlers for image alignment and rotation
  // const alignSelectedImage = (align: "left" | "center" | "right" | "reset") => {
  //   const editor = editorRef.current;
  //   if (!editor) return;
  //   const selected = editor.querySelector(".selected") as HTMLElement | null;
  //   if (!selected) return alert("Select an image first");

  //   selected.style.display = "block";

  //   if (align === "left") {
  //     selected.style.marginLeft = "0";
  //     selected.style.marginRight = "auto";
  //     selected.style.textAlign = "";
  //   } else if (align === "center") {
  //     selected.style.marginLeft = "auto";
  //     selected.style.marginRight = "auto";
  //     selected.style.textAlign = "";
  //   } else if (align === "right") {
  //     selected.style.marginLeft = "auto";
  //     selected.style.marginRight = "0";
  //     selected.style.textAlign = "";
  //   } else if (align === "reset") {
  //     selected.style.marginLeft = "";
  //     selected.style.marginRight = "";
  //     selected.style.textAlign = "";
  //     selected.style.display = "";
  //   }

  //   setHtmlOutput(editor.innerHTML);
  // };

  const alignSelectedImage = (align: "left" | "center" | "right" | "reset") => {
    const editor = editorRef.current;
    if (!editor) return;
    const selectedWrapper = editor.querySelector(
      ".selected"
    ) as HTMLElement | null;
    if (!selectedWrapper) return alert("Select an image first");

    // Reset styles first
    selectedWrapper.style.float = "";
    selectedWrapper.style.display = "";
    selectedWrapper.style.marginLeft = "";
    selectedWrapper.style.marginRight = "";
    selectedWrapper.style.textAlign = "";

    const img = selectedWrapper.querySelector("img");
    if (img) {
      img.style.display = "block";
      img.style.margin = "";
    }

    if (align === "left") {
      selectedWrapper.style.float = "left";
      selectedWrapper.style.marginRight = "1rem";
      if (img) {
        img.style.display = "block";
        img.style.margin = "";
      }
    } else if (align === "center") {
      selectedWrapper.style.display = "block";
      selectedWrapper.style.textAlign = "center";
      if (img) {
        img.style.display = "inline-block";
        img.style.margin = "0";
      }
    } else if (align === "right") {
      selectedWrapper.style.float = "right";
      selectedWrapper.style.marginLeft = "1rem";
      if (img) {
        img.style.display = "block";
        img.style.margin = "";
      }
    } else if (align === "reset") {
      // Also reset rotation of inner img to zero on reset
      if (img) {
        img.style.transform = "rotate(0deg)";
        img.setAttribute("data-rotation", "0");
        img.style.display = "block";
        img.style.margin = "";
      }
    }

    setHtmlOutput(editor.innerHTML);
  };

  const rotateSelectedImage = (degDelta: number) => {
    const editor = editorRef.current;
    if (!editor) return;
    const selectedImg = editor.querySelector(
      ".selected img"
    ) as HTMLElement | null;
    if (!selectedImg) return alert("Select an image first");

    let currentRotation = Number(
      selectedImg.getAttribute("data-rotation") || "0"
    );
    currentRotation += degDelta;

    selectedImg.style.transform = `rotate(${currentRotation}deg)`;
    selectedImg.setAttribute("data-rotation", currentRotation.toString());

    setHtmlOutput(editor.innerHTML);
  };

  // Clear formatting button handler
  const clearFormatting = () => {
    const editor = editorRef.current;
    if (!editor) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    // ExecCommand removeFormat on selected content - clears most formatting but keeps images
    document.execCommand("removeFormat");

    // Additionally reset foreColor and hiliteColor
    document.execCommand("foreColor", false, "inherit");
    document.execCommand("hiliteColor", false, "transparent");

    // Optional: reset font size and font name if needed (execCommand not always works)
    // This part is complex and may require manual DOM walk to remove inline styles from selected nodes

    setHtmlOutput(editor.innerHTML);
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
            className="hover:text-purple-400"
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

        {/* Additional formatting buttons */}
        <button
          onClick={() => format("superscript")}
          className="hover:text-purple-400"
        >
          x<sup>2</sup>
        </button>
        <button
          onClick={() => format("subscript")}
          className="hover:text-purple-400"
        >
          x<sub>2</sub>
        </button>
        <button
          onClick={() => format("strikeThrough")}
          className="hover:text-purple-400"
        >
          <s>abc</s>
        </button>

        {/* Image upload */}
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
          title="Upload Image"
        >
          📷
        </label>

        {/* Link */}
        <button
          onClick={applyLink}
          className="hover:text-purple-400"
          title="Insert Link"
        >
          🔗
        </button>

        {/* Text color */}
        <input
          type="color"
          onChange={handleColorChange}
          title="Text color"
          className="w-6 h-6 cursor-pointer"
        />

        {/* Background color */}
        <input
          type="color"
          onChange={handleBgColorChange}
          title="Background color"
          className="w-6 h-6 cursor-pointer"
        />

        {/* Font Size */}
        <select
          onChange={(e) => format("fontSize", e.target.value)}
          className="bg-[#1f1f2f] text-white rounded px-2 py-1"
          title="Font Size"
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

        {/* Font Family */}
        <select
          onChange={(e) => format("fontName", e.target.value)}
          className="bg-[#1f1f2f] text-white rounded px-2 py-1"
          title="Font Family"
        >
          <option value="">Font Family</option>
          <option value="Arial">Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Verdana">Verdana</option>
        </select>

        {/* Line Height */}
        <select
          onChange={(e) => {
            editorRef.current?.style.setProperty("line-height", e.target.value);
            setHtmlOutput(editorRef.current?.innerHTML || "");
          }}
          className="bg-[#1f1f2f] text-white rounded px-2 py-1"
          title="Line Height"
        >
          <option value="">Line Height</option>
          <option value="1">1</option>
          <option value="1.5">1.5</option>
          <option value="2">2</option>
          <option value="2.5">2.5</option>
        </select>

        {/* --- New Image Alignment Buttons --- */}
        <button
          onClick={() => alignSelectedImage("left")}
          className="hover:text-purple-400"
          title="Align Image Left"
        >
          🡸 Img Left
        </button>
        <button
          onClick={() => alignSelectedImage("center")}
          className="hover:text-purple-400"
          title="Align Image Center"
        >
          ↔ Img Center
        </button>
        <button
          onClick={() => alignSelectedImage("right")}
          className="hover:text-purple-400"
          title="Align Image Right"
        >
          🡺 Img Right
        </button>
        <button
          onClick={() => alignSelectedImage("reset")}
          className="hover:text-purple-400"
          title="Reset Image Alignment"
        >
          ⭯ Img Reset
        </button>

        {/* --- New Image Rotation Buttons --- */}
        <button
          onClick={() => rotateSelectedImage(15)}
          className="hover:text-purple-400"
          title="Rotate Image +15°"
        >
          ↻ Rotate +
        </button>
        <button
          onClick={() => rotateSelectedImage(-15)}
          className="hover:text-purple-400"
          title="Rotate Image -15°"
        >
          ↺ Rotate -
        </button>

        {/* --- Clear Formatting --- */}
        <button
          onClick={clearFormatting}
          className="hover:text-purple-400"
          title="Clear Formatting"
        >
          🧹 Clear Format
        </button>
      </div>

      {/* Editor Area */}
      <div
        ref={editorRef}
        contentEditable
        data-placeholder="Write something awesome..."
        onInput={() => setHtmlOutput(editorRef.current?.innerHTML || "")}
        onDrop={handleDropImage}
        onDragOver={(e) => e.preventDefault()}
        onClick={handleEditorClick}
        className="w-full min-h-[150px] p-3 bg-[#1f1f2f] text-white rounded outline-none mb-3 prose prose-invert list-outside list-disc marker:text-white relative z-0"
        style={{
          listStyleType: "disc",
          paddingLeft: "1.5rem",
          maxHeight: "400px",
          overflowY: "auto",
        }}
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
