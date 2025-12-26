import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CommonHead, PageLayout } from "../components/PageLayout";
import { Card, CardContent, Grid, Typography } from "@mui/material";

const links = [
  {
    path: "/time-tracker",
    name: "Time Tracker",
    description:
      "Track time, with the ability to pause and resume, and see how much time you have left.",
  },
  {
    path: "fitness-tracker",
    name: "Fitness Tracker",
    description: "Log and visualize weight/rep-related exercises",
  },
  {
    path: "/json-formatter",
    name: "JSON Formatter",
    description: "Format JSON, making it easier to read, and validate it.",
  },
  {
    path: "/uuid-generator",
    name: "UUID Generator",
    description: "Quickly generate a copy a v4 UUID.",
  },
  {
    path: "/character-counter",
    name: "Character Counter",
    description: "Count how how many characters are in a body of text.",
  },
  {
    path: "/speed-reader",
    name: "Speed Reader",
    description: "Practice rapid reading with controlled pacing.",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageLayout heading="Web Tools">
      <Grid container spacing={2}>
        {links.map(({ path, name, description }) => (
          <Grid item xs={12} md={6}>
            <Link to={path} style={{ textDecoration: "none" }}>
              <Card sx={{ padding: (theme) => theme.spacing(2) }}>
                <CardContent>
                  <Typography variant="h4">{name}</Typography>
                  <Typography>{description}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <CommonHead title="Web Tools" />;
