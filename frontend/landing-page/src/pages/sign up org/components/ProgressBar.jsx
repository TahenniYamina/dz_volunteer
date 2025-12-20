import React from 'react';
import styles from './ProgressBar.module.css';

export default function ProgressBar({  percentage, stepTitle }) {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBarWrapper}>
        <div
          className={styles.progressBar}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p className={styles.progressTitle}>{stepTitle}</p>
    </div>
  );
}
