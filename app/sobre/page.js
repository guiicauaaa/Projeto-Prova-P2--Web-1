import styles from './sobre.module.css';

export const metadata = {
  title: 'Sobre | Catálogo Interativo',
};

export default function Sobre() {
  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>Sobre o Projeto</h1>
      <p>
        Aplicação web desenvolvida como avaliação da disciplina de Programação Web I,
        curso de Engenharia de Software da UNIFAN — 4º período, 2026.
      </p>
      <p>
        O projeto utiliza Next.js com App Router, React com hooks para gerenciamento de estado,
        CSS Modules para estilização por componente e dados mockados para simular um catálogo de produtos.
      </p>
      <p>
        Funcionalidades implementadas: listagem de produtos, busca em tempo real, página de detalhes
        por rota dinâmica, botão de curtir com estado local e layout responsivo.
      </p>
    </main>
  );
}
