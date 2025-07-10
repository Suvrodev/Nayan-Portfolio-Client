import { useGetAllServiceQuery } from "@/redux/features/service/serviceApi";
import { setService } from "@/redux/features/service/serviceSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const StoreService = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetAllServiceQuery(undefined);
  const services = data?.data;

  useEffect(() => {
    if (services?.length) {
      dispatch(setService(services));
    }
  }, [dispatch, services]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return <div></div>;
};

export default StoreService;
