import { useState } from "react";
import FormRegister from "../components/form/FormRegister";
import styles from "../styles";
import FormLogin from "../components/form/FormLogin";

export default function Register() {
  const [currentForm, setCurrentForm] = useState("Login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} `}>
        <div className={`${styles.flexCenter}`}>
          {currentForm === "Login" ? (
            <FormLogin onFromSwitch={toggleForm} />
          ) : (
            <FormRegister onFromSwitch={toggleForm} />
          )}
        </div>
      </div>
    </div>
  );
}
