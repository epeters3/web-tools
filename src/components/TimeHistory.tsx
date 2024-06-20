import * as React from "react";
import { ExpandMore } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import dayjs from "dayjs";

export type TimeAction = "Pause" | "Resume" | "Start" | "Edit";

export type TimeEvent = {
  /**
   * Millis since unix epoch.
   */
  timestamp: number;
  action: TimeAction;
};

export const TimeHistory = ({ history }: { history: TimeEvent[] }) => {
  return history.length > 0 ? (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="h6">History</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {history.map((event) => (
          <Box
            sx={{
              display: "flex",
              gap: 2,
              marginBottom: (theme) => theme.spacing(1),
              justifyContent: "space-between",
            }}
          >
            <Box>{event.action}</Box>
            <Box>{dayjs(event.timestamp).format("LTS")}</Box>
          </Box>
        ))}
      </AccordionDetails>
    </Accordion>
  ) : null

}