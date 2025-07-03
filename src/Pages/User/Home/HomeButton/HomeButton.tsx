import "./HomeButton.css";
import samplePDF from "../../../../assets/CV/sample.pdf";

const HomeButton = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    // link.href = `${process.env.PUBLIC_URL}/sample.pdf`;
    link.href = samplePDF;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log("Download");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const goLink = (link: any) => {
    window.open(link, "_blank");
  };

  return (
    <div>
      <div>
        <div className="flex gap-4 justify-center">
          <div
            className="bg-black border border-white text-white px-4 py-2 rounded-[7px] flex items-center justify-center"
            onClick={handleDownloadCV}
          >
            Download CV
          </div>
          <button
            className="bg-black border border-white text-white px-4 py-2 rounded-[7px] flex items-center justify-center"
            onClick={() => goLink("https://www.fiverr.com/sarkar_nayan")}
          >
            Fiver
          </button>
          <button
            className="bg-black border border-white text-white px-4 py-2 rounded-[7px] flex items-center justify-center"
            onClick={() =>
              goLink("https://www.upwork.com/freelancers/~01f71c2421f00e1d48")
            }
          >
            Upwork
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeButton;
