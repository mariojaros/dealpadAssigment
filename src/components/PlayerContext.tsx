import React, { createContext, useState, ReactNode } from 'react';

type PlayerContextType = {
    currentPlayer: string,
    setCurrentPlayer: (player: string) => void
}

const PlayerContext = createContext({} as PlayerContextType);

type PlayerProviderProps = {
    children: ReactNode
}

export const PlayerProvider: React.FC<PlayerProviderProps> = ({ children }) => {
    const [currentPlayer, setCurrentPlayer] = useState<string>('');

    return (
        <PlayerContext.Provider value={{ currentPlayer, setCurrentPlayer }}>
            {children}
        </PlayerContext.Provider>
    );
}

export default PlayerContext;