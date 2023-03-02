import { useState } from "react";
import Profile from "../modal/Profile";

export default function ProfileCard() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(!showModal);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="max-w-md w-full bg-color4 outline outline-1 outline-color2 rounded-md shadow-xl p-8">
      <div className="flex gap-4">
        <img className=" rounded-full h-28" src="/user.png" alt="" />
        <h2 className="text-lg">Username</h2>
      </div>
      <div className="flex flex-col gap-3 mt-2">
        <div className="">
          <p className="font-normal">bio</p>
          <p className="text-lg">Description</p>
        </div>
        <div className="">
          <p>location</p>
          <p className="text-lg">Description</p>
        </div>
        <div className="">
          <p>e-mail</p>
          <p className="text-lg">Description</p>
        </div>
        <button
          onClick={openModal}
          className="py-2 px-3 rounded-md text-white bg-color2 self-end hover:scale-95">
          Edit Profile
        </button>
      </div>
      {showModal && <Profile />}
    </div>
  );
}
