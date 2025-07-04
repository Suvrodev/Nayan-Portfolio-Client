import "./HomeButton.css";
import samplePDF from "../../../../assets/CV/sample.pdf";
import PrimaryButton from "@/Components/Button/PrimaryButton";

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
          <PrimaryButton
            text="Download CV"
            onClick={() => handleDownloadCV()}
          />

          <PrimaryButton
            text="Fiver"
            onClick={() => goLink("https://www.fiverr.com/sarkar_nayan")}
          />

          <PrimaryButton
            text="Upwork"
            onClick={() =>
              goLink("https://www.upwork.com/freelancers/~01f71c2421f00e1d48")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HomeButton;
