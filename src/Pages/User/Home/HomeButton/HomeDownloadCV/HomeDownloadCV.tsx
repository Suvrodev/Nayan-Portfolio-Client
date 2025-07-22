import { useGetSingleResumeQuery } from "@/redux/features/resume/resumeApi";

const HomeDownloadCV = () => {
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
    link.download = "Sarkar Nayan.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url); // Clean up
  };

  //   if (isLoading) {
  //     return <p>Loadingg...</p>;
  //   }
  return (
    <button
      onClick={() => handleDownload(resume.resume)}
      className="primaryButton"
    >
      {isLoading ? <span>Loading...</span> : <span> Download CV</span>}
    </button>
  );
};

export default HomeDownloadCV;
