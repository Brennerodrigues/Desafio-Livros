import { createContext, useContext, useEffect, useState } from 'react';
//crio um contexto
const FavoritesContext = createContext();
//função para acessar favoritos salvos
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });
//Salva a lista de favoritos a cada mudança
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
//remove e adiciona favoritos
  const toggleFavorite = (book) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.key === book.key);
      if (exists) {
        return prev.filter((item) => item.key !== book.key); //remove
      } else {
        return [...prev, book]; //adiciona
      }
    });
  };
//verifica o livro
  const isFavorite = (bookKey) => { //retorna true se estiver nos favoritos
    return favorites.some((item) => item.key === bookKey);
  };
//disponibiliza as funções
  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
//atalho de acesso
export function useFavorites() {
  return useContext(FavoritesContext);
}
