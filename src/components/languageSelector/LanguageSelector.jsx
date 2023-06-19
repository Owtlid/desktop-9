import React, { useState } from "react";
import { ArrowDownIcon, UKIcon } from "../../assets/icons/icons";
import LanguageSelectorMenu from "./languageSelectorMenu/LanguageSelectorMenu";
import "./LanguageSelector.style.css";

const LanguageSelector = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="languageSelectorWrapper"
      onClick={() => setIsMenuOpen((prev) => !prev)}
      style={{ background: isMenuOpen ? "#eaeaea" : "" }}
    >
      <UKIcon />
      <p className="languageText">Language</p>
      <ArrowDownIcon
        style={{ transform: isMenuOpen ? "rotate(180deg)" : "unset" }}
      />

      <LanguageSelectorMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </div>
  );
};

export default LanguageSelector;
