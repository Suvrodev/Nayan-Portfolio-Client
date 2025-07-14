import { useParams } from "react-router";

const PortfolioDetail = () => {
  const { title } = useParams();
  return (
    <div>
      <h1>Title: {title} </h1>
    </div>
  );
};

export default PortfolioDetail;
