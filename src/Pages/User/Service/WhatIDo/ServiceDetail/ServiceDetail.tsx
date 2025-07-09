import { useParams } from "react-router";

const ServiceDetail = () => {
  const { _id } = useParams();
  return (
    <div>
      <h1>Service Detail: {_id} </h1>
    </div>
  );
};

export default ServiceDetail;
