import React from "react";
import "./SidebarSettingsItem.style.css";

const SidebarSettingsItem = ({ icon = "icon", title = "title" }) => {
  return (
    <div className="itemWrapper">
      <div className="itemIconWrapper">{icon}</div>
      <h3 className="itemTitle">{title}</h3>
    </div>
  );
};

export default SidebarSettingsItem;
