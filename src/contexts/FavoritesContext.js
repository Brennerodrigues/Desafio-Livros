import { createContext, useContext, useEffect, useState } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (book) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.key === book.key);
      if (exists) {
        return prev.filter((item) => item.key !== book.key);
      } else {
        return [...prev, book];
      }
    });
  };

  const isFavorite = (bookKey) => {
    return favorites.some((item) => item.key === bookKey);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
