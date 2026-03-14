import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { CommonHead, PageLayout } from "../components/PageLayout";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { ColumnBox } from "../components/ColumnBox";
import { Check, DataObject } from "@mui/icons-material";

const JSONFormatterPage: React.FC<PageProps> = () => {
  const [text, setText] = React.useState("");
  const [error, setError] = React.useState("");
  const [isFormatted, setIsFormatted] = React.useState(false);

  const handleFormat = () => {
    try {
      setText(JSON.stringify(JSON.parse(text), null, 4));
      setError("");
      setIsFormatted(true);
      setTimeout(() => setIsFormatted(false), 1500);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        throw err;
      }
    }
  };

  return (
    <PageLayout heading="JSON Formatter">
      <ColumnBox gap={2.5}>
        <TextField
          fullWidth
          multiline
          minRows={5}
          maxRows={20}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setError("");
          }}
          placeholder="Paste your JSON here…"
          sx={{
            "& .MuiInputBase-input": {
              fontFamily: '"Roboto Mono", "Courier New", monospace',
              fontSize: "0.875rem",
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="outlined"
            startIcon={isFormatted ? <Check /> : <DataObject />}
            color={isFormatted ? "success" : "primary"}
            onClick={handleFormat}
            disabled={!text}
          >
            {isFormatted ? "Formatted!" : "Format"}
          </Button>
          {text && !error && (
            <Typography variant="caption" sx={{ color: "secondary.main" }}>
              ✓ Valid JSON
            </Typography>
          )}
        </Box>
        {error ? <Alert color="error">{error}</Alert> : null}
      </ColumnBox>
    </PageLayout>
  );
};

export default JSONFormatterPage;

export const Head: HeadFC = () => <CommonHead title="JSON Formatter" />;
