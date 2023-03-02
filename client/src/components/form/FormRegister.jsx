import { useState } from "react";
import axios from "axios";
import { API } from "../../config";

export default function FormRegister({ onFromSwitch, onClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`${API}/pre-register`, { email, password });
    console.log(data);
    console.table({ email, password });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex items-center justify-center max-w-sm w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col shadow-xl gap-y-5 w-full bg-color4 outline outline-1  rounded-xl p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium text-color2">Register</h2>{" "}
        </div>
        {/* Email Input */}
        <label htmlFor="email" className="font-medium">
          Email
        </label>
        <input
          className="outline outline-1 rounded-sm p-2 px-4 w-full placeholder:text-black"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
        />
        {/* Password Input */}
        <label htmlFor="password" className="font-medium">
          Password
        </label>
        <input
          className="outline outline-1 rounded-sm p-2 px-4 w-full placeholder:text-black"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          type="submit"
          className="outline-none text-sm font-semibold shadow-md text-color1 bg-color2 w-20 flex justify-center items-center rounded-sm self-end py-2 mt-10">
          Save
        </button>
        <div className="text-sm">
          <p>
            Have an account?{" "}
            <span>
              <a
                onClick={() => onFromSwitch("Login")}
                className="text-blue-400 cursor-pointer hover:underline">
                Login
              </a>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
