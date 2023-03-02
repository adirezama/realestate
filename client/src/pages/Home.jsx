import Modal from "../components/Modal";
import Email from "../components/modal/Email";
import Password from "../components/modal/Password";
import Profile from "../components/modal/Profile";
import ActionCard from "../components/profile/ActionCard";
import ProfileCard from "../components/profile/ProfileCard";
import styles from "../styles";

export default function Home() {
  return (
    <div className={`${styles.flexCenter} bg-color1`}>
      <div className={`${styles.boxWidth}`}>
        <div className="flex flex-col items-center md:items-start md:flex-row gap-10 m-5">
          <ProfileCard />
          <ActionCard />
        </div>
      </div>
    </div>
  );
}
