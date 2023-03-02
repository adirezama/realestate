export default function Profile() {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center h-full w-full bg-green-200 bg-opacity-20 z-50 overflow-auto">
      <div className="m-5 max-w-xl w-full h-fit bg-color4 outline outline-1 outline-color2 rounded-md shadow-xl p-8">
        <div className="font-medium">
          <h2 className="text-xl">Edit profile</h2>
          <div className="my-5 flex flex-col gap-2">
            {/* Input */}
            <label htmlFor="email" className="text-base font-medium">
              name
            </label>
            <input
              className="outline outline-1 rounded-sm p-2 px-4 w-full placeholder:text-black"
              type="text"
              name="name"
              placeholder=""
            />
            {/* Input */}
            <label htmlFor="email" className="text-base font-medium">
              location
            </label>
            <input
              className="outline outline-1 rounded-sm p-2 px-4 w-full placeholder:text-black"
              type="text"
              name="location"
              placeholder=""
            />
            {/* Input */}
            <label htmlFor="email" className="text-base font-medium">
              bio
            </label>
            <input
              className="outline outline-1 rounded-sm p-2 px-4 w-full placeholder:text-black"
              type="text"
              name="bio"
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
