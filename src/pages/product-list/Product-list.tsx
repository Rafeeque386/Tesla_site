import React, { useState } from 'react';
import TeslaCarCard from '@components/cards/Cards';
import { ICard } from '@interfaces/model';
import { teslaCars } from './data';
import './product-list.css'
import Pagination from '@components/pagination/Pagination';

export const TeslaProductGrid: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [carsPerPage] = useState(3);

    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = teslaCars.slice(indexOfFirstCar, indexOfLastCar);

    const totalPages = Math.ceil(teslaCars.length / carsPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (

        <div className="tesla-product-grid">
            <div className='product-content-wrap'>

                <div className="tesla-car-grid">

                    {currentCars.map((car: ICard) => (
                        <TeslaCarCard key={car.id} car={car} />
                    ))}

                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
            </div>

        </div>


    );
};
