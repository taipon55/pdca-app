import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "./header";
import Kgi from "./kgi";
import Task from "./task";
import Textarea from "./kpi";

function Layout() {
  return (
    <>
      {/* header */}
      <Header />
      {/* kgi目標・現状入力欄 */}
      <Kgi />
      {/* 課題入力欄 */}
      <Task />
      <Typography variant="h5" sx={{ mt: 10, ml: 10 }}>
        🌟課題を数値化してKPIを設定してください。（各課題1つずつ）
      </Typography>
      <Typography variant="h6" gutterBottom component="div" sx={{ ml: 10 }}>
        KPIは結果目標のこと
      </Typography>
      <Textarea />
    </>
  );
}

export default Layout;
