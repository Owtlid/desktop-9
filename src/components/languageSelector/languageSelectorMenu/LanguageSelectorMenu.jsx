import React, { useEffect, useRef } from "react";
import { UKIcon } from "../../../assets/icons/icons";
import "./LanguageSelectorMenu.style.css";

const LanguageSelectorMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, isMenuOpen]);

  return (
    <div
      className="menuWrapper"
      style={{ display: isMenuOpen ? "flex" : "none" }}
      ref={menuRef}
    >
      <div className="menuItem">
        <UKIcon />
        Language
      </div>
      <div className="menuItem">
        <UKIcon />
        Language
      </div>
      <div className="menuItem">
        <UKIcon />
        Language
      </div>
    </div>
  );
};

export default LanguageSelectorMenu;
