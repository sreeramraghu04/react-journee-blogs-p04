import { useState } from "react";
/* import PropTypes from "prop-types"; */ import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const AddBlogForm = ({ addBlogs }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [date, setDate] = useState("");

  /* const [date, setDate] = useState(new Date());
  etInterval(() => setDate(new Date()), 1000);
  clearInterval(date); */

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
    <div className="w-screen lg:h-[630px] md:h-[700px] h-[650px] backdrop-blur-lg rounded-md p-4 lg:mt-5 md:mt-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 items-center"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-black p-2 outline-none rounded-md hover:border-3 w-[300px] lg:w-[500px] md:w-[500px] text-black mt-15"
          type="text"
          placeholder="Title :"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 border-black p-2 outline-none rounded-md hover:border-3 w-[300px] lg:w-[500px] md:w-[500px] text-black"
          placeholder="Description :"
        />

        <div className="flex flex-col gap-2">
          <div className="relative">
            <input
              id="date-picker"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border-2 border-black p-2 outline-none rounded-md text-black pl-10 hover:border-3 w-[250px] lg:w-[450px] md:w-[450px]"
              type="date"
              placeholder="Click to select a date"
            />
            <CalendarMonthIcon className="absolute top-1/2 -translate-y-1/2 left-3 text-black"/>
          </div>
        </div>
        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="border-2 border-black p-2 outline-none rounded-md hover:border-3 w-[200px] lg:w-[400px] md:w-[400px] text-black"
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

        <label className="border-2 border-black p-2 outline-none rounded-md cursor-pointer text-center hover:border-3 w-[200px] lg:w-[300px] md:w-[300px] text-black">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          Upload Your Image Here.
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
        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button
          type="submit"
          className="border-2 border-black rounded-md font-semibold bg-black font-mono p-2 hover:border-3 hover:border-white w-[150px] lg:w-[250px] md:w-[250px] text-white"
        >
          Add Your Blog!
        </button>
      </form>
    </div>
  );
};

/* AddBlogForm.propTypes = {
  addBlog: PropTypes.addBlog,
}; */

export default AddBlogForm;
