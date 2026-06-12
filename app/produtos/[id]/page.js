import Link from 'next/link';

// Usamos os mesmos dados aqui para a página de detalhes poder encontrar o produto
const dadosMockados = [
  { id: 1, nome: 'Teclado Mecânico RGB', preco: 350.00, desc: 'Teclado mecânico de alta precisão com switches azuis e iluminação RGB customizável.' },
  { id: 2, nome: 'Mouse Gamer Sem Fio', preco: 220.00, desc: 'Mouse ergonômico com 10.000 DPI, botões macro e bateria de longa duração.' },
  { id: 3, nome: 'Monitor Ultrawide 29"', preco: 1200.00, desc: 'Monitor IPS 75Hz, proporção 21:9, ideal para produtividade e imersão em jogos.' },
  { id: 4, nome: 'Headset com Microfone', preco: 180.00, desc: 'Som surround 7.1 virtual, almofadas confortáveis e microfone com cancelamento de ruído.' },
  { id: 5, nome: 'Cadeira Ergonômica', preco: 850.00, desc: 'Cadeira confortável com ajuste de lombar, inclinação de 150 graus e braços 3D.' },
  { id: 6, nome: 'Webcam Full HD', preco: 299.00, desc: 'Webcam 1080p a 60fps com foco automático e anel de luz integrado para streaming.' },
];

export default function DetalhesProduto({ params }) {
  // O Next.js pega o ID da URL e coloca no params.id
  const produtoId = Number(params.id);
  const produto = dadosMockados.find(p => p.id === produtoId);

  // Se o usuário digitar um ID que não existe na URL
  if (!produto) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        <h2>Produto não encontrado!</h2>
        <Link href="/produtos" style={{ color: '#0070f3' }}>Voltar para o catálogo</Link>
      </div>
    );
  }

  // Se o produto existir, renderiza a tela dele
  return (
    <div style={{ padding: '4rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1>{produto.nome}</h1>
      <p style={{ margin: '2rem 0', fontSize: '1.2rem', color: '#666' }}>{produto.desc}</p>
      <h2 style={{ color: '#0070f3', fontSize: '2rem', marginBottom: '3rem' }}>R$ {produto.preco.toFixed(2)}</h2>
      
      <Link href="/produtos" style={{ background: '#282c34', color: 'white', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 'bold' }}>
        Voltar para a Loja
      </Link>
    </div>
  );
}