import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import PlayerContext from '../components/PlayerContext';
import OffCanvasMenu from './OffCanvasMenu';

const Register: React.FC = () => {
    const navigate = useNavigate();
    const { setCurrentPlayer } = useContext(PlayerContext)

    const [battleName, setBattleName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');

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

    return (
        <div className="flex items-center justify-center h-screen">

            <form onSubmit={handleFormSubmit} className='flex flex-col items-center gap-4'>
                <div className="w-full flex items-center justify-between">
                    <h1>Please Register</h1>
                    <OffCanvasMenu />
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

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;