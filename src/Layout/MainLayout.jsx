// import React from "react";
import { NavBar } from "../Components/NavBar";
import { TopBar } from "../Components/TopBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

export const MainLayout = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
};
