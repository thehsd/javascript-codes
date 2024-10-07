import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
