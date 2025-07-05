import { useEffect, useState } from "react";
import TimeLine from "./TimeLine/TimeLine";

const EducationExperience = () => {
  const [educations, setEducation] = useState([]);
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    fetch("/educations.json")
      .then((res) => res.json())
      .then((data) => setEducation(data));
  }, []);

  useEffect(() => {
    fetch("/experience.json")
      .then((res) => res.json())
      .then((data) => setExperiences(data));
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row text-white ">
        {/* For educations */}
        <div className="w-full md:w-1/2 flex flex-col ">
          <h1 className="text-xl font-bold text-white mb-10">Educations</h1>
          {/* TimeLineDag */}
          <div className=" flex">
            <div className="bg-white w-[2px] h-full  "></div>
            <div className="flex flex-col gap-10 ">
              {educations.map((education, idx) => (
                <TimeLine key={idx} education={education} />
              ))}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="w-full md:w-1/2 flex flex-col ">
          {/* TimeLineDag */}
          <h1 className="text-xl font-bold text-white mb-10">Experience</h1>
          <div className="flex">
            <div className="bg-white w-[1px] h-full ">
              {/* <p className="h-auto w-[1px] bg-white"></p> */}
            </div>
            <div className="flex flex-col gap-10">
              {experiences.map((education, idx) => (
                <TimeLine key={idx} education={education} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
