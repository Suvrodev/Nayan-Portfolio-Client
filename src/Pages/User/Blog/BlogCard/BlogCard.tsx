import DeleteButton from "@/components/AdminActionButtons/DeleteButton/DeleteButton";
import UpdateButton from "@/components/AdminActionButtons/UpdateButton/UpdateButton";
import SmartImage from "@/components/SmartImage/SmartImage";
import { formatDate } from "@/utils/Function/formatDate";
import type { TBlog } from "@/utils/types/globalTypes";
import { Link } from "react-router";

interface IBlogCardProps {
  blog: TBlog;
  isAdmin: boolean;
}
const BlogCard = ({ blog, isAdmin }: IBlogCardProps) => {
  isAdmin = false;
  const { image, title, date, category } = blog;
  return (
    <Link to={`/blog-detail/${blog.title}`}>
      <div className="relative primaryBox rounded-[12px] overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-[370px] md:h-[370px] lg:h-[380px]">
        {/* Admin Buttons */}
        {isAdmin && (
          <div className="absolute top-2 right-2 z-10 flex gap-2">
            <UpdateButton />
            <DeleteButton />
          </div>
        )}

        {/* Image on top */}
        <div className="relative h-60 overflow-hidden">
          <SmartImage
            src={image}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text below */}
        {/* <div className="p-4 flex flex-col justify-between flex-grow space-y-2"> */}
        <div className="p-4 flex flex-col justify-betweenspace-y-2">
          <p className="text-sm">
            {formatDate(date)} /{" "}
            <span className="text-teal-400">{category}</span>
          </p>
          <h3 className="text-xl font-bold line-clamp-2 mt-6">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
