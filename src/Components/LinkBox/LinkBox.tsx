import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface IProps {
  text1?: string;
  text2?: string;
  text3?: string;
}

const LinkBox = ({ text1, text2, text3 }: IProps) => {
  return (
    <div className="">
      <span className="bg-[#222222] p-3 text-white ">
        {text1}
        <span className={`${text2 ? "" : "hidden"}`}>
          {" "}
          <KeyboardArrowRightIcon />{" "}
        </span>
        {text2}
        {text3}
      </span>
    </div>
  );
};

export default LinkBox;
