import { FaExclamationCircle } from 'react-icons/fa';
import './wildcard.css';
import { useNavigate } from 'react-router-dom';
import { WILDCARD_CONSTANTS } from '@/constants/wildcardContants';
import TeslaButton from '@/components/button/Button';

export const WildcardPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="wildcard-page">
      <FaExclamationCircle className="icon" />
      <h1 className="wildcard-heading">{WILDCARD_CONSTANTS.PAGE_NOT_FOUND_TEXT}</h1>
      <p className="wildcard-text">{WILDCARD_CONSTANTS.PAGE_NOT_EXIST_TEXT}</p>
      <TeslaButton
        className="go-home-button"
        onClick={handleGoHome}
        text={WILDCARD_CONSTANTS.GO_HOME}
        isLoading={false}
      />
    </div>
  );
};
