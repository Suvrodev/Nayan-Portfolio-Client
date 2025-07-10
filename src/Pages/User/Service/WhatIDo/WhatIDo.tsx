import { Link } from "react-router";
import ServiceBox from "./ServiceBox/ServiceBox";
import type { TServcie } from "@/utils/types/globalTypes";
import { useAppSelector } from "@/redux/hooks";

const WhatIDo = ({ isAdmin }: { isAdmin: boolean }) => {
  isAdmin = false;

  const { serviceStore } = useAppSelector((state) => state.services);

  return (
    <div>
      <h1 className="text-4xl text-white font-bold">What I do</h1>
      <div className={`${isAdmin ? "" : "hidden"} mt-10`}>
        <Link to={`/dashboard/service/addservice`}>
          {" "}
          <button className="btn btn-primary text-white">Add Service</button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
        {serviceStore?.map((servcie: TServcie, idx: number) => (
          <ServiceBox key={idx} service={servcie} isAdmin={true} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
