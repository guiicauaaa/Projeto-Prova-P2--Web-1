"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Catalogo</Link>
      </div>

      <button
        className={styles.hamburguer}
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Abrir menu"
      >
        <span className={menuAberto ? styles.barraAtiva1 : styles.barra}></span>
        <span className={menuAberto ? styles.barraAtiva2 : styles.barra}></span>
        <span className={menuAberto ? styles.barraAtiva3 : styles.barra}></span>
      </button>

      <nav className={`${styles.nav} ${menuAberto ? styles.navAberto : ''}`}>
        <Link href="/" onClick={() => setMenuAberto(false)}>Home</Link>
        <Link href="/sobre" onClick={() => setMenuAberto(false)}>Sobre</Link>
        <Link href="/produtos" onClick={() => setMenuAberto(false)}>Produtos</Link>
        <Link href="/favoritos" onClick={() => setMenuAberto(false)}>Favoritos</Link>
        <Link href="/carrinho" onClick={() => setMenuAberto(false)}>Carrinho</Link>
      </nav>
    </header>
  );
}
