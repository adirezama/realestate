import React, { useState } from "react";
import FormLogin from "./form/FormLogin";

const SignupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Signup Modal</button>
      {isOpen && <FormLogin />}
    </div>
  );
};

export default SignupModal;
