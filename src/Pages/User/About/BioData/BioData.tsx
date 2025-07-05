import { useEffect, useState } from "react";

interface IBioData {
  [key: string]: string;
}

const BioData = () => {
  const [data, setData] = useState<IBioData>({});
  useEffect(() => {
    fetch("/bioData.json")
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, []);
  const keys = Object.keys(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full text-white gap-x-80">
      {keys.map((k, idx: number) => (
        <p className="text-white  " key={idx}>
          <span className=" w-[1000px] grid grid-cols-2  ">
            {" "}
            <span className="font-bold">{k}:</span>{" "}
            <span className=" relative right-[400px] c ">{data[k]}</span>
          </span>
        </p>
      ))}
    </div>
  );
};

export default BioData;
