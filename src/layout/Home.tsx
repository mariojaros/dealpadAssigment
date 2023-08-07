import { useNavigate } from 'react-router-dom';
import dealPad from '../assets/images/dealpad-xs.png';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center justify-center h-screen text-center space-y-4'>
            <img src={dealPad}/>
            <h1>Welcome to Click Mini Game</h1>
            <button className="bg-blue-500 hover:opacity-90 text-white rounded px-4 py-2" onClick={() => navigate('/register')}>Register</button>
            <button className="bg-blue-500 hover:opacity-90 text-white rounded px-4 py-2" onClick={() => navigate('/leaderboard')}>Leaderboard</button>
        </div>
    );
};

export default Home;
