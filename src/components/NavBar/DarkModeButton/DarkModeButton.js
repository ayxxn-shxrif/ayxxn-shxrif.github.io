import React, { useContext } from "react";
import { DarkModeContext } from "../../../contexts/DarkModeContext";

import "./DarkModeButton.scoped.scss";

const DarkModeButton = () => {
  const { theme, switchTheme } = useContext(DarkModeContext);
  

  return (
    <div
      className="nav-logo"
      onClick={switchTheme}
      data-theme={theme}
      title="Click me!"
    >
      {/* referencing logo by import does not work for dynamic styling */}
      {/* <img src={logo} alt="Ghost looking logo" /> */}
      {/* <object data={logo} type="image/svg+xml">Ghost looking logo</object> */}

      {/* svg of logo imported directly as code */}


      <div className="sky">
        <div className="sun">
          <div className="outer" />
          <div className="inner" />
        </div>
        <div className="moon" />
        <div className="cloud cloud1">
          <div className="rect" />
          <div className="circle circle-lg" />
          <div className="circle circle-sm" />
        </div>
        <div className="cloud cloud2">
          <div className="rect" />
          <div className="circle circle-lg" />
          <div className="circle circle-sm" />
        </div>
      </div>
    </div>
  );
};

export default DarkModeButton;
