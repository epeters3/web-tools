import { CircularProgress } from "@mui/material";
import { PageLayout } from "./PageLayout";
import React from "react";

export const LoadingPage = () => (
  <PageLayout>
    <CircularProgress />
  </PageLayout>
);
