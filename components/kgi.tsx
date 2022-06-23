import { Typography, Box, TextField, Button } from "@mui/material";
import React from "react";

function kgi() {
  return (
    <>
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
    </>
  );
}

export default kgi;
