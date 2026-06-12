import Link from 'next/link';
import LikeButton from './LikeButton';
import styles from './ProductCard.module.css';

export default function ProductCard({ produto, curtido, onToggleFavorito }) {
  return (
    <div className={styles.card}>
      <div className={styles.imagemWrapper}>
        <img
          src={produto.imagem}
          alt={produto.nome}
          className={styles.imagem}
        />
      </div>
      <div className={styles.corpo}>
        <h3 className={styles.title}>{produto.nome}</h3>
        <p className={styles.desc}>{produto.desc}</p>
        <p className={styles.price}>R$ {produto.preco.toFixed(2)}</p>
        <Link href={`/produtos/${produto.id}`} className={styles.button}>
          Ver Detalhes
        </Link>
        <LikeButton curtido={curtido} onToggle={() => onToggleFavorito(produto.id)} />
      </div>
    </div>
  );
}
