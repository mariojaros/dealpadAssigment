import React, { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { LeaderboardContext } from '../components/LeaderBoardContext';
import PlayerContext from '../components/PlayerContext';
import OffCanvasMenu from './OffCanvasMenu';

const Play: React.FC = () => {
    const { addScore } = useContext(LeaderboardContext);
    const { leaderboard } = useContext(LeaderboardContext);
    const { currentPlayer } = useContext(PlayerContext);
    const [counter, setCounter] = useState<number>(10);
    const [clicks, setClicks] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);
    const countRef = useRef<NodeJS.Timeout | null>(null);

    const handleStartClick = () => {
        setIsActive(true);
    };

    const handleHitClick = () => {
        if (isActive) {
            setClicks((prevClicks) => prevClicks + 1);
        }
    }

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
        <div>
            <OffCanvasMenu />
            <p>Clicks: {clicks}</p>
            <p>Timer: {counter}</p>
            <button disabled={isActive} onClick={handleStartClick}>Start</button>
            <button disabled={!isActive} onClick={handleHitClick}>Hit!</button>
        </div>
    );
};

export default Play;