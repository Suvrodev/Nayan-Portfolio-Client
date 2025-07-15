import React, { useRef } from "react";
import JoditEditor from "jodit-react";

interface TJoditProps {
  value: string;
  onChange: (value: string) => void;
}

const JoditEditorComponent: React.FC<TJoditProps> = ({ value, onChange }) => {
  const editorRef = useRef(null);

  return (
    <div className="bg-white text-black rounded overflow-hidden">
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
        config={{
          readonly: false,
          height: 300,
          placeholder: "Write your content here...",
        }}
      />
    </div>
  );
};

export default JoditEditorComponent;
