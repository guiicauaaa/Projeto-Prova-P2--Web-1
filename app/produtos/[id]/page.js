import Link from 'next/link';
import Image from 'next/image';
import styles from './detalhe.module.css';

const produtos = [
  { id: 1, nome: 'Teclado Mecânico RGB', preco: 350.00, desc: 'Teclado mecânico de alta precisão com switches azuis e iluminação RGB customizável. Ideal para quem digita muito ou joga, com resposta tátil precisa em cada tecla.', imagem: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/k/7/k715b-pt8.jpg' },
  { id: 2, nome: 'Mouse Gamer Sem Fio', preco: 220.00, desc: 'Mouse ergonômico com sensor de 10.000 DPI, botões macro programáveis e bateria recarregável de longa duração. Sem fio, sem atrasos.', imagem: 'https://images9.kabum.com.br/produtos/fotos/sync_mirakl/693449/xlarge/Mouse-Gamer-Sem-Fio-Recarreg-vel-3200-Dpi_1771344820.png' },
  { id: 3, nome: 'Monitor Ultrawide 29"', preco: 1200.00, desc: 'Monitor IPS com taxa de atualização de 75Hz e proporção 21:9. Perfeito para produtividade multitarefa e imersão em jogos.', imagem: 'http://lg.com/content/dam/channel/wcms/br/images/produtos/it/29wk600-w/1-1600-29wk600-w.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800' },
  { id: 4, nome: 'Headset com Microfone', preco: 180.00, desc: 'Som surround 7.1 virtual com almofadas confortáveis e microfone retrátil com cancelamento de ruído. Para reuniões, games e música.', imagem: 'https://i.zst.com.br/thumbs/12/1e/15/1297885181.jpg' },
  { id: 5, nome: 'Cadeira Ergonômica', preco: 850.00, desc: 'Cadeira com ajuste de altura lombar, inclinação de até 150 graus e apoios de braço 3D. Suporte para longas horas de trabalho.', imagem: 'https://www.cadeirasparaescritorio.ind.br/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/2/_/2_1_4.webp' },
  { id: 6, nome: 'Webcam Full HD', preco: 299.00, desc: 'Webcam que grava em 1080p a 60fps com foco automático e anel de luz LED integrado. Plug-and-play, compatível com qualquer sistema.', imagem: 'https://images.tcdn.com.br/img/img_prod/1395207/webcam_full_hd_1080p_com_microfone_home_office_videoconferencias_cor_preto_premium_61_1_6375d2da62c1d0bcb19f9ab44bcaf2d3.jpg' },
];

export default async function DetalhesProduto({ params }) {
  const { id } = await params;
  const produto = produtos.find((p) => p.id === Number(id));

  if (!produto) {
    return (
      <main className={styles.container}>
        <h2 className={styles.erro}>Produto não encontrado.</h2>
        <Link href="/produtos" className={styles.voltar}>Voltar ao catálogo</Link>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <Link href="/produtos" className={styles.voltar}>← Voltar ao catálogo</Link>
      <div className={styles.card}>
        <div className={styles.imagemWrapper}>
          <img
            src={produto.imagem}
            alt={produto.nome}
            className={styles.imagem}
          />
        </div>
        <div className={styles.info}>
          <h1 className={styles.nome}>{produto.nome}</h1>
          <p className={styles.desc}>{produto.desc}</p>
          <p className={styles.preco}>R$ {produto.preco.toFixed(2)}</p>
        </div>
      </div>
    </main>
  );
}
