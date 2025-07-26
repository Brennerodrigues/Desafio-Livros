// src/pages/Favorites.js
//importa layout do Chakra UI
import {
  Box, Text, Image, SimpleGrid, Button,
} from '@chakra-ui/react';
import { useFavorites } from '../contexts/FavoritesContext';

export function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    //Exibe o título da pagina
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Livros Favoritos</Text>
      {favorites.length === 0 ? (
        <Text>Nenhum favorito ainda.</Text>
      ) : (
        //coloca cada livro dentro de um box
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          {favorites.map((book) => (
            <Box key={book.key} borderWidth="1px" borderRadius="md" p={4}>
        //mostra dados do livro
              <Image
                src={
                  book.cover_i
                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                    : 'https://via.placeholder.com/150x220?text=Sem+Capa'
                }
                alt={book.title}
                mb={2}
              />
              <Text fontWeight="bold">{book.title}</Text>
              <Text>{book.author_name?.join(', ') || 'Autor desconhecido'}</Text>
              <Text>{book.first_publish_year || 'Ano desconhecido'}</Text>
              <Button mt={2} colorScheme="red" onClick={() => toggleFavorite(book)}>
                Remover
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}
