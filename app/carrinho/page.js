import Link from 'next/link';
import styles from './carrinho.module.css';

export const metadata = {
  title: 'Carrinho | Catálogo Interativo',
};

export default function Carrinho() {
  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>Carrinho</h1>
      <div className={styles.vazio}>
        <span className={styles.icone}>🛒</span>
        <p>Seu carrinho está vazio.</p>
        <Link href="/produtos" className={styles.botao}>
          Explorar Produtos
        </Link>
      </div>
    </main>
  );
}
