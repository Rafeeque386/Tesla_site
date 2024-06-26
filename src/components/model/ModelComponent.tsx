import React from 'react';
import './model.css';

interface ModelProps {
  title: string;
  description?: string;
  image: string;
  child: React.ReactNode;
}

const Model: React.FC<ModelProps> = ({ title, child }) => {
  return (
    <section className="model-section">
      <h1>{title}</h1>
      {child}
    </section>
  );
};

export default Model;
