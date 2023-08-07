import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const OffCanvasMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>{isOpen ? 'Close Menu' : 'Open Menu'}</button>
      {isOpen && (
        <div className="menu">
          <Link to="/register" onClick={toggleMenu}>
            <button disabled={location.pathname === '/register'}>Register</button>
          </Link>
          <Link to="/play" onClick={toggleMenu}>
            <button disabled={location.pathname === '/play'}>Play</button>
          </Link>
          <Link to="/leaderboard" onClick={toggleMenu}>
            <button disabled={location.pathname === '/leaderboard'}>Leaderboard</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default OffCanvasMenu;