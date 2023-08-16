import React, { useState, useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import PlayerContext from '../components/PlayerContext';
import MenuButton from './MenuButton';
import Menu from './Menu';
import { MenuContext } from '../components/MenuContext';

const Register: React.FC = () => {
    const navigate = useNavigate();
    const { setCurrentPlayer } = useContext(PlayerContext);

    const [battleName, setBattleName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const { isOpen, setIsOpen } = useContext(MenuContext);
    let location = useLocation();

    const validateForm = useCallback((): boolean => {
        let valid = true;

        if (!battleName || battleName.length > 50) {
            valid = false;
            console.error('Invalid Battle Name.');
        }

        if (!email || !/^[\w-]+(\.[\w]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email) || email.length > 150) {
            valid = false;
            console.error('Invalid Email.');
        }

        if (phoneNumber && phoneNumber.length > 50) {
            valid = false;
            console.error('Invalid Phone Number.');
        }

        return valid;
    }, [battleName, email, phoneNumber]);

    const handleFormSubmit = useCallback(
        (event: React.FormEvent) => {
            event.preventDefault();

            if (validateForm()) {
                setCurrentPlayer(battleName);
                navigate('/play');
            }
        },
        [validateForm]
    );

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <div className="flex justify-center items-center h-screen relative">
            <div className="relative flex flex-col items-center gap-4">

                <form onSubmit={handleFormSubmit} className='flex flex-col items-center gap-4 w-full'>
                    <div className="w-full flex items-center justify-between">
                        <div className='flex-1 flex items-center justify-center'>Please Register</div>

                        <MenuButton className='flex-1' />
                    </div>

                    <input
                        className="bg-gray-300 rounded p-2"
                        type="text"
                        value={battleName}
                        onChange={event => setBattleName(event.target.value)}
                        placeholder="Battle Name"
                        maxLength={50}
                        required
                    />

                    <input
                        className="bg-gray-300 rounded p-2"
                        type="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        placeholder="Email"
                        maxLength={150}
                        required
                    />

                    <input
                        className="bg-gray-300 rounded p-2"
                        type="tel"
                        value={phoneNumber}
                        onChange={event => setPhoneNumber(event.target.value)}
                        placeholder="Phone Number"
                        maxLength={50}
                    />
                    <div>
                        <button className="bg-blue-500 hover:opacity-90 text-white rounded px-4 py-2" type="submit">Register</button>
                    </div>

                </form>

                <Menu />
            </div>
        </div>
    );
};

export default Register;