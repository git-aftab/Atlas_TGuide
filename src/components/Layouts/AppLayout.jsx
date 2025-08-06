import React from "react";
import Footer from "../UI/Footer";
import Header from "../UI/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
