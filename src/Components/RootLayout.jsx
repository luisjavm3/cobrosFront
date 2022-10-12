import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function RootLayout() {
  return (
    <Fragment>
      <Header />
      <div className="content-frame">
        <Outlet />
      </div>
    </Fragment>
  );
}
