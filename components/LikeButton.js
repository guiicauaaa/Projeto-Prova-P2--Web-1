"use client";
import styles from './LikeButton.module.css';

export default function LikeButton({ curtido, onToggle }) {
  return (
    <button
      className={`${styles.btn} ${curtido ? styles.curtido : ''}`}
      onClick={onToggle}
    >
      {curtido ? '❤️ Curtido' : '🤍 Curtir'}
    </button>
  );
}
