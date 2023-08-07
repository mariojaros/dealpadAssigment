import { useContext } from 'react';
import { LeaderboardContext } from '../components/LeaderBoardContext';

const Leaderboard: React.FC = () => {
    const { leaderboard } = useContext(LeaderboardContext);

    // Sort leaderboard
    const sortedLeaderboard = [...leaderboard]
        .sort((a, b) => b.score - a.score);

    // Top 4 Users
    const topUsers = sortedLeaderboard
        .filter((v,i,a) => a.findIndex(t=>t.battleName === v.battleName)===i)
        .slice(0, 4)
    // Top 20 Rounds
    const topRounds = sortedLeaderboard.slice(0, 20);

    return (
        <div className='flex flex-col items-center justify-center h-screen text-center space-y-4'>
            <h1>Leaderboard</h1>
            <h2>Top 4 users</h2>
            <ol>    
                {topUsers.map((user, index) => (
                    <li key={index}>{user.battleName}: {user.score} clicks</li>
                ))}
            </ol>
            <h2>Top 20 rounds</h2>
            <ol> 
                {topRounds.map((round, index) => (
                    <li key={index}>{round.battleName}: {round.score} clicks</li>
                ))}
            </ol>
        </div>
    );
};

export default Leaderboard;