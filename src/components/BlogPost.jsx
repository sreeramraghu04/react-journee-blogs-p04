import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditDocumentIcon from "@mui/icons-material/EditDocument";

const BlogPost = ({ blog, deleteBlog, editBlog }) => {
  return (
    <div className="w-full max-w-md bg-gray-200 rounded-xl shadow-md p-4 flex flex-col justify-center items-end mt-10 mx-auto">
      <img
        src={blog.image}
        alt={`Image for ${blog.title}`}
        className="w-full h-64 object-cover rounded-xl"
      />
      <div className="p-2 w-full">
        <h2 className="text-2xl underline font-bold mb-2">{blog.title}</h2>
        <p className="text-gray-700">{blog.description}</p>
        <div className="flex flex-row sm:items-center gap-3 sm:gap-5 mt-6">
          <p className="text-sm text-gray-500 w-full sm:w-[300px]">
            {blog.date} | {blog.day}
          </p>
          <div className="flex gap-3">
            <DeleteForeverIcon
              className="text-red-600 cursor-pointer opacity-75 hover:opacity-100"
              onClick={() => deleteBlog(blog.id)}
            />
            <EditDocumentIcon
              className="text-black cursor-pointer opacity-75 hover:opacity-100"
              onClick={() => editBlog(blog.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;


