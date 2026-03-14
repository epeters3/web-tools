import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#818cf8",
      light: "#a5b4fc",
      dark: "#6366f1",
    },
    secondary: {
      main: "#34d399",
      light: "#6ee7b7",
      dark: "#10b981",
    },
    background: {
      default: "#0d0d1a",
      paper: "#13132b",
    },
    text: {
      primary: "#f1f5f9",
      secondary: "#94a3b8",
    },
    divider: "rgba(129, 140, 248, 0.12)",
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(99, 102, 241, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(52, 211, 153, 0.04) 0%, transparent 50%), #0d0d1a",
          minHeight: "100vh",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(135deg, rgba(19,19,43,0.98) 0%, rgba(15,15,33,0.98) 100%)",
          borderBottom: "1px solid rgba(129, 140, 248, 0.18)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
          backdropFilter: "blur(12px)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          letterSpacing: "0.01em",
          borderRadius: 8,
          transition: "all 0.2s ease",
        },
        outlined: {
          borderColor: "rgba(129, 140, 248, 0.4)",
          "&:hover": {
            borderColor: "#818cf8",
            backgroundColor: "rgba(129, 140, 248, 0.1)",
            boxShadow: "0 0 12px rgba(129, 140, 248, 0.2)",
          },
        },
        contained: {
          background: "linear-gradient(135deg, #6366f1, #818cf8)",
          boxShadow: "0 4px 14px rgba(99, 102, 241, 0.4)",
          "&:hover": {
            background: "linear-gradient(135deg, #4f46e5, #6366f1)",
            boxShadow: "0 6px 20px rgba(99, 102, 241, 0.5)",
          },
        },
        text: {
          "&:hover": {
            backgroundColor: "rgba(129, 140, 248, 0.08)",
          },
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          "& .MuiButton-root": {
            borderRadius: 0,
          },
          "& .MuiButton-root:first-of-type": {
            borderRadius: "8px 0 0 8px",
          },
          "& .MuiButton-root:last-of-type": {
            borderRadius: "0 8px 8px 0",
          },
          "& .MuiButton-root:only-child": {
            borderRadius: "8px",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          background: "rgba(19, 19, 43, 0.9)",
          border: "1px solid rgba(129, 140, 248, 0.12)",
          borderRadius: 16,
          transition: "all 0.25s ease",
          "&:hover": {
            border: "1px solid rgba(129, 140, 248, 0.45)",
            boxShadow:
              "0 8px 40px rgba(99, 102, 241, 0.2), 0 2px 8px rgba(0,0,0,0.4)",
            transform: "translateY(-3px)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          background: "#13132b",
          border: "1px solid rgba(129, 140, 248, 0.1)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 10,
            backgroundColor: "rgba(13, 13, 26, 0.6)",
            transition: "all 0.2s ease",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(129, 140, 248, 0.5)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#818cf8",
              borderWidth: "1.5px",
            },
            "&.Mui-focused": {
              boxShadow: "0 0 0 3px rgba(129, 140, 248, 0.12)",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#818cf8",
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: "rgba(19, 19, 43, 0.9)",
          border: "1px solid rgba(129, 140, 248, 0.12)",
          borderRadius: "12px !important",
          "&:before": {
            display: "none",
          },
          "&.Mui-expanded": {
            border: "1px solid rgba(129, 140, 248, 0.25)",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: "#13132b",
          borderRadius: 16,
          border: "1px solid rgba(129, 140, 248, 0.2)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(129, 140, 248, 0.1)",
          paddingBottom: 16,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          height: 8,
          backgroundColor: "rgba(129, 140, 248, 0.15)",
        },
        bar: {
          borderRadius: 6,
          background: "linear-gradient(90deg, #6366f1, #34d399)",
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: "#818cf8",
        },
        thumb: {
          boxShadow: "0 0 0 4px rgba(129, 140, 248, 0.2)",
          "&:hover": {
            boxShadow: "0 0 0 6px rgba(129, 140, 248, 0.3)",
          },
        },
        track: {
          background: "linear-gradient(90deg, #6366f1, #818cf8)",
          border: "none",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "rgba(129, 140, 248, 0.12)",
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          gap: 8,
        },
      },
    },
  },
});
