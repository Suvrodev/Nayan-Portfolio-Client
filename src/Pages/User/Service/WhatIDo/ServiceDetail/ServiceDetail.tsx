import SmartImage from "@/components/SmartImage/SmartImage";
import { useGetSingleServiceQuery } from "@/redux/features/service/serviceApi";
import { useParams } from "react-router";

const ServiceDetail = () => {
  const { _id } = useParams();

  const { data, isLoading } = useGetSingleServiceQuery(_id);
  const service = data?.data;
  console.log("Servcice: ", service);
  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-4xl mx-auto primaryBox p-6 rounded-2xl shadow-xl">
        <SmartImage
          src={service?.image}
          alt={service?.title}
          className="w-full  object-cover rounded-lg mb-6 border border-gray-700"
        />
        <h1 className="text-3xl font-bold text-white mb-4">{service?.title}</h1>
        <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
          {service?.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceDetail;
