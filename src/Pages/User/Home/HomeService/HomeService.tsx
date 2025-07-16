import type { TService } from "@/utils/types/globalTypes";
import HomeServiceDesign from "./HomeServiceDesign/HomeServiceDesign";

import { useAppSelector } from "@/redux/hooks";

const HomeService = () => {
  const { serviceStore } = useAppSelector((state) => state.services);
  return (
    <div>
      <div className="flex flex-col  justify-center gap-y-4 md:gap-y-0 ">
        {serviceStore?.map((service: TService, idx: number) => (
          <HomeServiceDesign key={idx} idx={idx} service={service} />
        ))}
      </div>
    </div>
  );
};

export default HomeService;
