import React, { useState } from 'react';
import TeslaCarCard from '@components/cards/Cards';
import { ICard } from '@interfaces/model';
import './product-list.css';
import Pagination from '@components/pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import { useGetAllCars } from '@hooks/queries/useCarQueries';
import { ClipLoader } from 'react-spinners';
import Toast from '@/components/toast/toast';

export const TeslaProductGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(3);
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetAllCars();

  if (isLoading) {
    return (
      <div className="loader-container">
        <ClipLoader color="#007bff" size={50} />
      </div>
    );
  }

  if (error) {
    return <Toast type="error" message={error.message} />;
  }

  // handle pagination from FE since API doesn't support

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = data?.slice(indexOfFirstCar, indexOfLastCar) || [];

  const totalPages = (data && Math.ceil(data.length / carsPerPage)) || 0;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const onHandleCard = (id: number) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="tesla-product-grid">
      <div className="product-content-wrap">
        <div className="tesla-car-grid">
          {currentCars.map((car: ICard) => (
            <TeslaCarCard key={car.id} car={car} onHandleClick={(id) => onHandleCard(id)} />
          ))}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
      </div>
    </div>
  );
};
