import GlitchText from "@/components/NotFound/NotFound";
import SmartImage from "@/components/SmartImage/SmartImage";
import { useGetSingleBlogQuery } from "@/redux/features/blog/blogApi";
import { formatDate } from "@/utils/Function/formatDate";
import type { TBlog } from "@/utils/types/globalTypes";
import { useParams } from "react-router";

const BlogDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBlogQuery(id);
  const blog: TBlog = data?.data;
  console.log("Blog: ", blog);

  if (isLoading) {
    return <p className="text-center text-white py-10">Loading...</p>;
  }

  if (!blog) {
    return (
      <GlitchText speed={1} className="custom-class">
        Blog Not Found
      </GlitchText>
    );
  }
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-white">
      {/* Blog Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>

      {/* Meta Info */}
      <div className="text-sm text-gray-400 mb-6 flex flex-col md:flex-row gap-2 md:gap-6">
        <p>✍️ Author: {blog.author}</p>
        <p>📅 Date: {formatDate(blog.date)}</p>
        <p>
          🏷️ Category: <span className="text-teal-400">{blog.category}</span>
        </p>
      </div>

      {/* Blog Image */}
      <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg mb-8">
        <SmartImage
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Description */}
      {/* <div className="prose prose-invert max-w-none text-lg leading-relaxed text-gray-300">
        {blog.description}
      </div> */}

      <div
        className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      ></div>
    </div>
  );
};

export default BlogDetail;
