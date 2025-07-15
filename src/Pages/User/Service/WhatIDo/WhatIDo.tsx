import ServiceBox from "./ServiceBox/ServiceBox";
import type { TService } from "@/utils/types/globalTypes";
import { useAppSelector } from "@/redux/hooks";
import PrimaryButton from "@/components/PortfolioButton/PrimaryButton";

const WhatIDo = ({ isAdmin }: { isAdmin: boolean }) => {
  const { serviceStore } = useAppSelector((state) => state.services);

  return (
    <div>
      <h1 className="text-4xl text-white font-bold">What I do</h1>
      <div className={`${isAdmin ? "" : "hidden"} mt-10 `}>
        <PrimaryButton text="Add Service" to="add-service" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
        {serviceStore?.map((servcie: TService, idx: number) => (
          <ServiceBox key={idx} service={servcie} isAdmin={isAdmin} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
