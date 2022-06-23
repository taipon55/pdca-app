import { Typography, Box, TextField, Button } from "@mui/material";
import React from "react";

function task() {
  return (
    <>
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
    </>
  );
}

export default task;
