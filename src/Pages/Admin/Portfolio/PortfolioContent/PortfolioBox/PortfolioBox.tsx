import DeleteButton from "@/components/AdminActionButtons/DeleteButton/DeleteButton";
import UpdateButton from "@/components/AdminActionButtons/UpdateButton/UpdateButton";
import PrimaryButton from "@/components/PortfolioButton/PrimaryButton";
import { Link } from "react-router";

interface IPortfolioBoxProps {
  title: string;
  image: string;
  isAdmin: boolean;
}

const PortfolioBox = ({ title, image, isAdmin }: IPortfolioBoxProps) => {
  isAdmin = false;
  return (
    <div className="relative group rounded-[12px] shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300 flex flex-col primaryBox">
      {/* Admin Buttons */}
      {isAdmin && (
        <div className="absolute top-2 right-2 z-10 flex items-center gap-x-2">
          <UpdateButton />
          <DeleteButton />
        </div>
      )}

      {/* Image Box */}
      <div className="relative overflow-hidden h-60">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay with button */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <Link to={`/portfolio-detail/${title}`}>
            <PrimaryButton text="Read More" />
          </Link>
        </div>
      </div>

      {/* Title */}
      <div className="p-4 text-center ">
        <h3 className="text-lg font-semibold ">{title}</h3>
      </div>
    </div>
  );
};

export default PortfolioBox;
