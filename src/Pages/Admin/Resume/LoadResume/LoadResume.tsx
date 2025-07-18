import { useGetSingleResumeQuery } from "@/redux/features/resume/resumeApi";

const LoadResume = () => {
  const { data, isLoading } = useGetSingleResumeQuery(undefined);
  const resume = data?.data;

  const handleDownload = (base64Data: string) => {
    if (!base64Data.startsWith("data:application/pdf;base64,")) {
      alert("Invalid resume format.");
      return;
    }

    const byteString = atob(base64Data.split(",")[1]);
    const byteArray = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      byteArray[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([byteArray], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url); // Clean up
  };

  if (isLoading) {
    return <p>Loadingg...</p>;
  }
  return (
    <div>
      {/* Show Resume if exists */}
      {resume?.resume && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-3">📄 Uploaded Resume</h3>

          {/* PDF Preview */}
          <iframe
            src={resume.resume}
            title="Uploaded Resume"
            className="w-full h-[500px] border rounded"
          ></iframe>

          {/* Download Button */}
          <button
            onClick={() => handleDownload(resume.resume)}
            className="inline-block mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white font-medium"
          >
            ⬇️ Download Resume
          </button>
        </div>
      )}
    </div>
  );
};

export default LoadResume;
