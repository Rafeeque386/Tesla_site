import { ICard } from '@/interfaces/model';
import { useQuery } from '@tanstack/react-query';

const fetchCars = async (): Promise<ICard[]> => {
  const response = await fetch('http://localhost:8000/cars');
  return await response.json();
};

export const useCars = () => {
  return useQuery<ICard[], Error, ICard[]>({
    queryKey: ['cars'],
    queryFn: fetchCars,
  });
};
