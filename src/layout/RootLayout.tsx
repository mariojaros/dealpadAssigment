import { Outlet } from "react-router-dom";
import React from "react";
import { LeaderboardProvider } from "../components/LeaderBoardContext";
import Play from "./Play";
import { PlayerProvider } from "../components/PlayerContext";
import { MenuProvider } from "../components/MenuContext";

export const RootLayout = () => {
  return (
    <PlayerProvider>
      <LeaderboardProvider>
        <MenuProvider>
          <div className="my-container px-5 border rounded flex justify-center items-center">
            <Outlet />
          </div>
        </MenuProvider>
      </LeaderboardProvider>
    </PlayerProvider>
  );
};
