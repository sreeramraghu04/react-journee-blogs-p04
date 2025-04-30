const Navbar = () => {
  return (
    <nav className="bg-gray-200 h-20 px-10 flex justify-center items-center fixed top-0 w-full z-50 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold font-mono bg-clip-text text-purple-500">
          <h1>Public Blog</h1>{" "}
        </div>
        <ul className="flex items-center space-x-4 md:flex font-mono">
          <li className="text-gray-500 hover:text-black transition duration-100 hover:cursor-pointer">
            Home
          </li>
          <li className="text-purple-500  hover:text-red-500 underline underline-offset-2 font-bold transition duration-100 hover:cursor-pointer">
            Blog
          </li>
          <li className="text-gray-500 hover:text-black transition duration-100 hover:cursor-pointer lg:flex md:flex hidden">
            Destinations
          </li>
          <li className="text-gray-500 hover:text-black transition duration-100 hover:cursor-pointer lg:flex md:flex hidden">
            About
          </li>
          <li className="text-gray-500 hover:text-black transition duration-100 hover:cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
