import { AppBar, TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function layout() {
  return (
    <>
      {/* header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" sx={{ ml: 10 }}>
            PDCA-APP
          </Typography>
          <Typography variant="h5" sx={{ ml: 15 }}>
            TODOリスト
          </Typography>
          <Typography variant="h5" sx={{ ml: 15 }}>
            達成率（仮）
          </Typography>
        </Toolbar>
      </AppBar>
      {/* main目標・現状入力欄 */}
      <Box sx={{ mt: 10 }}>
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
      </Box>
    </>
  );
}

export default layout;
