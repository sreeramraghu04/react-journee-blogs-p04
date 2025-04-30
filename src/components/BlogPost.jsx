/* import PropTypes from "prop-types"; */
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditDocumentIcon from "@mui/icons-material/EditDocument";

const BlogPost = ({ blog, deleteBlog, editBlog }) => {
  return (
    <div className="max-w-md bg-gray-200 rounded-xl shadow-md p-4 flex flex-col justify-center items-end mt-10">
      <img
        src={blog.image}
        alt={`Image for ${blog.title}`}
        className="w-full h-64 object-cover rounded-xl"
      />
      <div>
        <div className="p-2">
          <h2 className="text-2xl underline font-bold mb-2">{blog.title}</h2>
          <p className="text-gray-700">{blog.description}</p>
          <div className="flex flex-row gap-5">
            <p className="text-sm text-gray-500 mt-8 w-[300px]">
              {blog.date} | {blog.day}
            </p>
            <DeleteForeverIcon
              className="text-red-600 cursor-pointer mt-8 opacity-75 hover:opacity-100"
              onClick={() => deleteBlog(blog.id)}
            />
            <EditDocumentIcon
              className="text-black cursor-pointer mt-8 opacity-75 hover:opacity-100"
              onClick={() => editBlog(blog.id)}
            />
          </div>
          <div className="space-x-2">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
