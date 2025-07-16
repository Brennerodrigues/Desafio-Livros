import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';

export function useBooks(searchTerm, page) { //recebe o termo de busca e numero da pagina
  return useQuery({
    queryKey: ['books', searchTerm, page],
    queryFn: async () => {
      const res = await api.get('/search.json', {
        params: {
          q: searchTerm,
          page: page,
        },
      });
      return res.data;
    },
    keepPreviousData: true, //mantem os dados anteriores ao acessar novas paginas
    staleTime: 1000 * 60 * 5, //Define um tempo de validade
  });
}
