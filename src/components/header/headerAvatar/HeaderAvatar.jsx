import React from "react";
import "./HeaderAvatar.style.css";
import image from "../../../assets/images/avatar.png";
import { ArrowDownIcon } from "../../../assets/icons/icons";

const HeaderAvatar = () => {
  return (
    <div className="headerAvatarWrapper">
      <img className="headerAvatar" alt="avatar" src={image} />
      <ArrowDownIcon />
    </div>
  );
};

export default HeaderAvatar;
