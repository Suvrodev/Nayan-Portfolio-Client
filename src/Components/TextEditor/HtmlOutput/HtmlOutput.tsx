const HtmlOutput = ({ htmlOutput }: { htmlOutput: string }) => {
  if (!htmlOutput) return null;

  return (
    <div className="mt-6 bg-black p-4 rounded text-green-400 text-sm overflow-x-auto whitespace-pre-wrap">
      <h3 className="text-white font-semibold mb-2">Converted HTML:</h3>
      <code>{htmlOutput}</code>
    </div>
  );
};

export default HtmlOutput;
