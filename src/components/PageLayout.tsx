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
import { QueryParamProvider } from "use-query-params";
import { ReachAdapter } from "use-query-params/adapters/reach";

const Main = styled("main")(({ theme }) => ({ padding: theme.spacing(2) }));

const AppBarGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const PageLayout = ({
  children,
  heading,
}: {
  children: ReactNode;
  heading?: string;
}) => (
  <QueryParamProvider adapter={ReachAdapter}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <AppBarGroup>
            <Link to="/">
              <IconButton>
                <Home />
              </IconButton>
            </Link>
            <Typography variant="h5">Web Tools</Typography>
          </AppBarGroup>
          <AppBarGroup sx={{ marginLeft: "auto" }}>
            <Link to="https://github.com/epeters3/web-tools" target="_blank">
              <IconButton>
                <GitHub />
              </IconButton>
            </Link>
          </AppBarGroup>
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
          {heading ? (
            <Typography variant="h2" mb={2}>
              {heading}
            </Typography>
          ) : null}
          {children}
        </Main>
      </div>
    </ThemeProvider>
  </QueryParamProvider>
);

export const CommonHead = ({ title }: { title: string }) => (
  <>
    <title>{title}</title>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
  </>
);
