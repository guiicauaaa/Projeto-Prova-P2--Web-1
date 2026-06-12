import Link from 'next/link';
import LikeButton from './LikeButton';
import styles from './ProductCard.module.css';

export default function ProductCard({ produto }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{produto.nome}</h3>
      <p className={styles.price}>R$ {produto.preco.toFixed(2)}</p>
      
      <Link href={`/produtos/${produto.id}`} className={styles.button}>
        Ver Detalhes
      </Link>
      <LikeButton />
    </div>
  );
}