// TeslaCarCard.tsx
import React from 'react';
import { ICard } from '../../interfaces/model';




interface TeslaCarCardProps {
    car: ICard;
}

const TeslaCarCard: React.FC<TeslaCarCardProps> = ({ car }) => (
    <div className="tesla-car-card">
        <img src={car.image} alt={car.name} />
        <h3>{car.name}</h3>
        <p>{car.description}</p>
    </div>
);

export default TeslaCarCard;