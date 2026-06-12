import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.titulo}>Catalogo Interativo</h1>
        <p className={styles.subtitulo}>
          Perifericos e acessorios para o seu setup.
        </p>
        <Link href="/produtos" className={styles.botao}>
          Ver Produtos
        </Link>
      </div>

      <section className={styles.destaques}>
        <div className={styles.destaque}>
          <h3>Busca em Tempo Real</h3>
          <p>Filtre os produtos enquanto digita.</p>
        </div>
        <div className={styles.destaque}>
          <h3>Pagina de Detalhes</h3>
          <p>Cada produto tem sua propria rota dinamica.</p>
        </div>
        <div className={styles.destaque}>
          <h3>Curtir Produtos</h3>
          <p>Marque os produtos de interesse com um clique.</p>
        </div>
      </section>
    </main>
  );
}
