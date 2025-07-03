import { useEffect, useState } from "react";
import HomeServiceDesign from "./HomeServiceDesign/HomeServiceDesign";

const HomeService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/homeService.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="flex flex-col  justify-center  ">
        {services.map((service, idx) => (
          <HomeServiceDesign
            key={idx}
            idx={idx}
            service={service}
          ></HomeServiceDesign>
        ))}
      </div>
    </div>
  );
};

export default HomeService;
