import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "./header";
import Textarea from "./textarea";

function layout() {
  return (
    <>
      {/* header */}
      <Header />
      {/* main目標・現状入力欄 */}
      <Typography variant="h5" sx={{ mt: 10, ml: 10 }}>
        🌟目標と現状を入力してください。
      </Typography>
      <Box sx={{ mt: 5 }}>
        <TextField
          id="standard-basic"
          label="目標"
          variant="standard"
          sx={{ ml: 10 }}
        />
        <TextField
          id="standard-basic"
          label="現状"
          variant="standard"
          sx={{ ml: 10 }}
        />
        <Button variant="contained" sx={{ mt: 1, ml: 5 }}>
          追加
        </Button>
      </Box>
      <Typography variant="h5" sx={{ mt: 10, ml: 10 }}>
        🌟目標と現状のギャップを埋めための課題を３つ入力してください。
      </Typography>
      <Box sx={{ mt: 10 }}>
        <TextField
          id="standard-basic"
          label="課題１"
          variant="standard"
          sx={{ ml: 10 }}
        />
        <TextField
          id="standard-basic"
          label="課題２"
          variant="standard"
          sx={{ ml: 10 }}
        />
        <TextField
          id="standard-basic"
          label="課題３"
          variant="standard"
          sx={{ ml: 10 }}
        />
        <Button variant="contained" sx={{ mt: 1, ml: 5 }}>
          追加
        </Button>
      </Box>
      <Typography variant="h5" sx={{ mt: 10, ml: 10 }}>
        🌟課題を数値化してKPIを設定してください。（各課題１つずつ）
      </Typography>
      <Typography variant="h6" gutterBottom component="div" sx={{ ml: 10 }}>
        KPIは結果目標のこと
      </Typography>
      <Textarea />
    </>
  );
}

export default layout;
