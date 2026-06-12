import Link from 'next/link';
import styles from './carrinho.module.css';

export const metadata = {
  title: 'Carrinho | Catalogo Interativo',
};

export default function Carrinho() {
  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>Carrinho</h1>
      <div className={styles.vazio}>
        <p>Seu carrinho esta vazio.</p>
        <Link href="/produtos" className={styles.botao}>
          Explorar Produtos
        </Link>
      </div>
    </main>
  );
}
