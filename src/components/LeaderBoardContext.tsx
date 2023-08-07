import React, { createContext, useState, useEffect, ReactNode } from 'react';
export type Score = {
    battleName: string,
    score: number,
}

type LeaderboardContextType = {
    leaderboard: Score[],
    addScore: (battleName: string, score: number) => void,
};

export const LeaderboardContext = createContext<LeaderboardContextType>({
    leaderboard: [],
    addScore: () => { },
});

type Props = {
    children: ReactNode,
}

export const LeaderboardProvider: React.FC<Props> = ({ children }) => {
    const [leaderboard, setLeaderboard] = useState<Score[]>([]);

    function addScore(battleName: string, score: number) {
        let newScores: Score[] = [...leaderboard, { battleName, score }];

        // keep only top rounds per user
        newScores = newScores
            .sort((a, b) => b.score - a.score)
            .reduce((result: Score[], current) => {
                const existingScoresForUser = result.filter(score => score.battleName == current.battleName);
                if (existingScoresForUser.length == 10) {
                    return result;
                } else {
                    return [...result, current];
                }
            }, []);
        setLeaderboard(newScores);
    }

    return (
        <LeaderboardContext.Provider value={{
            leaderboard,
            addScore
        }}>
            {children}
        </LeaderboardContext.Provider>
    );
};  