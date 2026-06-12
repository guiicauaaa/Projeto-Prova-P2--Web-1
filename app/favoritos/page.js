"use client";
import Link from 'next/link';
import { useFavoritos } from '../../components/useFavoritos';
import styles from './favoritos.module.css';

const produtos = [
  { id: 1, nome: 'Teclado Mecânico RGB', preco: 350.00, desc: 'Switches azuis e iluminação RGB customizável.', imagem: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/k/7/k715b-pt8.jpg' },
  { id: 2, nome: 'Mouse Gamer Sem Fio', preco: 220.00, desc: 'Sensor de 10.000 DPI, botões macro e bateria de longa duração.', imagem: 'https://images9.kabum.com.br/produtos/fotos/sync_mirakl/693449/xlarge/Mouse-Gamer-Sem-Fio-Recarreg-vel-3200-Dpi_1771344820.png' },
  { id: 3, nome: 'Monitor Ultrawide 29"', preco: 1200.00, desc: 'Painel IPS 75Hz com proporção 21:9.', imagem: 'http://lg.com/content/dam/channel/wcms/br/images/produtos/it/29wk600-w/1-1600-29wk600-w.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800' },
  { id: 4, nome: 'Headset com Microfone', preco: 180.00, desc: 'Som surround 7.1 virtual e cancelamento de ruído.', imagem: 'https://i.zst.com.br/thumbs/12/1e/15/1297885181.jpg' },
  { id: 5, nome: 'Cadeira Ergonômica', preco: 850.00, desc: 'Ajuste de lombar, inclinação de 150° e braços 3D.', imagem: 'https://www.cadeirasparaescritorio.ind.br/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/2/_/2_1_4.webp' },
  { id: 6, nome: 'Webcam Full HD', preco: 299.00, desc: '1080p a 60fps com foco automático e anel de luz integrado.', imagem: 'https://images.tcdn.com.br/img/img_prod/1395207/webcam_full_hd_1080p_com_microfone_home_office_videoconferencias_cor_preto_premium_61_1_6375d2da62c1d0bcb19f9ab44bcaf2d3.jpg' },
];

export default function Favoritos() {
  const { favoritos, toggleFavorito } = useFavoritos();

  const produtosFavoritos = produtos.filter((p) => favoritos.includes(p.id));

  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>Favoritos</h1>

      {produtosFavoritos.length === 0 ? (
        <div className={styles.vazio}>
          <p>Nenhum produto favoritado ainda.</p>
          <Link href="/produtos" className={styles.botao}>
            Ver Produtos
          </Link>
        </div>
      ) : (
        <div className={styles.lista}>
          {produtosFavoritos.map((produto) => (
            <div key={produto.id} className={styles.item}>
              <img
                src={produto.imagem}
                alt={produto.nome}
                className={styles.imagem}
              />
              <div className={styles.info}>
                <span className={styles.nome}>{produto.nome}</span>
                <span className={styles.desc}>{produto.desc}</span>
                <span className={styles.preco}>R$ {produto.preco.toFixed(2)}</span>
              </div>
              <div className={styles.acoes}>
                <Link href={`/produtos/${produto.id}`} className={styles.botaoDetalhes}>
                  Ver Detalhes
                </Link>
                <button
                  className={styles.botaoRemover}
                  onClick={() => toggleFavorito(produto.id)}
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
