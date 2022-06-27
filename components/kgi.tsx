import { Typography, Box, TextField, Button, Grid } from "@mui/material";
import React, { useState } from "react";

function Kgi() {
  const [targetkgi, setTargetkgi] = useState("");
  const [nowkgi, setNowkgi] = useState("");
  const [addTarget, setAddtarget] = useState("");
  const [addNow, setAddnow] = useState("");

  const onClickAddText = () => {
    setAddtarget(targetkgi);
    setAddnow(nowkgi);
    setTargetkgi("");
    setNowkgi("");
  };

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
          type="text"
          value={targetkgi}
          onChange={(event) => setTargetkgi(event.target.value)}
        />
        <TextField
          id="standard-basic"
          label="現状"
          variant="standard"
          sx={{ ml: 10 }}
          type="text"
          value={nowkgi}
          onChange={(event) => setNowkgi(event.target.value)}
        />
        <Button
          variant="contained"
          sx={{ mt: 1, ml: 5 }}
          onClick={onClickAddText}
        >
          追加
        </Button>
      </Box>

      <Grid container spacing={1}>
        <Grid item xs={5}>
          <Typography variant="h5" sx={{ mt: 10, ml: 10 }}>
            目標: {addTarget}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5" sx={{ mt: 10, ml: 10 }}>
            現状: {addNow}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Kgi;
