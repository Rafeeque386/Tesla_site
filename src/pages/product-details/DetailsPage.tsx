import React, { useState } from 'react';
import { teslaCars } from '../product-list/data';
import './details.css';
import { CarColorPicker } from '@/components/colorSelector/Selector';
import { ICarImages, ICard } from '@/interfaces/model';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';

const DetailsPage: React.FC = () => {
  const { id } = useParams();
  const parsedId = id ? parseInt(id, 10) : undefined;
  const [selectedColor, setSelectedColor] = useState<keyof ICarImages>('red');
  const navigate = useNavigate();

  const car: ICard | undefined = teslaCars.find((c) => c.id === parsedId);

  const handleColorChange = (color: keyof ICarImages) => {
    setSelectedColor(color);
  };
  const goBack = () => {
    navigate(-1); // Simulate going back by navigating with a negative delta
  };

  if (!car || !car.images) {
    return <div>Loading...</div>;
  }

  return (
    <div className="car-details-page">
      <span onClick={goBack}>
        {' '}
        <FaArrowCircleLeft className="custom-icon" />
      </span>

      <div className="car-details-container">
        <div className="car-image">
          <img src={car.images[selectedColor]} alt={`${car.name} in ${selectedColor.slice(1)}`} />
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
