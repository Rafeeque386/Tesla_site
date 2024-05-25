import React from 'react';
import './model.css';

const Product: React.FC = () => {
    return (
        <div className="model-container">
            <section className="model-section">
                <h1>Model S</h1>
                {/* Add content for Model S */}
            </section>

            <section className="model-section">
                <h1>Model 3</h1>
                {/* Add content for Model 3 */}
            </section>

            <section className="model-section">
                <h1>Model X</h1>
                {/* Add content for Model X */}
            </section>

            <section className="model-section">
                <h1>Model Y</h1>
                {/* Add content for Model Y */}
            </section>
        </div>
    );
};

export default Product;