import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { CommonHead, PageLayout } from "../components/PageLayout";
import { Alert, Button, TextField } from "@mui/material";
import { ColumnBox } from "../components/ColumnBox";

const JSONFormatterPage: React.FC<PageProps> = () => {
  const [text, setText] = React.useState("");
  const [error, setError] = React.useState("");
  return (
    <PageLayout heading="JSON Formatter">
      <ColumnBox gap={2}>
        <TextField
          fullWidth
          multiline
          minRows={5}
          maxRows={20}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          variant="outlined"
          onClick={() => {
            try {
              setText(JSON.stringify(JSON.parse(text), null, 4));
              setError("");
            } catch (err) {
              if (err instanceof Error) {
                setError(err.message);
              } else {
                throw err;
              }
            }
          }}
        >
          Format
        </Button>
        {error ? (
          <Alert color="error">{error}</Alert>
        ) : (
          <Alert color="success">Valid JSON</Alert>
        )}
      </ColumnBox>
    </PageLayout>
  );
};

export default JSONFormatterPage;

export const Head: HeadFC = () => <CommonHead title="JSON Formatter" />;
