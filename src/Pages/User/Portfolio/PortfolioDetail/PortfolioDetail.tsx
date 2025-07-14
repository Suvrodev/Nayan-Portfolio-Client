import SmartImage from "@/components/SmartImage/SmartImage";
import PrimaryButton from "@/components/PortfolioButton/PrimaryButton";
import { useGetSinglePortfolioQuery } from "@/redux/features/portfolio/portfolioApi";
import { useParams } from "react-router";

const PortfolioDetail = () => {
  const { title } = useParams();
  const { data, isLoading } = useGetSinglePortfolioQuery(title);
  const portfolio = data?.data;

  if (isLoading) {
    return <p className="text-center text-white mt-10">Loading...</p>;
  }

  if (!portfolio) {
    return (
      <p className="text-center text-red-500 mt-10">Portfolio not found.</p>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center my-6 px-4">
      <div className="max-w-4xl w-full mx-auto primaryBox p-6 rounded-2xl shadow-xl">
        {/* Image */}
        <SmartImage
          src={portfolio?.image}
          alt={portfolio?.title}
          className="w-full h-72 md:h-96 object-cover rounded-lg mb-6 border border-gray-700"
        />

        {/* Title and Category */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
          <h1 className="text-3xl font-bold text-white">{portfolio.title}</h1>
          <span className="text-sm primaryBox px-4 py-1 rounded-full text-white">
            {portfolio.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
          {portfolio.description}
        </p>

        {/* Price and Link */}
        <div className="mt-8 flex flex-wrap justify-between items-center gap-4">
          <p className="text-lg font-semibold text-green-400">
            Price: ${portfolio.price}
          </p>
          <a href={portfolio.link} target="_blank" rel="noopener noreferrer">
            <PrimaryButton text="View Live Project" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
