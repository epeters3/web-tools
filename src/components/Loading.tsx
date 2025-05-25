import { CircularProgress } from "@mui/material";
import React from "react";

export const LoadingPage = () => (
  <CircularProgress sx={{ marginTop: (theme) => theme.spacing(3) }} />
);
