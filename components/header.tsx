import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

function Header() {
  return (
    <>
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
    </>
  );
}

export default Header;
