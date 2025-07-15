import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';

export function useBooks(searchTerm, page) {
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
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
  });
}
