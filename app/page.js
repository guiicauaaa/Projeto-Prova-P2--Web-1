import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Bem-vindo ao Catálogo Interativo</h1>
      <p>Navegue pelos nossos produtos.</p>
    </main>
  );
}