import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import type { TTestimonial } from "@/utils/types/globalTypes";

interface IProps {
  testimonial: TTestimonial;
}

const TestimonialBox = ({ testimonial }: IProps) => {
  const { image, desc, rating, name, position } = testimonial;

  return (
    <div className="shadow-md  shadow-blue-500/50 relative">
      <div className="text-center text-white px-10 py-28">
        <h1>{desc}</h1>
        <h1 className=" font-bold text-2xl text-white mt-10">{name}</h1>
        <h1 className="text-[#cccccc]">{position}</h1>
        <Rating
          style={{ maxWidth: 100 }}
          value={rating}
          className="mx-auto mt-5"
        />
      </div>

      <img
        src={image}
        alt=""
        className="w-[110px] h-[110px] rounded-full absolute -top-[50px]  left-1/2 transform -translate-x-1/2"
      />
    </div>
  );
};

export default TestimonialBox;
