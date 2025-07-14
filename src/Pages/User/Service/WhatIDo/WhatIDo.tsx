import { Link } from "react-router";
import ServiceBox from "./ServiceBox/ServiceBox";
import type { TServcie } from "@/utils/types/globalTypes";
import { useAppSelector } from "@/redux/hooks";
import PrimaryButton from "@/components/PortfolioButton/PrimaryButton";

const WhatIDo = ({ isAdmin }: { isAdmin: boolean }) => {
  const { serviceStore } = useAppSelector((state) => state.services);

  return (
    <div>
      <h1 className="text-4xl text-white font-bold">What I do</h1>
      <div className={`${isAdmin ? "" : "hidden"} mt-10`}>
        <Link to={`addservice`}>
          <PrimaryButton text="Add Service" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
        {serviceStore?.map((servcie: TServcie, idx: number) => (
          <ServiceBox key={idx} service={servcie} isAdmin={isAdmin} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
