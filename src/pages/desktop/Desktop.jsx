import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Main from "../../components/main/Main";
import "./Desktop.style.css";

const Desktop = () => {
  return (
    <div className="desktop">
      <Header />
      <div className="sidebarMainWrapper">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default Desktop;
