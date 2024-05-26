import React, { useState } from 'react';
import './selector.css';
import { ICarImages } from '@/interfaces/model';

interface IColourChange {
  onColorChange: (color: keyof ICarImages) => void;
}

export const CarColorPicker: React.FC<IColourChange> = ({ onColorChange }) => {
  const [selectedColor, setSelectedColor] = useState('FF1334');

  const handleColorChange = (color: keyof ICarImages) => {
    setSelectedColor(color);
    onColorChange(color);
  };

  return (
    <div className="car-color-picker">
      <h3>Choose a Color:</h3>
      <div className="color-options">
        <div
          className={`color-option ${selectedColor === '#FF1334' ? 'selected' : ''}`}
          style={{ backgroundColor: '#FF1334' }}
          onClick={() => handleColorChange('red')}
        />
        <div
          className={`color-option ${selectedColor === '#0A0A00' ? 'selected' : ''}`}
          style={{ backgroundColor: '#0A0A00' }}
          onClick={() => handleColorChange('black')}
        />
        <div
          className={`color-option ${selectedColor === '#04274F' ? 'selected' : ''}`}
          style={{ backgroundColor: '#04274F' }}
          onClick={() => handleColorChange('blue')}
        />
        <div
          className={`color-option ${selectedColor === '#e5e6e7' ? 'selected' : ''}`}
          style={{ backgroundColor: '#e5e6e7' }}
          onClick={() => handleColorChange('white')}
        />
        <div
          className={`color-option ${selectedColor === '#D6D6D6' ? 'selected' : ''}`}
          style={{ backgroundColor: '#D6D6D6' }}
          onClick={() => handleColorChange('grey')}
        />
      </div>
    </div>
  );
};
