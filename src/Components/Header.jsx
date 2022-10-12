import React from "react";
import Menu from "./Menu";

export default function Header() {
  return (
    <header>
      <div className="title-bar">
        <h1>Title</h1>
      </div>
      <div className="menu-bar">
        <Menu />
      </div>
    </header>
  );
}
