import { Outlet } from "react-router-dom";
import React from "react";

export const RootLayout = () => {
  return (
    <div className="my-container px-5 border rounded">
      <Outlet />
    </div>
  );
};
