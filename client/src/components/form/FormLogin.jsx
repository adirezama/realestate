import { useState } from "react";
import { GrClose } from "react-icons/gr";
export default function FormLogin({ onFromSwitch, onClick }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="flex items-center justify-center max-w-sm w-full">
      <form className="flex flex-col shadow-xl gap-y-5 w-full bg-color4 outline outline-1  rounded-xl p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium text-color2">Login</h2>
        </div>
        {/* Email Input */}
        <label htmlFor="email" className="font-medium">
          Email
        </label>
        <input
          className="outline outline-1 rounded-sm p-2 px-4 w-full placeholder:text-black"
          type="email"
          name="email"
          value={searchTerm}
          onChange={handleChange}
          placeholder="example@email.com"
        />
        {/* Password Input */}
        <label htmlFor="password" className="font-medium">
          Password
        </label>
        <input
          className="outline outline-1 rounded-sm  p-2 px-4 w-full placeholder:text-black"
          type="password"
          name="password"
          value={searchTerm}
          onChange={handleChange}
          placeholder="password"
        />
        <button
          type="submit"
          className="outline-none text-sm font-semibold shadow-md text-color1 bg-color2 w-20 flex justify-center items-center rounded-sm self-end py-2 mt-10">
          Save
        </button>
        <div className="text-sm flex justify-between gap-y-2">
          <p>
            New here?{" "}
            <span>
              <a
                onClick={() => onFromSwitch("Register")}
                className="text-blue-400 cursor-pointer hover:underline">
                Create account!
              </a>
            </span>
          </p>
          <a className="text-blue-400 cursor-pointer hover:underline">Forgot password?</a>
        </div>
      </form>
    </div>
  );
}
