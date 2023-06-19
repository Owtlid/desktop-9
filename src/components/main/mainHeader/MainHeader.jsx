import React from "react";
import { toast } from "react-toastify";
import {
  CheckmarkIcon,
  CopyIcon,
  DeleteIcon,
} from "../../../assets/icons/icons";
import LanguageSelector from "../../languageSelector/LanguageSelector";
import engramService from "../../../services/engramServices";
import "./MainHeader.style.css";

const MainHeader = ({ inputVal }) => {
  return (
    <div className="mainHeader">
      <button
        className="checkButton"
        onClick={() => {
          if (!!inputVal?.length && localStorage.getItem("accessToken")) {
            engramService.sendData(inputVal);
          } else {
            toast.info("Input is empty!");
          }
        }}
      >
        <CheckmarkIcon />
        Check
      </button>

      <div className="mainHeaderActions">
        <button className="copyButton">
          <CopyIcon />
          Copy
        </button>
        <button className="deleteButton">
          <DeleteIcon />
          Delete
        </button>
        <div className="mainHeaderDivider"></div>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default MainHeader;
