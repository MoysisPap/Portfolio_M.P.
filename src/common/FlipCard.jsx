import React from 'react';
import styles from './FlipCardStyles.module.css';

function FlipCard({ src, link, h3, p, theme }) {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner} data-theme={theme}>
        <div className={styles.flipCardFront}>
          <img className={styles.flipCardImage} src={src} alt={`${h3} logo`} />
        </div>
        <div className={styles.flipCardBack}>
          <h3>{h3}</h3>
          <p>{p}</p>
          <div className={styles.flipCardButtons}>
            <a href={link} className={styles.flipCardButton} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={link} className={styles.flipCardButton} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
