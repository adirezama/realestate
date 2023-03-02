import { useState } from "react";
import { FaSearch } from "react-icons/fa";
export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="flex items-center justify-between bg-gray-200 rounded-lg max-w-sm w-full ">
      <input
        className="bg-transparent outline-none p-2 px-4 w-full"
        type="text"
        placeholder="Search here"
        value={searchTerm}
        onChange={handleChange}
      />
      {/* <span className="absolute top-0 right-0 mt-3 mr-3"> */}
      {/* <span className="flex items-center mx-3 "> */}
      <FaSearch className="fill-color3  hover:fill-black mr-4 cursor-pointer" size={25} />
      {/* </span> */}
    </div>
  );
}
