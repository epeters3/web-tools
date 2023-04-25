import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import type { HeadFC, PageProps } from "gatsby";
import { CommonHead, PageLayout } from "../components/PageLayout";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { ColumnBox } from "../components/ColumnBox";
import { Check, ContentCopy, Repeat, RestartAlt } from "@mui/icons-material";
import { copyTextToClipboard } from "../utils";

const UUIDGeneratorPage: React.FC<PageProps> = () => {
  const [uuid, setUuid] = React.useState("");
  const [isCopied, setIsCopied] = React.useState(false);

  return (
    <PageLayout heading="UUID Generator">
      <ColumnBox gap={2}>
        {uuid ? (
          <>
            <Typography>Your unique v4 UUID:</Typography>
            <code>{uuid}</code>
          </>
        ) : null}
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
