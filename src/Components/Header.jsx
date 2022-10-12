import React from "react";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="header">
      <div className="content-frame">
        <div className="header__title-bar">
          <h1 className="header__title">Title</h1>
        </div>
        <div className="header__menu-wrapper">
          <Menu />
        </div>
      </div>
    </header>
  );
}
