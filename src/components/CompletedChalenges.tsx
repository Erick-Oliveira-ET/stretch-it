import styles from "../styles/components/CompletedChalenges.module.css";

import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";

const CompletedChalenges = () => {
  const { challengesCompleted, level } = useContext(ChallengesContext);

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div>
          <img src="icons/level.svg" alt="" />
          <span>Level</span>
        </div>
        <span>{level}</span>
      </div>
      <div className={styles.row}>
        <span>Desafios Completos</span>
        <span>{challengesCompleted}</span>
      </div>
    </div>
  );
};

export default CompletedChalenges;
