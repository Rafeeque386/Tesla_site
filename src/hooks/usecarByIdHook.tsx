import { ICard } from '@/interfaces/model';
import { useQuery } from '@tanstack/react-query';

const fetchCarById = async (id: number): Promise<ICard | undefined> => {
  const response = await fetch(`http://localhost:8000/cars/${id}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to fetch car');
};

export const useCarById = (id: number) => {
  return useQuery<ICard | undefined, Error>({
    queryKey: ['car', id],
    queryFn: () => fetchCarById(id),
  });
};
