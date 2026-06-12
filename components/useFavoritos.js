"use client";
import { useState, useEffect } from 'react';

export function useFavoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const salvo = localStorage.getItem('favoritos');
    if (salvo) setFavoritos(JSON.parse(salvo));
  }, []);

  function toggleFavorito(id) {
    setFavoritos((prev) => {
      const atualizado = prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id];
      localStorage.setItem('favoritos', JSON.stringify(atualizado));
      return atualizado;
    });
  }

  return { favoritos, toggleFavorito };
}
