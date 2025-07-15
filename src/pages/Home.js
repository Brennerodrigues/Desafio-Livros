import {
  Box, Input, Button, SimpleGrid, Text, Image, Spinner,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useBooks } from '../hooks/usebooks';
import { useFavorites } from '../contexts/FavoritesContext';

export function Home() {
  const [search, setSearch] = useState('react');
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useBooks(search, page);
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <Box p={4}>
      <Input
        placeholder="Buscar livros..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        mb={4}
      />

      {isLoading && <Spinner />}
      {isError && <Text color="red.500">Erro ao carregar livros.</Text>}

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        {data?.docs?.map((book) => (
          <Box
            key={book.key}
            borderWidth="1px"
            borderRadius="md"
            p={4}
            position="relative"
            bg={isFavorite(book.key) ? 'yellow.50' : 'white'}
          >
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
            <Button
              size="sm"
              mt={2}
              onClick={() => toggleFavorite(book)}
              colorScheme={isFavorite(book.key) ? 'yellow' : 'blue'}
            >
              {isFavorite(book.key) ? 'Remover Favorito' : 'Favoritar'}
            </Button>
          </Box>
        ))}
      </SimpleGrid>

      <Box mt={4} display="flex" gap={2} justifyContent="center">
        <Button onClick={() => setPage((p) => Math.max(p - 1, 1))} isDisabled={page === 1}>
          Página anterior
        </Button>
        <Button onClick={() => setPage((p) => p + 1)}>Próxima página</Button>
      </Box>
    </Box>
  );
}
