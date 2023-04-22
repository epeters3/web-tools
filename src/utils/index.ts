import dayjs from "dayjs";

export const formatDuration = (duration: number) =>
  `${duration < 0 ? "- " : ""}${dayjs
    .duration(Math.abs(duration))
    .format("HH:mm:ss")}`;
