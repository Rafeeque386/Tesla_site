import React from 'react';
import './landing-page.css'
import TeslaButton from '@components/button/Button';
import Model from '@components/model/ModelComponent';

export const LandingPage: React.FC = () => {
    const models = [
        {
            title: 'Model S',
            description: 'Description for Model S',
            image: '/src/assets/model-s.jpg',
        },
        {
            title: 'Model 3',
            description: 'Description for Model 3',
            image: '/src/assets/model-3.jpg',
        },
        {
            title: 'Model X',
            description: 'Description for Model X',
            image: '/src/assets/model-x.jpg',
        },
        {
            title: 'Model Y',
            description: 'Description for Model Y',
            image: '/src/assets/model-y.jpg',
        },
    ];
    const handleOrderNow = () => {

        console.log("test");

    }

    const testDrive = () => {

        console.log("test");

    }

    return (
        <div className="model-container">
            {models.map((model, index: number) => (
                <Model
                    key={index}
                    title={model.title}
                    description={model.description}
                    image={model.image}
                    child={<div className='button-wrap'><TeslaButton
                        className="tesla-button-primary"
                        onClick={handleOrderNow}
                        text="Order Now"
                        isLoading={false}
                    />
                        <TeslaButton
                            className="tesla-button-secondary"
                            onClick={testDrive}
                            text="Test Drive"
                            isLoading={false}
                        />

                    </div>}
                />
            ))}
        </div>
    );
};


