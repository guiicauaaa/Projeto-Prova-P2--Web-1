# 🛒 Catálogo Interativo de Produtos

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 📌 Sobre o Projeto
Este projeto é uma aplicação web desenvolvida como requisito avaliativo (P2) para a disciplina de **Programação Web I** do curso de Engenharia de Software (Centro Universitário Alfredo Nasser). 

O objetivo principal é demonstrar o domínio sobre o ecossistema do **Next.js** e **React**, aplicando conceitos fundamentais como componentização atômica, gerenciamento de estado, roteamento baseado em arquivos e estilização modular.

A aplicação consiste em um catálogo interativo de produtos que renderiza dados dinamicamente e permite a interação do usuário através de filtros de busca e sistema de curtidas.

---

## 🎯 Requisitos Atendidos (Checklist de Avaliação)

- [x] **Setup Inicial:** Projeto criado utilizando o comando `create-next-app`.
- [x] **Componentização Atômica:** Interface segmentada em mais de 5 componentes reutilizáveis (ex: `Header`, `Footer`, `ProductCard`, `SearchBar`, `LikeButton`).
- [x] **Gerenciamento de Estado Dinâmico:** Implementação do React Hook `useState` para controle do filtro de busca em tempo real e interação de curtidas nos produtos (utilizando a diretiva `"use client"`).
- [x] **Roteamento Baseado em Arquivos (File-based Routing):** Criação de 5 rotas distintas:
  - `/` (Home)
  - `/sobre` (Sobre)
  - `/produtos` (Catálogo Geral)
  - `/produtos/[id]` (Detalhes do Produto - **Rota Dinâmica**)
  - `/carrinho` (Carrinho)
- [x] **Estilização Eficiente:** Utilização rigorosa de **CSS Modules** (`.module.css`) para garantir o escopo local das classes e evitar conflitos.
- [x] **Layout Responsivo:** Estrutura visual construída com CSS Grid e Flexbox, adaptando-se a diferentes tamanhos de tela.
- [x] **Controle de Versão:** Versionamento ativo utilizando Git e hospedagem do código-fonte no GitHub.
- [x] **Deploy:** Aplicação publicada e acessível publicamente (Link abaixo).

---

## 🚀 Como executar o projeto localmente

Siga as instruções abaixo para rodar a aplicação em seu ambiente de desenvolvimento:

1. Clone este repositório:
   ```bash
   git clone [https://github.com/seu-usuario/catalogo-interativo.git](https://github.com/seu-usuario/catalogo-interativo.git)