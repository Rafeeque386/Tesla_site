import { FaExclamationCircle } from 'react-icons/fa';
import './wildcard.css'
import { useNavigate } from 'react-router-dom';

export const WildcardPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="wildcard-page">
            <FaExclamationCircle className="icon" />
            <h1 className="wildcard-heading">404 - Page Not Found</h1>
            <p className="wildcard-text">The page you're looking for doesn't exist.</p>
            <button className="go-home-button" onClick={handleGoHome}>
                Go to Home
            </button>
        </div>
    );
};
