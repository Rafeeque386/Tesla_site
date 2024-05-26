import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { teslaCars } from '../product-list/data';
import './details.css'
import { CarColorPicker } from '@/components/colorSelector/Selector';
import { ICarImages, ICard } from '@/interfaces/model';

const DetailsPage: React.FC = () => {
    // const { id } = useParams();
    const id = 1
    const [selectedColor, setSelectedColor] = useState<keyof ICarImages>('red');

    const car: ICard | undefined = teslaCars.find((c) => c.id === id);

    const handleColorChange = (color: keyof ICarImages) => {
        setSelectedColor(color);
    };



    if (!car || !car.images) {
        return <div>Loading...</div>;
    }

    return (
        <div className="car-details-page">
            <div className="car-details-container">
                <div className="car-image">
                    <img
                        src={car.images[selectedColor]}
                        alt={`${car.name} in ${selectedColor.slice(1)}`}
                    />
                </div>
                <div className="car-info">
                    <h2>{car.name}</h2>
                    <p>{car.description}</p>
                    <p>Price: {car.price}</p>
                    <p>Range: {car.range} miles</p>
                    <p>Top Speed: {car.topSpeed} mph</p>
                    <p>Acceleration: {car.acceleration} seconds</p>
                    <CarColorPicker onColorChange={handleColorChange} />
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;