import { Box, Button, TextField, Alert } from "@mui/material";
import React from "react";

const MIN_MS = 1000 * 60;

export const TimeEditor = ({ onSave }: { onSave: (ms: number) => void }) => {
  const [hours, setHours] = React.useState("");
  const [minutes, setMinutes] = React.useState("");
  const [error, setError] = React.useState("");
  const handleSubmit = () => {
    const h = parseInt(hours || "0", 10);
    const m = parseInt(minutes || "0", 10);
    const totalMinutes = h * 60 + m;
    if (isNaN(totalMinutes)) {
      setError("One or more values is not a valid number");
    } else {
      onSave(totalMinutes * MIN_MS);
      setError("");
    }
  };
  return (
    <Box display="flex" flexDirection="column" gap={2} alignItems="center">
      <Box display="flex" gap={2}>
        <TextField
          sx={{ width: "8rem" }}
          label="Hours"
          value={hours}
          type="number"
          error={!!error}
          onChange={(e) => setHours(e.target.value)}
        />
        <TextField
          sx={{ width: "8rem" }}
          label="Minutes"
          value={minutes}
          type="number"
          error={!!error}
          onChange={(e) => setMinutes(e.target.value)}
        />
        <Button variant="outlined" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
      {error ? <Alert severity="error">{error}</Alert> : error}
    </Box>
  );
};
