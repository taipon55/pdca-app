import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";

export default function MultilineTextFields() {
  return (
    <>
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
