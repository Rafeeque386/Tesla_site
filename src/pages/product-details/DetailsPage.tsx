import React, { useState } from 'react';
import './details.css';
import { CarColorPicker } from '@/components/colorSelector/Selector';
import { ICarImages } from '@/interfaces/model';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useGetCarById } from '@/hooks/queries/useCarQueries';
import { ClipLoader } from 'react-spinners';
import Toast from '@/components/toast/toast';

const DetailsPage: React.FC = () => {
  const { id } = useParams();
  const carId = id ? JSON.parse(id) : 0;
  const [selectedColor, setSelectedColor] = useState<keyof ICarImages>('red');
  const navigate = useNavigate();

  const { data: carDetails, isLoading, error } = useGetCarById(carId);

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

  const handleColorChange = (color: keyof ICarImages) => {
    setSelectedColor(color);
  };

  const goBack = () => {
    navigate(-1);
  };

  if (!carDetails || !carDetails.images) {
    return (
      <div className="loader-container">
        <ClipLoader color="#007bff" size={50} />
      </div>
    );
  }

  return (
    <div className="car-details-page">
      <span onClick={goBack}>
        {' '}
        <FaArrowCircleLeft className="custom-icon" />
      </span>

      <div className="car-details-container">
        <div className="car-image">
          <img src={carDetails.images[selectedColor]} alt={selectedColor} />
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
