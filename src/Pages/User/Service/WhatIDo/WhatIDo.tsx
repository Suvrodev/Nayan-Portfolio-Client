import { useEffect, useState } from "react";
import { Link } from "react-router";
import ServiceBox from "./ServiceBox/ServiceBox";

const WhatIDo = ({ isAdmin }: { isAdmin: boolean }) => {
  isAdmin = false;

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`/service.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log("Service: ", services);
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
        {services?.map((servcie, idx) => (
          <ServiceBox key={idx} service={servcie} isAdmin={true} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
