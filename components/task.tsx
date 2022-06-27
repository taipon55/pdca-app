import { Typography, Box, TextField, Button, Grid } from "@mui/material";
import React, { useState } from "react";

function Task() {
  const [addmission, setAddmission] = useState("");
  const [addmission2, setAddmission2] = useState("");
  const [addmission3, setAddmission3] = useState("");

  const [mission, setMission] = useState("");
  const [mission2, setMission2] = useState("");
  const [mission3, setMission3] = useState("");

  const onClickHandler = () => {
    setAddmission(mission);
    setAddmission2(mission2);
    setAddmission3(mission3);
    setMission("");
    setMission2("");
    setMission3("");
  };

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
          value={mission}
          onChange={(event) => setMission(event.target.value)}
        />
        <TextField
          id="standard-basic"
          label="課題２"
          variant="standard"
          sx={{ ml: 10 }}
          value={mission2}
          onChange={(event) => setMission2(event.target.value)}
        />
        <TextField
          id="standard-basic"
          label="課題３"
          variant="standard"
          sx={{ ml: 10 }}
          value={mission3}
          onChange={(event) => setMission3(event.target.value)}
        />
        <Button
          variant="contained"
          sx={{ mt: 1, ml: 5 }}
          onClick={onClickHandler}
        >
          追加
        </Button>
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Typography variant="h5" sx={{ mt: 10, ml: 10 }}>
            課題1: {addmission}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" sx={{ mt: 10, ml: 10 }}>
            課題2: {addmission2}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" sx={{ mt: 10, ml: 10 }}>
            課題3: {addmission3}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Task;
