import { Home } from './View/Home';
import { memo, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const HomeBl = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToHome = useCallback(() => {
    navigate('/home');
  }, [navigate]);

  return (
    <Home navigate={navigate} curPath={location.pathname} goToHome={goToHome} />
  );
});
