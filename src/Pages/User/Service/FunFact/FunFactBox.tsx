import type { TFun } from "@/utils/types/globalTypes";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface IProps {
  fun: TFun;
}

const FunFactBox = ({ fun }: IProps) => {
  const { number, title, botText } = fun;

  const { ref, inView } = useInView({
    triggerOnce: true, // একবারই animate হবে
    threshold: 0.2, // 20% viewport visible হলে শুরু করবে
  });

  return (
    <div
      className="flex items-center justify-center border-[1px] gap-4 bg-[#292929] p-10"
      ref={ref}
    >
      <div className="flex flex-col gap-8">
        <div className="text-2xl font-bold text-center">{title}</div>
        <div className="flex items-center justify-center gap-1 text-2xl font-bold">
          <h1 className="text-[60px] font-bold">
            {inView && <CountUp end={number} duration={2} />}
          </h1>
        </div>
        <div className="text-2xl font-bold text-center">{botText}</div>
      </div>
    </div>
  );
};

export default FunFactBox;
