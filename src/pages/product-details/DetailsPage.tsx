import React, { useState } from 'react';
import './details.css';
import { CarColorPicker } from '@/components/colorSelector/Selector';
import { ICarImages } from '@/interfaces/model';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useCarById } from '@/hooks/usecarByIdHook';

const DetailsPage: React.FC = () => {
  const { id } = useParams();
  const carId = id ? JSON.parse(id) : 0;
  const [selectedColor, setSelectedColor] = useState<keyof ICarImages>('red');
  const navigate = useNavigate();

  // const car: ICard | undefined = teslaCars.find((c) => c.id === parsedId);

  const { data: carDetails, isLoading, error } = useCarById(carId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleColorChange = (color: keyof ICarImages) => {
    setSelectedColor(color);
  };

  const goBack = () => {
    navigate(-1); // Simulate going back by navigating with a negative delta
  };

  if (!carDetails || !carDetails.images) {
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
          <img
            src={carDetails.images[selectedColor]}
            alt={`${carDetails.name} in ${selectedColor.slice(1)}`}
          />
        </div>
        <div className="car-info">
          <h2>{carDetails.name}</h2>
          <p>{carDetails.description}</p>
          <p>Price: {carDetails.price}</p>
          <p>Range: {carDetails.range} miles</p>
          <p>Top Speed: {carDetails.topSpeed} mph</p>
          <p>Acceleration: {carDetails.acceleration} seconds</p>
          <CarColorPicker onColorChange={handleColorChange} />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
