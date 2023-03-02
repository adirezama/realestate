import { NavLink } from "react-router-dom";
import styles from "../../styles";
import Modal from "../Modal";

export default function Navbar() {
  return (
    <nav className={`${styles.flexCenter} py-4`}>
      <div
        className={`md:py-4 py-2 px-2 mx-4 ${styles.boxWidth} flex items-center justify-between`}>
        <div>
          <h2 className="text-logo font-medium text-color2">D'Estate</h2>
        </div>
        <div className="flex items-center justify-evenly gap-4 font-medium text-color2 text-lg ">
          <NavLink className={`px-4 py-1 hover:underline`} to="/">
            Home
          </NavLink>
          <NavLink className={`px-4 py-1 hover:underline`} to="/register">
            Rent
          </NavLink>
          <div className={`px-4 py-1 `}>
            <Modal />
          </div>
        </div>
      </div>
    </nav>
  );
}
