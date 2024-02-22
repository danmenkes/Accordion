import { useCallback, useMemo } from "react";

export const useStorage = () => {
  const setValue = useCallback((key: string, value: string) => {
    localStorage.setItem(key, value);
  }, []);

  const getValue = useCallback((key: string) => {
    return localStorage.getItem(key);
  }, []);

  return useMemo(
    () => ({
      setValue,
      getValue,
    }),
    [setValue, getValue],
  );
};
