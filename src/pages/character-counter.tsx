import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { CommonHead, PageLayout } from "../components/PageLayout";
import { Box, TextField, Typography } from "@mui/material";
import { ColumnBox } from "../components/ColumnBox";

const CharacterCounterPage: React.FC<PageProps> = () => {
  const [text, setText] = React.useState("");
  return (
    <PageLayout heading="Character Counter">
      <ColumnBox gap={2.5}>
        <TextField
          fullWidth
          multiline
          minRows={5}
          maxRows={20}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type text here…"
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            background: "rgba(13, 13, 26, 0.7)",
            border: "1px solid rgba(129, 140, 248, 0.2)",
            borderRadius: 2,
            px: 3,
            py: 1.5,
            alignSelf: "flex-start",
          }}
        >
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Characters
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#a5b4fc",
              minWidth: 40,
              textAlign: "right",
            }}
          >
            {text.length.toLocaleString()}
          </Typography>
        </Box>
      </ColumnBox>
    </PageLayout>
  );
};

export default CharacterCounterPage;

export const Head: HeadFC = () => <CommonHead title="Character Counter" />;
