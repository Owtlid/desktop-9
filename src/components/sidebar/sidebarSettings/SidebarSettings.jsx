import React from "react";
import {
  FacebookIcon,
  SettingsIcon,
  SupportIcon,
} from "../../../assets/icons/icons";
import SidebarSettingsItem from "./sidebarSettingsItem/SidebarSettingsItem";
import "./SidebarSettings.style.css";

const SidebarSettings = () => {
  const settingsData = [
    { icon: <SettingsIcon />, title: "Settings" },
    { icon: <FacebookIcon />, title: "Facebook" },
    { icon: <SupportIcon />, title: "Contact support" },
  ];

  return (
    <div className="sidebarSettingsWrapper">
      <div className="divider"></div>
      <div className="settingsItemsContainer">
        {settingsData?.map((item, i) => (
          <SidebarSettingsItem icon={item?.icon} title={item?.title} key={i} />
        ))}
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default SidebarSettings;
