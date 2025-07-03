import "./Home.css";

import HomeButton from "./HomeButton/HomeButton";
import homeImage from "../../../assets/homeImage/sarkar_nayan_home.jpg";
import HomeService from "./HomeService/HomeService";
import Testimonial from "./Testimonial/Testimonial";
import WeAccept from "./WeAccept/WeAccept";

const Home = () => {
  const divStyle = {
    backgroundImage: `url(${homeImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-10 md:mt-60 w-full p-4 md:p-0">
        <div className="flex flex-col md:flex-row gap-10 w-full md:w-[75%] ">
          <div className="">
            <div
              className="abs_img  border-8 border-[#cccccc] w-[250px] h-[250px] md:w-[350px] md:h-[350px] mx-auto"
              style={divStyle}
            ></div>
          </div>

          <div className="flex flex-col justify-center gap-6 ">
            <h1 className="text-white text-[30px]  lg:text-[55px] font-bold uppercase">
              Sarkar Nayan
            </h1>
            <p className="text-[20px] c px15 f500 leading-[30px]">
              Highly motivated and detail-oriented Web Developer with a
              Bachelor's degree in Computer Science and Engineering for 4 years.
              Proficient in PHP, with a deep understanding of the Laravel
              framework. Seeking to leverage my technical skills and passion for
              web development to provide high-quality, user-centric solutions in
              a challenging role. Committed to producing high-quality,
              innovative, and scalable code to drive the success of your team
              and projects.
            </p>
            <div className="flex gap-4 items-center">
              <HomeButton />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="my-28 w-full  mx-auto flex flex-col gap-20 p-4 md:px-[200px] md:py-28 bg-[#222222]">
          <HomeService />
        </div>
        <div className="p-4 md:px-10 md:py-20 ">
          <Testimonial />
        </div>
        <div className="bg-[#222222] p-20">
          <WeAccept />
        </div>
      </div>
    </div>
  );
};

export default Home;
