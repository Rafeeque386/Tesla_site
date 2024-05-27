import { ICard } from '@/interfaces/model';

export const fetchCars = async (): Promise<ICard[]> => {
  const response = await fetch('http://localhost:8000/cars');
  return await response.json();
};

export const fetchCarById = async (id: number): Promise<ICard | undefined> => {
  const response = await fetch(`http://localhost:8000/cars/${id}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to fetch car');
};
