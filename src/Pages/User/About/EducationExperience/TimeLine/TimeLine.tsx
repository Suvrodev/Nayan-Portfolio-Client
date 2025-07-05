import type { TEducation } from "@/utils/types/globalTypes";

interface IProps {
  education: TEducation;
}

const TimeLine = ({ education }: IProps) => {
  return (
    <div className="flex items-start md:items-center gap-4 ">
      <div className="flex items-center gap-4">
        <p className="w-[20px] h-[20px] rounded-full bg-green-400 relative right-[10px] top-3 md:top-0"></p>
        <p className="primaryBox py-2 px-4 rounded-2xl w-[130px] text-center hidden md:block">
          {education?.year}
        </p>
      </div>
      <div className="flex flex-col gap-5 md:gap-0">
        <p className="bg-[#333333] py-2 px-4 rounded-2xl  md:hidden">
          {education?.year}
        </p>
        <p className="text-[16px] font-bold ">{education?.institute}</p>
        <p className="c">{education?.topic}</p>
      </div>
    </div>
  );
};

export default TimeLine;
