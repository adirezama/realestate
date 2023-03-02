import { useState } from "react";
import Email from "../modal/Email";
import Password from "../modal/Password";

export default function ActionCard() {
  const [emailModal, setEmailModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const emailOpenModal = () => {
    setEmailModal(!emailModal);
  };
  const emailCloseModal = () => {
    setEmailModal(false);
  };
  const passwordOpenModal = () => {
    setPasswordModal(!emailModal);
  };
  const passwordCloseModal = () => {
    setPasswordModal(false);
  };
  return (
    <div className="max-w-md w-full h-fit bg-color4 outline outline-1 outline-color2 rounded-md shadow-xl p-8">
      <div className="text-base font-medium text-blue-700">
        <p className="text-black">Actions</p>
        <p onClick={emailOpenModal} className="cursor-pointer hover:underline">
          &gt; Change email
        </p>
        <p onClick={passwordOpenModal} className="cursor-pointer hover:underline">
          &gt; Change password
        </p>
      </div>
      {emailModal && <Email />}
      {passwordModal && <Password />}
    </div>
  );
}
