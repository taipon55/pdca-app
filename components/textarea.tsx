import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";

export default function MultilineTextFields() {
  const [value, setValue] = React.useState("Controlled");
  const [value2, setValue2] = React.useState("Controlled");
  const [value3, setValue3] = React.useState("Controlled");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

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
            label="Multiline"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={value2}
            onChange={handleChange}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={value3}
            onChange={handleChange}
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
