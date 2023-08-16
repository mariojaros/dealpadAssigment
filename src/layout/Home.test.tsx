import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useNavigate: jest.fn(), // replace useNavigate with the Mock function
}));

describe('Home tests', () => {
    it('renders the Home component', () => {
        render(<Home />);
        expect(screen.getByText(/Welcome to Click Mini Game/i)).toBeInTheDocument();
    });

    it('navigates to Register when the Register button is clicked', () => {
        const navigateMock = jest.fn();
        (useNavigate as jest.Mock).mockReturnValue(navigateMock);
        render(<Home />);
        fireEvent.click(screen.getByText(/Register/i));
        expect(navigateMock).toHaveBeenCalledWith('/register');
    });

    it('navigates to Leaderboard when the Leaderboard button is clicked', () => {
        const navigateMock = jest.fn();
        (useNavigate as jest.Mock).mockReturnValue(navigateMock);
        render(<Home />);
        fireEvent.click(screen.getByText(/Leaderboard/i));
        expect(navigateMock).toHaveBeenCalledWith('/leaderboard');
    });
});