import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "./header";
import Kgi from "./kgi";
import Task from "./task";
import Kpi from "./kpi";

function Layout() {
  return (
    <>
      {/* header */}
      <Header />
      {/* kgi目標・現状入力欄 */}
      <Kgi />
      {/* 課題入力欄 */}
      <Task />

      <Kpi />
    </>
  );
}

export default Layout;
