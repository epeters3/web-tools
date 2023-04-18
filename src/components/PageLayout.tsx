import React from "react";
import { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  AppBar,
  Box,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { theme } from "../utils/theme";
import { GitHub, Home } from "@mui/icons-material";
import { Link } from "gatsby";

const Main = styled("main")(({ theme }) => ({ padding: theme.spacing(2) }));

export const PageLayout = ({
  children,
  heading,
}: {
  children: ReactNode;
  heading?: string;
}) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar position="static">
      <Toolbar>
        <Link to="/">
          <IconButton>
            <Home />
          </IconButton>
        </Link>
        <Typography variant="h5">Web Tools</Typography>
        <Box sx={{ marginLeft: "auto" }}>
          <Link to="https://github.com/epeters3/web-tools">
            <IconButton>
              <GitHub />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Main>
        {heading ? <Typography variant="h2">{heading}</Typography> : null}
        {children}
      </Main>
    </div>
  </ThemeProvider>
);

export const CommonHead = ({ title }: { title: string }) => (
  <>
    <title>{title}</title>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
  </>
);
