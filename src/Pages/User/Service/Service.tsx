import LinkBox from "@/components/LinkBox/LinkBox";
import { useTitle } from "@/utils/hook/useTitle";
import Consult from "./Consult/Consult";
import WhatIDo from "./WhatIDo/WhatIDo";
import PricingList from "./PricingList/PricingList";

interface IProps {
  isAdmin: boolean;
}

const Service = ({ isAdmin }: IProps) => {
  useTitle("Service");
  return (
    <div className="overflow-hidden">
      <div className="pageMargin">
        <LinkBox text1={"Service"} />
      </div>
      <div className="pageMargin">
        <WhatIDo isAdmin={isAdmin} />
      </div>
      {/* <div className="p-5 md:p-28 bg-[#222222]">
        <TrustedClients />
      </div> */}
      <div>
        <Consult />
      </div>
      {/* <div className="p-5 md:p-28"> */}
      <div className="pageMargin">
        <PricingList />
      </div>
      {/* <div className="pageMargin">
        <FunFact />
      </div> */}
    </div>
  );
};

export default Service;
