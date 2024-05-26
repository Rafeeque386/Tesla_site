import React from 'react';
// import { useParams } from 'react-router-dom';
import { teslaCars } from '../product-list/data';
import './details.css'

const CarDetailsPage: React.FC = () => {
    // const { id } = useParams();
    const id = 1

    const car = teslaCars.find((c) => c.id === id);

    if (!car) {
        return <div>Loading...</div>;
    }

    return (
        <div className="car-details-page">
            <div className="car-details-container">
                <div className="car-image">
                    <img src={car.image} alt={car.name} />
                </div>
                <div className="car-info">
                    <h2>{car.name}</h2>
                    <p>{car.description}</p>
                    <p>Price: {car.price}</p>
                    <p>Range: {car.range} miles</p>
                    <p>Top Speed: {car.topSpeed} mph</p>
                    <p>Acceleration: {car.acceleration} seconds</p>
                </div>
            </div>
        </div>
    );
};

export default CarDetailsPage;