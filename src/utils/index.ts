import dayjs from "dayjs";

export const formatDuration = (duration: number) =>
  `${duration < 0 ? "- " : ""}${dayjs
    .duration(Math.abs(duration))
    .format("HH:mm:ss")}`;

/**
 * Source: https://blog.logrocket.com/implementing-copy-clipboard-react-clipboard-api/
 */
export const copyTextToClipboard = async (text: string) => {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand("copy", true, text);
  }
};
