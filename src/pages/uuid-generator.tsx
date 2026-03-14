import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import type { HeadFC, PageProps } from "gatsby";
import { CommonHead, PageLayout } from "../components/PageLayout";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { ColumnBox } from "../components/ColumnBox";
import { Check, ContentCopy, RestartAlt } from "@mui/icons-material";
import { copyTextToClipboard } from "../utils";

const UUIDGeneratorPage: React.FC<PageProps> = () => {
  const [uuid, setUuid] = React.useState("");
  const [isCopied, setIsCopied] = React.useState(false);

  return (
    <PageLayout heading="UUID Generator">
      <ColumnBox gap={3}>
        {uuid ? (
          <Box
            sx={{
              background: "rgba(13, 13, 26, 0.8)",
              border: "1px solid rgba(129, 140, 248, 0.25)",
              borderRadius: 2,
              px: 3,
              py: 2.5,
              width: "100%",
              maxWidth: 520,
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", display: "block", mb: 1 }}
            >
              Your unique v4 UUID:
            </Typography>
            <Typography
              component="code"
              sx={{
                fontFamily: '"Roboto Mono", "Courier New", monospace',
                fontSize: "1rem",
                color: "#a5b4fc",
                letterSpacing: "0.05em",
                wordBreak: "break-all",
              }}
            >
              {uuid}
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              background: "rgba(13, 13, 26, 0.4)",
              border: "1px dashed rgba(129, 140, 248, 0.2)",
              borderRadius: 2,
              px: 3,
              py: 3,
              width: "100%",
              maxWidth: 520,
              textAlign: "center",
            }}
          >
            <Typography sx={{ color: "text.secondary" }}>
              Click Generate to create a UUID
            </Typography>
          </Box>
        )}
        <ButtonGroup>
          <Button
            startIcon={uuid ? <RestartAlt /> : null}
            variant="outlined"
            onClick={() => setUuid(uuidv4())}
          >
            {uuid ? "Regenerate" : "Generate"}
          </Button>
          {uuid ? (
            <Button
              startIcon={isCopied ? <Check /> : <ContentCopy />}
              color={isCopied ? "success" : "primary"}
              variant="outlined"
              onClick={async () => {
                await copyTextToClipboard(uuid);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 1000);
              }}
            >
              {isCopied ? "Copied!" : "Copy"}
            </Button>
          ) : null}
        </ButtonGroup>
      </ColumnBox>
    </PageLayout>
  );
};

export default UUIDGeneratorPage;

export const Head: HeadFC = () => <CommonHead title="UUID Generator" />;
