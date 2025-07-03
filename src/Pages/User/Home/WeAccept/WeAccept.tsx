// import payoneer from "../../../../assets/Accepted/payoneer.webp";
import paypal from "../../../../assets/Accepted/paypal.webp";
import strip from "../../../../assets/Accepted/stripe.webp";
import wise from "../../../../assets/Accepted/wise1.webp";

const WeAccept = () => {
  const paynr = "https://i.ibb.co/qRhpv9K/payoneer-copy.webp";

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-10">We Accept</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 ">
        <img src={paynr} alt="" className="w-full md:w-auto" />
        <img src={paypal} alt="" className="w-full md:w-auto" />
        <img src={strip} alt="" className="w-full md:w-auto" />
        <img src={wise} alt="" className="w-full md:w-auto" />
      </div>
    </div>
  );
};

export default WeAccept;
