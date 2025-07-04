import { Link } from "react-router";
import "./Consult.css";
const Consult = () => {
  return (
    <div className="imageBox flex items-center justify-center text-white">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl md:text-4xl font-bold text-white">
          Get a Free Consultation For
        </h1>
        <h1 className="text-4xl font-bold text-white">Next Project</h1>
        <Link to={"/contact"}>
          {" "}
          <button className="mt-10 py-4 px-6 md:btn-lg bg-white font-bold text-black border-0 rounded-none hover:bg-white ">
            Contact Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Consult;
