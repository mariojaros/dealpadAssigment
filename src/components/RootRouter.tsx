import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../layout/Home";
import {RootLayout} from "../layout/RootLayout";

export default function RootRouter() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
