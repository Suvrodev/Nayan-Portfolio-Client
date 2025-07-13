import React from "react";

interface EditorProps {
  editorRef: React.RefObject<HTMLDivElement | null>;
  htmlOutput: string;
  setHtmlOutput: (html: string) => void;
  insertResizableImage: (base64: string) => void;
}

const EditorArea: React.FC<EditorProps> = ({
  editorRef,
  htmlOutput,
  setHtmlOutput,
  insertResizableImage,
}) => {
  // Handle image drop
  const handleDropImage = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      insertResizableImage(base64); // ✅ used
    };
    reader.readAsDataURL(file);
  };

  // Deselect any selected image
  const handleEditorClick = () => {
    const selectedImages = editorRef.current?.querySelectorAll(".selected");
    selectedImages?.forEach((el) => el.classList.remove("selected"));
  };

  return (
    <div
      ref={editorRef}
      contentEditable
      data-placeholder="Write something awesome..."
      onInput={() => setHtmlOutput(editorRef.current?.innerHTML || "")}
      onDrop={handleDropImage}
      onDragOver={(e) => e.preventDefault()}
      onClick={handleEditorClick}
      className="w-full min-h-[150px] p-3 bg-[#1f1f2f] text-white rounded outline-none mb-3 relative z-0"
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
  );
};

export default EditorArea;
