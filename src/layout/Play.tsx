import React, { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { LeaderboardContext } from '../components/LeaderBoardContext';
import PlayerContext from '../components/PlayerContext';
import MenuButton from './MenuButton';
import Menu from './Menu';
import { MenuContext } from '../components/MenuContext';
import { useLocation } from 'react-router-dom';

const Play: React.FC = () => {
    const { addScore } = useContext(LeaderboardContext);
    const { leaderboard } = useContext(LeaderboardContext);
    const { currentPlayer } = useContext(PlayerContext);
    const [counter, setCounter] = useState<number>(10);
    const [clicks, setClicks] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);
    const countRef = useRef<NodeJS.Timeout | null>(null);
    const { isOpen, setIsOpen } = useContext(MenuContext);
    let location = useLocation();

    const handleStartClick = () => {
        setIsActive(true);
    };

    const handleHitClick = () => {
        if (isActive) {
            setClicks((prevClicks) => prevClicks + 1);
        }
    }

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    useEffect(() => {
        if (isActive && counter > 0) {
            console.log('counter', counter);
            countRef.current = setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1);
            }, 1000);
        }

        if (counter === 0) {
            clearInterval(countRef.current!);
            setIsActive(false);
            console.log(currentPlayer, clicks);
            addScore(currentPlayer, clicks);
            console.log(leaderboard);

        }
        return () => clearInterval(countRef.current!);
    }, [isActive, counter]);

    return (
        <div className="flex justify-center items-center h-screen w-1/6 relative">
            <div className="flex flex-col items-center gap-4 w-full relative">
                <div className='flex flex-row justify-between w-full'>
                    <div className='flex-1'>.</div>
                    <div className="flex flex-1 items-center justify-center">
                        <h1>Play</h1>
                    </div>
                    <div className='flex flex-1 items-center justify-between'> <MenuButton /></div>
                </div>

                <p>Clicks: {clicks}</p>
                <p>Timer: {counter}</p>
                <button disabled={isActive} onClick={handleStartClick}>Start</button>
                <div className="flex items-center justify-center">
                    <button
                        onClick={handleHitClick}
                        className={`relative flex justify-center items-center rounded-full h-20 w-20 bg-red-500 disabled:bg-red-500  ${!isActive ? 'opacity-50' : ''}`}
                    >
                        <span className="absolute rounded-full h-12 w-12 bg-red-700"></span>
                    </button>
                </div>
                <Menu />
            </div>
          
        </div>
    );
};

export default Play;