import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <Fragment>
      <Header></Header>
      <Outlet></Outlet>
      <Sidebar></Sidebar>
    </Fragment>
  );
};

export default Main;
