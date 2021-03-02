import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

const Countdown = () => {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    resetCountdown,
    startCoutdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.container}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countDownButton}>
          Ciclo Terminado
        </button>
      ) : isActive ? (
        <button
          onClick={resetCountdown}
          className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
        >
          Abandonar Ciclo
        </button>
      ) : (
        <button onClick={startCoutdown} className={styles.countDownButton}>
          Iniciar um ciclo
        </button>
      )}
    </div>
  );
};

export default Countdown;
