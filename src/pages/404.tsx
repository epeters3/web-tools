import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { CommonHead, PageLayout } from "../components/PageLayout";
import { Typography } from "@mui/material";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <PageLayout heading="Page not found">
      <Typography>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        <Link to="/">Go home</Link>.
      </Typography>
    </PageLayout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <CommonHead title="Not found" />;
