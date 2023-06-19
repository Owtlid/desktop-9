import React, { useState } from "react";
import {
  CheckmarkTextIcon,
  STTIcon,
  TTSIcon,
} from "../../../assets/icons/icons";
import SidebarNavigationItem from "./sidebarNavigationItem/SidebarNavigationItem";
import "./SidebarNavigation.style.css";

const SidebarNavigation = () => {
  const [activeTabId, setActiveTabId] = useState(10);

  const navbarData = [
    {
      icon: <CheckmarkTextIcon />,
      title: "SpellChecker",
      id: 10,
    },
    { icon: <TTSIcon />, title: "Text to speech", id: 11 },
    { icon: <STTIcon />, title: "Speech to text", id: 12 },
  ];

  return (
    <div className="sidebarNavigationWrapper">
      <nav className="sidebarNav">
        {navbarData?.map((item, i) => (
          <SidebarNavigationItem
            key={i}
            icon={item?.icon}
            title={item?.title}
            onClick={() => setActiveTabId(item?.id)}
            isActive={item?.id === activeTabId}
          />
        ))}
      </nav>
    </div>
  );
};

export default SidebarNavigation;
