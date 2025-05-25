import { useState, useEffect, useCallback } from "react";

/**
 * A drop-in replacement for React’s `useState` that
 * transparently syncs the state with `window.localStorage`.
 *
 * @param key          Storage key
 * @param initialValue Initial value or initializer function
 */
export function useLocalStorageState<T>(
  key: string,
  initialValue: T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>] {
  // Initialise from localStorage (or fallback to initialValue)
  const [state, _setState] = useState<T>(() => {
    if (typeof window === "undefined") {
      return typeof initialValue === "function"
        ? (initialValue as () => T)()
        : initialValue;
    }
    try {
      const stored = window.localStorage.getItem(key);
      if (stored !== null) return JSON.parse(stored) as T;
    } catch {
      /* ignore corrupt JSON */
    }
    return typeof initialValue === "function"
      ? (initialValue as () => T)()
      : initialValue;
  });

  // Write helper that mirrors React.setState semantics
  const setState: React.Dispatch<React.SetStateAction<T>> = useCallback(
    (valueOrUpdater) => {
      _setState((prev) => {
        const value =
          typeof valueOrUpdater === "function"
            ? (valueOrUpdater as (prev: T) => T)(prev)
            : valueOrUpdater;
        try {
          window.localStorage.setItem(key, JSON.stringify(value));
        } catch {
          /* quota exceeded or serialisation error */
        }
        return value;
      });
    },
    [key]
  );

  // Keep tabs/windows in sync
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          _setState(JSON.parse(e.newValue) as T);
        } catch {
          /* ignore corrupt JSON */
        }
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [key]);

  // Update storage if the key prop itself changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch {
      /* ignore errors */
    }
  }, [key, state]);

  return [state, setState];
}
