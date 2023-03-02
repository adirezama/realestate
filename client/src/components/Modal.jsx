import React, { useState } from "react";
import FormLogin from "./form/FormLogin";
import FormRegister from "./form/FormRegister";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const [currentForm, setCurrentForm] = useState("Login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <>
      <button className="hover:underline" onClick={handleOpenModal}>
        Login
      </button>

      {showModal && (
        <div className="fixed top-0 left-0 flex items-center justify-center h-full w-full bg-green-200 bg-opacity-20 z-50 overflow-auto">
          <div onClick={handleCloseModal}>close</div>
          {currentForm === "Login" ? (
            <FormLogin onFromSwitch={toggleForm} />
          ) : (
            <FormRegister onFromSwitch={toggleForm} />
          )}
        </div>
      )}
    </>
  );
};

export default Modal;
