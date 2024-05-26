import React from 'react';
import './button.css';

interface TeslaButtonProps {
  className?: string;
  onClick?: () => void;
  text: string;
  isLoading?: boolean;
}

const TeslaButton: React.FC<TeslaButtonProps> = ({
  className,
  onClick,
  text,
  isLoading = false,
}) => {
  return (
    <button className={`tesla-button ${className || ''}`} onClick={onClick} disabled={isLoading}>
      {isLoading ? (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default TeslaButton;
