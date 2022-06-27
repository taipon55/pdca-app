import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid, Typography } from "@mui/material";

export default function MultilineTextFields() {
  return (
    <>
      <Typography variant="h5" sx={{ mt: 10, ml: 10 }}>
        🌟課題を数値化してKPIを設定してください。（各課題1つずつ）
      </Typography>
      <Typography variant="h6" gutterBottom component="div" sx={{ ml: 10 }}>
        KPIは結果目標のこと
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { ml: 10, mt: 10, width: "21ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="課題1のKPI"
            multiline
            maxRows={4}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="課題2のKPI"
            multiline
            maxRows={4}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="課題3のKPI"
            multiline
            maxRows={4}
          />
        </div>
      </Box>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Grid>
          <Button variant="contained" sx={{ mt: 5 }}>
            追加
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
