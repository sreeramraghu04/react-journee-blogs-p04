import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const AddBlogForm = ({ addBlogs }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !date || !day || !image) {
      setError("All fields must be required!");
      return;
    }

    const newBlog = {
      id: Date.now(),
      title,
      description,
      date: formatDate(date),
      day,
      image,
    };

    addBlogs(newBlog);
    setTitle("");
    setDescription("");
    setDate("");
    setDay("");
    setImage(null);
    setError("");
  };

  const formatDate = (date) => {
    const setDate = new Date(date);
    const day = String(setDate.getDate()).padStart(2, "0");
    const month = String(setDate.getMonth() + 1).padStart(2, "0");
    const year = setDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="w-full max-w-md backdrop-blur-lg bg-gray-200 rounded-xl shadow-md p-4 flex flex-col justify-center items-center mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 items-center w-full"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-black p-2 outline-none rounded-md w-full text-black"
          type="text"
          placeholder="Title:"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 border-black p-2 outline-none rounded-md w-full text-black"
          placeholder="Description:"
          rows={4}
        />

        {/* Date Picker */}
        <div className="relative w-full">
          <input
            id="date-picker"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border-2 border-black p-2 outline-none rounded-md text-black pl-10 w-full"
            type="date"
          />
          <CalendarMonthIcon className="absolute top-1/2 -translate-y-1/2 left-3 text-black" />
        </div>

        {/* Day Select */}
        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="border-2 border-black p-2 outline-none rounded-md w-full text-black"
        >
          <option value="">Select Day</option>
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

        {/* Image Upload */}
        <label className="border-2 border-black p-2 outline-none rounded-md cursor-pointer text-center w-full text-black">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          Upload Your Image Here.
        </label>

        {image && (
          <div className="mt-4 w-full flex justify-center">
            <img
              src={image}
              alt="Blog preview"
              className="max-h-64 rounded-md object-contain"
            />
          </div>
        )}

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button
          type="submit"
          className="border-2 border-black rounded-md font-semibold bg-black font-mono p-2 w-full text-purple-500 hover:border-white"
        >
          Add Your Blog!
        </button>
      </form>
    </div>
  );
};

export default AddBlogForm;
