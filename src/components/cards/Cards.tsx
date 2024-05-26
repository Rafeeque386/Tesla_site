import React from 'react';

interface TeslaCarCardProps {
  car: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
  onHandleClick: (id: number) => void;
}

const TeslaCarCard: React.FC<TeslaCarCardProps> = ({ car, onHandleClick }) => {
  const onCardClick = (id: number) => {
    onHandleClick(id);
  };

  return (
    <div onClick={() => onCardClick(car.id)} className="tesla-car-card">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>{car.description}</p>
    </div>
  );
};

export default TeslaCarCard;
