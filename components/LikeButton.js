"use client";
import { useState } from 'react';
import styles from './LikeButton.module.css';

export default function LikeButton() {
  const [curtido, setCurtido] = useState(false);

  return (
    <button 
      className={`${styles.btn} ${curtido ? styles.curtido : ''}`} 
      onClick={() => setCurtido(!curtido)}
    >
      {curtido ? '❤️ Curtido' : '🤍 Curtir'}
    </button>
  );
}