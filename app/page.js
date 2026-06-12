import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.titulo}>Catálogo Interativo</h1>
        <p className={styles.subtitulo}>
          Encontre periféricos e acessórios para montar seu setup.
        </p>
        <Link href="/produtos" className={styles.botao}>
          Ver Produtos
        </Link>
      </div>

      <section className={styles.destaques}>
        <div className={styles.destaque}>
          <span className={styles.icone}>🖥️</span>
          <h3>Alta Performance</h3>
          <p>Equipamentos selecionados para quem leva produtividade a sério.</p>
        </div>
        <div className={styles.destaque}>
          <span className={styles.icone}>🔍</span>
          <h3>Busca em Tempo Real</h3>
          <p>Filtre os produtos enquanto digita e encontre o que precisa na hora.</p>
        </div>
        <div className={styles.destaque}>
          <span className={styles.icone}>❤️</span>
          <h3>Salve Favoritos</h3>
          <p>Curta os produtos que mais chamaram sua atenção.</p>
        </div>
      </section>
    </main>
  );
}
