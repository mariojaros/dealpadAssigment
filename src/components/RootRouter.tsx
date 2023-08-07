import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../layout/Home";
import Register from "../layout/Register";
import Play from "../layout/Play";
import {RootLayout} from "../layout/RootLayout";
import Leaderboard from "../layout/LeaderBoard";

export default function RootRouter() {
  return (
    <Routes>
        <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/play" element={<Play />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="*" element={<Home />} />
        </Route>
    </Routes>
);
}
