import LinkBox from "@/components/LinkBox/LinkBox";
import PrimaryButton from "@/components/PortfolioButton/PrimaryButton";
import { useGetAllBlogsQuery } from "@/redux/features/blog/blogApi";
import { useTitle } from "@/utils/hook/useTitle";
import type { TBlog } from "@/utils/types/globalTypes";
import { Link } from "react-router";
import BlogCard from "./BlogCard/BlogCard";

interface IProps {
  isAdmin: boolean;
}
const Blog = ({ isAdmin }: IProps) => {
  useTitle("Blog");

  const { data, isLoading } = useGetAllBlogsQuery(undefined);
  const blogs = data?.data;
  console.log("blogs: ", blogs);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="m-5 md:m-16">
        <LinkBox text1={"Home"} text2={"Blog"} />
      </div>

      <div className="m-5 md:m-16">
        <h1 className="text-4xl font-bold text-white">Blog</h1>

        <div className={`${isAdmin ? "" : "hidden"} mt-10`}>
          <Link to={`/dashboard/blog/add-blog`}>
            <PrimaryButton text="Add Blog" />
          </Link>
        </div>

        <div className="my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs?.map((blog: TBlog, idx: number) => (
            <BlogCard key={idx} blog={blog} isAdmin={isAdmin} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
