import LinkBox from "@/components/LinkBox/LinkBox";
import PrimaryButton from "@/components/PortfolioButton/PrimaryButton";
import { useTitle } from "@/utils/hook/useTitle";
import { Link } from "react-router";
import PortfolioContent from "./PortfolioContent/PortfolioContent";

interface IProps {
  isAdmin: boolean;
}

const Portfolio = ({ isAdmin }: IProps) => {
  useTitle("Portfolio");
  return (
    <div>
      <div className="m-5 md:m-16">
        <LinkBox text1={"Home"} text2={"Creative portfolio"} />
      </div>

      <div className="m-5 md:m-16">
        <h1 className="text-4xl font-bold text-white">Creative Portfolio</h1>

        <div className={`${isAdmin ? "" : "hidden"} mt-10`}>
          <Link to={`/admin-dashboard/portfolio/add-portfolio`}>
            <PrimaryButton text="Add Portfolio" />
          </Link>
        </div>

        <div className="my-20">
          <PortfolioContent isAdmin={isAdmin} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
