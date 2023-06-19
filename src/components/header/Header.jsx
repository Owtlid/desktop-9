import React from "react";
import HeaderAvatar from "./headerAvatar/HeaderAvatar";
import { ChromeIcon } from "../../assets/icons/icons";
import "./Header.style.css";

const Header = () => {
  return (
    <header className="headerWrapper">
      <div className="headerActionsWrapper">
        <button className="addToChromeButton">
          <ChromeIcon />
          <p className="chromeButtonText">Add to Chrome</p>
        </button>
        <button className="upgradeToProButton">Upgrade to pro</button>
      </div>

      <HeaderAvatar />
    </header>
  );
};

export default Header;
