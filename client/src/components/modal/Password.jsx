export default function Password() {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center h-full w-full bg-green-200 bg-opacity-20 z-50 overflow-auto">
      <div className="m-5 max-w-xl w-full h-fit bg-color4 outline outline-1 outline-color2 rounded-md shadow-xl p-8">
        <div className="font-medium">
          <h2 className="text-xl">Change Password</h2>
          <div className="my-5 flex flex-col gap-2">
            {/* Password Input */}
            <label htmlFor="password" className="font-medium">
              Your password
            </label>
            <input
              className="outline outline-1 rounded-sm  p-2 px-4 w-full placeholder:text-black"
              type="password"
              name="password"
            />
            {/* Email Input */}
            <label htmlFor="email" className="text-base font-medium">
              New email
            </label>
            <input
              className="outline outline-1 rounded-sm p-2 px-4 w-full placeholder:text-black"
              type="email"
              name="email"
              placeholder=""
            />
          </div>
          <div className="flex flex-col">
            <button className="py-2 px-3 rounded-md self-end text-white bg-color2 hover:scale-95">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
