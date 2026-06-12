import styles from './sobre.module.css';

export const metadata = {
  title: 'Sobre | Catálogo Interativo',
};

export default function Sobre() {
  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>Sobre o Projeto</h1>

      <section className={styles.secao}>
        <h2>O que é</h2>
        <p>
          O Catálogo Interativo é uma aplicação web desenvolvida como avaliação da disciplina
          de Programação Web I do curso de Engenharia de Software da UNIFAN.
          O objetivo foi aplicar os conceitos de Next.js, React e CSS Modules em um projeto funcional.
        </p>
      </section>

      <section className={styles.secao}>
        <h2>Tecnologias Utilizadas</h2>
        <ul className={styles.lista}>
          <li><strong>Next.js 14</strong> — framework React com App Router e roteamento por arquivos</li>
          <li><strong>React</strong> — componentização e gerenciamento de estado com hooks</li>
          <li><strong>CSS Modules</strong> — estilização com escopo por componente</li>
          <li><strong>Vercel</strong> — deploy contínuo e hospedagem</li>
        </ul>
      </section>

      <section className={styles.secao}>
        <h2>Funcionalidades</h2>
        <ul className={styles.lista}>
          <li>Listagem de produtos com busca em tempo real</li>
          <li>Página de detalhes por produto via rota dinâmica</li>
          <li>Botão de curtir por produto com estado local</li>
          <li>Layout responsivo para mobile e desktop</li>
        </ul>
      </section>
    </main>
  );
}
