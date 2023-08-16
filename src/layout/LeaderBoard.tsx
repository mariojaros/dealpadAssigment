import { useContext, useEffect, useState } from 'react';
import { LeaderboardContext } from '../components/LeaderBoardContext';
import MenuButton from './MenuButton';
import { MenuContext } from '../components/MenuContext';
import { useLocation } from 'react-router-dom';

const Leaderboard: React.FC = () => {
    const [showTopUsers, setShowTopUsers] = useState(false);
    const { isOpen, setIsOpen } = useContext(MenuContext);
    let location = useLocation();

    const { leaderboard } = useContext(LeaderboardContext);

    const sortedLeaderboard = [...leaderboard]
        .sort((a, b) => b.score - a.score);

    const topUsers = sortedLeaderboard
        .filter((v, i, a) => a.findIndex(t => t.battleName === v.battleName) === i)
        .slice(0, 4)
   
    const topRounds = sortedLeaderboard.slice(0, 20);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <div className="flex justify-center items-center h-screen w-1/6 relative">
            <div className="flex flex-col items-center gap-4 w-full relative min-h-250">
                <div className='flex flex-row justify-between w-full'>
                    <div className='flex-1'></div>
                    <div className="flex flex-1 items-center justify-center">
                        <h1>Leaderboard</h1>
                    </div>
                    <div className='flex flex-1 items-center justify-between'> <MenuButton /></div>
                </div>

                <div className='flex flex-row justify-between w-full'>
                    <div className={`flex-1 items-center justify-center text-sky-500 ${showTopUsers ? "underline" : ""} cursor-pointer`} onClick={() => setShowTopUsers(!showTopUsers)}>Top 4 users</div>
                    <div className={`flex-1 items-center justify-center text-sky-500 ${!showTopUsers ? "underline" : ""} cursor-pointer`} onClick={() => setShowTopUsers(!showTopUsers)}>Top 20 clicks</div>
                    <div className='flex-1 items-center justify-center'></div>
                </div>

                {showTopUsers &&
                    <ol>
                        {topUsers.map((round, index) => (
                        <div key={index} className={`table-row ${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}`}>
                            <div className="table-cell p-2">{index + 1}</div>
                            <div className="table-cell p-2">{round.battleName}</div>
                            <div className="table-cell p-2">{round.score} clicks</div>
                            <div className="table-cell p-2">{}</div>
                        </div>
                    ))}
                    </ol>
                }

                {!showTopUsers &&
                    <div className="table w-full text-center">
                
                    {topRounds.map((round, index) => (
                        <div key={index} className={`table-row ${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}`}>
                            <div className="table-cell p-2">{index + 1}</div>
                            <div className="table-cell p-2">{round.battleName}</div>
                            <div className="table-cell p-2">{round.score} clicks</div>
                            <div className="table-cell p-2">{}</div>
                        </div>
                    ))}
                </div>
                }
            </div>
        </div>
    );
};

export default Leaderboard;