import React, { useRef } from "react";
import "./JoditEditorComponent.css";

import JoditEditor from "jodit-react";

interface TJoditProps {
  value: string;
  onChange: (value: string) => void;
}

const JoditEditorComponent: React.FC<TJoditProps> = ({ value, onChange }) => {
  const editorRef = useRef(null);

  return (
    <div className="bg-black text-black rounded overflow-hidden">
      {/* <JoditEditor
        ref={editorRef}
        value={value} // optional: don't pass if you face cursor jump
        onChange={(newContent) => onChange(newContent)}
        config={{
          readonly: false,
          height: 300,
          placeholder: "Write your content here...",
        }}
      /> */}
      {/* <JoditEditor
        ref={editorRef}
        onChange={(newContent) => onChange(newContent)}
        config={{
          readonly: false,
          height: 300,
          placeholder: "Write your content here...",
        }}
      /> */}

      <JoditEditor
        ref={editorRef}
        value={value} // এখন value ব্যবহার হচ্ছে, warning চলে যাবে
        onChange={(newContent) => {
          onChange(newContent);
        }}
        className="editorBg"
        config={{
          readonly: false,
          height: 700,
          placeholder: "Write your content here...",
          theme: "dark",
          iframe: true,
          iframeStyle: `
      body {
        background-color: #292929 !important;
        color: #fff !important;
        font-family: Arial, sans-serif;
      }
      p, div, span, ul, li, h1, h2, h3, h4, h5, h6 {
        color: #fff !important;
        background-color: transparent !important;
        font-size: 16px;
      }
    `,
        }}
      />
    </div>
  );
};

export default JoditEditorComponent;
