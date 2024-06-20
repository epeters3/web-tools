import * as React from "react";
import { ExpandMore } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import dayjs from "dayjs";

export type TimeAction = "Pause" | "Resume" | "Start" | "Edit";

type BaseEvent = {
  /**
   * Milliseconds since unix epoch of when the event occurred.
   */
  timestamp: number;
}

type PauseEvent = BaseEvent & {
  action: "Pause"
}

type ResumeEvent = BaseEvent & {
  action: "Resume"
}

type StartEvent = BaseEvent & {
  action: "Start"
}

type EditEvent = BaseEvent & {
  action: "Edit"
  /**
   * Duration of the time adjustment that was made, in milliseconds.
   */
  delta: number;
}

export type TimeEvent = PauseEvent | ResumeEvent | StartEvent | EditEvent;

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