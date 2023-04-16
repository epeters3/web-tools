import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { CommonHead, PageLayout } from "../components/PageLayout";
import { TextField, Typography } from "@mui/material";

const CharacterCounterPage: React.FC<PageProps> = () => {
  const [text, setText] = React.useState("");
  return (
    <PageLayout heading="Character Counter">
      <TextField
        fullWidth
        multiline
        minRows={5}
        maxRows={20}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Typography>Character count: {text.length}</Typography>
    </PageLayout>
  );
};

export default CharacterCounterPage;

export const Head: HeadFC = () => <CommonHead title="Character Counter" />;
