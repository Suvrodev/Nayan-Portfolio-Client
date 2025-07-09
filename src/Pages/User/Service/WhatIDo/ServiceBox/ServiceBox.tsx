import "./ServiceBox.css";
import { Link } from "react-router";
import ServiceModal from "./ServiceModal/ServiceModal";
import type { TServcie } from "@/utils/types/globalTypes";

interface IProps {
  service: TServcie;
  isAdmin: boolean;
  idx: number;
}

const ServiceBox = ({ service, isAdmin, idx }: IProps) => {
  isAdmin = false;
  const number = idx + 1;
  const { _id, title, desc, popupDesc, image } = service;

  //   const handleDelete = (_id) => {
  //     console.log("Delete id: ", _id);
  //     axios.delete(`${baseUrl}/service/${_id}`).then((res) => {
  //       if (res.data.deletedCount > 0) {
  //         successfullToast("Deleted Successfully");
  //         setGetDep(!getDep);
  //       }
  //     });
  //   };

  return (
    <div>
      <div className="primaryBox rounded-[4px] py-10 px-10 text-white h-[450px] relative">
        <div className="flex flex-col gap-4 justify-center">
          <div className="flex justify-between">
            <span className="bg-[#333333] w-[70px] h-[70px] rounded-full flex items-center justify-center font-bold text-xl ">
              {number}
            </span>
            <span></span>
          </div>
          <h1 className="text-2xl font-bold mt-4">{title}</h1>
          <p className="c">{desc}</p>
        </div>
        <div className="py-4 absolute bottom-[20px]">
          {/* <ServiceModal image={image} popupDesc={popupDesc} /> */}
          <Link to={`/service-detail/${_id}`}>
            <div className="group font-bold flex items-center gap-2 cursor-pointer w-fit overflow-hidden">
              {/* Read More text - animate in */}
              <p className="transform -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700">
                Read More
              </p>

              {/* HR line - animate out */}
              <hr className="w-[40px] bg-white h-[2px] transform group-hover:translate-x-6 transition-all duration-700" />
            </div>
          </Link>
        </div>

        {/* Update and Delete */}
        <div
          className={`${
            isAdmin ? "" : "hidden"
          } absolute  flex gap-2 bottom-0 right-0`}
        >
          <div className="bg-red-500 p-2 rounded-md flex justify-center text-white">
            {/* <button onClick={() => handleDelete(_id)}>
              <DeleteIcon />
            </button> */}
          </div>
          <div className="bg-green-500 p-2 rounded-md flex justify-center text-white">
            <Link to={`updateservice/${_id}`}>
              {" "}
              {/* <button>
                <BrowserUpdatedIcon />
              </button> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
