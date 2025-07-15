import { useAppSelector } from "@/redux/hooks";
import { useGetAllPortfolioQuery } from "@/redux/features/portfolio/portfolioApi";
import PortfolioBox from "./PortfolioBox/PortfolioBox";
import type { TPortfolio } from "@/utils/types/globalTypes";
import PortfolioTabEZ from "./PortfolioTab/PortfolioTabEZ";

interface IProps {
  isAdmin: boolean;
}

const PortfolioContent = ({ isAdmin }: IProps) => {
  const { portfolioCategory } = useAppSelector(
    (state) => state?.portfolioCategories
  );

  const { data, isLoading } = useGetAllPortfolioQuery(undefined);
  const portfolios = data?.data;

  const filteredPortfolios =
    portfolioCategory === "All"
      ? portfolios
      : portfolios?.filter(
          (item: TPortfolio) => item.category === portfolioCategory
        );

  if (isLoading) {
    return <p className="text-center py-8">Loading...</p>;
  }
  return (
    <div className="space-y-6">
      {/* <PortfolioTab /> */}
      <PortfolioTabEZ />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPortfolios?.map((item: TPortfolio, idx: number) => (
          <PortfolioBox key={idx} portfolio={item} isAdmin={isAdmin} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioContent;
