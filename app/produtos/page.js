"use client";
import { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import SearchBar from '../../components/SearchBar';
import styles from './Produtos.module.css';

// Simulando um banco de dados
const dadosMockados = [
  { id: 1, nome: 'Teclado Mecânico RGB', preco: 350.00 },
  { id: 2, nome: 'Mouse Gamer Sem Fio', preco: 220.00 },
  { id: 3, nome: 'Monitor Ultrawide 29"', preco: 1200.00 },
  { id: 4, nome: 'Headset com Microfone', preco: 180.00 },
  { id: 5, nome: 'Cadeira Ergonômica', preco: 850.00 },
  { id: 6, nome: 'Webcam Full HD', preco: 299.00 },
];

export default function Produtos() {
  // Estado que armazena o texto digitado pelo usuário
  const [busca, setBusca] = useState('');

  // Lógica de filtro em tempo real
  const produtosFiltrados = dadosMockados.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Nosso Catálogo</h2>
      
      {/* Passando o estado como prop para o componente de busca */}
      <SearchBar busca={busca} setBusca={setBusca} />
      
      <div className={styles.grid}>
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  );
}