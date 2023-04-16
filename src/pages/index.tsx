import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CommonHead, PageLayout } from "../components/PageLayout";
import { List, ListItem } from "@mui/material";

const links = [
  { path: "/character-counter", name: "Character Counter" },
  { path: "/time-tracker", name: "Time Tracker" },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageLayout heading="Web Tools">
      <List>
        {links.map(({ path, name }) => (
          <ListItem>
            <Link to={path}>{name}</Link>
          </ListItem>
        ))}
      </List>
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <CommonHead title="Web Tools" />;
