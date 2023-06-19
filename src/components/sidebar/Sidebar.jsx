import React from "react";
import SidebarNavigation from "./sidebarNavigation/SidebarNavigation";
import SidebarSettings from "./sidebarSettings/SidebarSettings";
import { MoonIcon, SunIcon } from "../../assets/icons/icons";
import "./Sidebar.style.css";

const Sidebar = () => {
  return (
    <article className="sidebarWrapper">
      <SidebarNavigation />
      <div className="settingsContainer">
        <SidebarSettings />
      </div>
      <div className="themeWrapper">
        <SunIcon />
        <MoonIcon />
      </div>
    </article>
  );
};

export default Sidebar;
