import { ICard } from '@/interfaces/model';
import { fetchCarById, fetchCars } from '@/services/carServices';
import { useQuery } from '@tanstack/react-query';

export const useGetCarById = (id: number) => {
  return useQuery<ICard | undefined, Error>({
    queryKey: ['car', id],
    queryFn: () => fetchCarById(id),
  });
};
export const useGetAllCars = () => {
  return useQuery<ICard[], Error, ICard[]>({
    queryKey: ['cars'],
    queryFn: fetchCars,
  });
};
