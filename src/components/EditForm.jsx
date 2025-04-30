import { useState } from "react";
/* import PropTypes from "prop-types"; */
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const EditForm = ({ blog, updateBlog }) => {
  const [title, setTitle] = useState(blog.title);
  const [description, setDescription] = useState(blog.description);
  const [date, setDate] = useState(blog.date);
  const [day, setDay] = useState(blog.day);
  const [image, setImage] = useState(blog.image);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlog({ title, description, date, day, image }, blog.id);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="bg-black text-white rounded-md p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-white p-2 outline-none rounded-md"
          type="text"
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 border-white p-2 outline-none rounded-md"
          placeholder="Description"
        />
        <div className="flex flex-col gap-2">
          <div className="relative">
            <input
              id="date-picker"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border-2 border-white p-2 outline-none rounded-md bg-transparent text-white w-full pl-10"
              type="date"
              title="Click to select a date"
            />
            <CalendarMonthIcon className="absolute top-1/2 -translate-y-1/2 left-2 text-white" />
          </div>
        </div>
        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="border-2 border-white p-2 outline-none rounded-md"
        >
          <option className="text-black" value="">
            Select Day
          </option>
          <option className="text-black" value="Monday">
            Monday
          </option>
          <option className="text-black" value="Tuesday">
            Tuesday
          </option>
          <option className="text-black" value="Wednesday">
            Wednesday
          </option>
          <option className="text-black" value="Thursday">
            Thursday
          </option>
          <option className="text-black" value="Friday">
            Friday
          </option>
          <option className="text-black" value="Saturday">
            Saturday
          </option>
          <option className="text-black" value="Sunday">
            Sunday
          </option>
        </select>

        <label className="border-2 border-white p-2 outline-none rounded-md cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          Update Image <AddAPhotoIcon />
        </label>

        {image && (
          <div className="mt-4">
            <img
              src={image}
              alt="Blog preview"
              className="max-w-full h-auto rounded-md"
            />
          </div>
        )}

        <button
          type="submit"
          className="border-2 border-white rounded-md font-semibold bg-white text-sm p-2 text-black"
        >
          Update
        </button>
      </form>
    </div>
  );
};

/* EditForm.propTypes = {
  blog: PropTypes.blog,
  updateBlog: PropTypes.updateBlog,
}; */

export default EditForm;
