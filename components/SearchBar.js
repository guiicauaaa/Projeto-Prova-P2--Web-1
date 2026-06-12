"use client";
import styles from './SearchBar.module.css';

export default function SearchBar({ busca, setBusca }) {
  return (
    <input
      type="text"
      placeholder="Pesquisar produtos..."
      value={busca}
      onChange={(e) => setBusca(e.target.value)}
      className={styles.input}
    />
  );
}