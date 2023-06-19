import React, { useState } from "react";
import MainHeader from "./mainHeader/MainHeader";
import StaticEditor from "../staticEditor/StaticEditor";
import "./Main.style.css";

const Main = () => {
  const [inputVal, setInputVal] = useState("");
  return (
    <main className="main">
      <MainHeader inputVal={inputVal} />
      <StaticEditor inputVal={inputVal} setInputVal={setInputVal} />
    </main>
  );
};

export default Main;
