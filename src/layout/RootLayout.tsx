import { Outlet } from "react-router-dom";
import React from "react";
import { LeaderboardProvider } from "../components/LeaderBoardContext";
import Play from "./Play";
import { PlayerProvider } from "../components/PlayerContext";

export const RootLayout = () => {
  return (
    <PlayerProvider>
      <LeaderboardProvider>
        <div className="my-container px-5 border rounded">
          <Outlet />
        </div>
      </LeaderboardProvider>
    </PlayerProvider>
  );
};
