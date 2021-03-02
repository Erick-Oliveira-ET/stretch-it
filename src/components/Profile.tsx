import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/Profile.module.css";

const Profile = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.container}>
      <a href="https://github.com/Erick-Oliveira-ET" target="blanck">
        <img
          src="https://avatars.githubusercontent.com/u/53864964?s=60&v=4"
          alt="Erick Tomaz"
        />
        <div>
          <p>Developed by: </p>
          <strong>Erick Tomaz Oliveira</strong>
        </div>
      </a>
    </div>
  );
};

export default Profile;
