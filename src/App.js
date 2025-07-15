import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { Box, Button, HStack } from '@chakra-ui/react';
import { FavoritesProvider } from './contexts/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Box p={4}>
          <HStack mb={4} spacing={4}>
            <Button as={Link} to="/" colorScheme="blue">
              Início
            </Button>
            <Button as={Link} to="/favoritos" colorScheme="yellow">
              Favoritos
            </Button>
          </HStack>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favorites />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
