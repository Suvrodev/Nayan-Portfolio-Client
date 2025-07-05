import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PricingText = ({ all }: { all: any }) => {
  const { title, text } = all;
  return (
    <div className="c">
      <span>
        <ArrowRightAltIcon />
      </span>
      <span>{title}</span> : <span>{text}</span>
    </div>
  );
};

export default PricingText;
