import React from "react";
import rightTop from "../../../../assets/images/top-right-rounded.png";
import rightBottom from "../../../../assets/images/bottom-right-rounded.png";
import "./SidebarNavigationItem.style.css";

const SidebarNavigationItem = ({
  icon = "icon",
  title = "title",
  onClick = () => {},
  isActive,
}) => {
  return (
    <div
      className={`sidebarNavigationItem ${
        isActive ? "sidebarNavigationItem-active" : ""
      }`}
      aria-hidden
      onClick={onClick}
    >
      <div
        className={`sidebarNavigationItemIcon ${
          isActive ? "sidebarNavigationItemIcon-active" : ""
        }`}
      >
        {icon}
      </div>
      <h3
        className={`sidebarNavigationItemTitle ${
          isActive ? "sidebarNavigationItemTitle-active" : ""
        }`}
      >
        {title}
      </h3>

      {isActive && (
        <img src={rightTop} className="rightTop" width={14} height={10} />
      )}
      {isActive && (
        <img src={rightBottom} className="rightBot" width={14} height={10} />
      )}
    </div>
  );
};

export default SidebarNavigationItem;
