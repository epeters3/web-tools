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

const Main = styled("main")(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: "900px",
  width: "100%",
}));

const AppBarGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const GradientTitle = styled(Typography)({
  background: "linear-gradient(135deg, #a5b4fc 0%, #818cf8 50%, #6ee7b7 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  fontWeight: 700,
  letterSpacing: "0.02em",
});

const PageHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  letterSpacing: "-0.02em",
  background: "linear-gradient(135deg, #f1f5f9 0%, #a5b4fc 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  marginBottom: theme.spacing(3),
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
              <IconButton size="small">
                <Home sx={{ color: "rgba(165, 180, 252, 0.85)" }} />
              </IconButton>
            </Link>
            <GradientTitle variant="h5">Web Tools</GradientTitle>
          </AppBarGroup>
          <AppBarGroup sx={{ marginLeft: "auto" }}>
            <Link to="https://github.com/epeters3/web-tools" target="_blank">
              <IconButton size="small">
                <GitHub sx={{ color: "rgba(165, 180, 252, 0.85)" }} />
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
            <PageHeading variant="h2">{heading}</PageHeading>
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
