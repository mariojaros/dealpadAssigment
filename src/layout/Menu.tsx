import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Menu.css';
import { MenuContext } from '../components/MenuContext';

interface Props {
    className?: string;
}


const Menu: React.FC<Props> = ({ className }) => {
    const { isOpen, setIsOpen } = useContext(MenuContext);

    const location = useLocation();

    return (
        <div id="menu-root" className={`${className} menu w-64 absolute top-0 left-0 h-full bg-black bg-opacity-75 flex left-full flex-col items-center justify-center overflow-hidden ${isOpen ? "open" : ""}`}>
            <button onClick={() => setIsOpen(!isOpen)} className="absolute top-2 left-2 color p-1 bg-opacity-75 text-white bg-inherit">
                X
            </button>
            <div className="menu-link w-full text-center my-4">
                <Link to="/register">
                    <button disabled={location.pathname === "/register"} className={`p-2 rounded-lg bg-opacity-90 ${location.pathname === "/register" ? "bg-neutral-800" : "bg-blue-800"}`}>Register</button>
                </Link>
            </div>
            <div className="menu-link w-full text-center my-4">
                <Link to="/play">
                    <button disabled={location.pathname === "/play"} className={`p-2 rounded-lg bg-opacity-90 ${location.pathname === "/play" ? "bg-neutral-800" : "bg-blue-800"}`}>Play</button>
                </Link>
            </div>
            <div className="menu-link w-full text-center my-4">
                <Link to="/leaderboard">
                    <button disabled={location.pathname === "/leaderboard"} className={`p-2 rounded-lg bg-opacity-90 ${location.pathname === "/leaderboard" ? "bg-neutral-800" : "bg-blue-800"}`}>Leaderboard</button>
                </Link>
            </div>
        </div>
    );
};

export default Menu;