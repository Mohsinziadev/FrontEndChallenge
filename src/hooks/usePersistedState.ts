import { useState, useEffect } from "react";

// Define a generic type for the hook
function usePersistedState<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  // Retrieve the stored value from localStorage or use the initial value
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : initialValue;
  });

  // Effect to update localStorage when the storedValue changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  // Return the stored value and the function to update it
  return [storedValue, setStoredValue];
}

export default usePersistedState;

export const PERSISTED_STATE_KEYS = {
  ARTICLE_CATEGORY: "ARTICLE_CATEGORY",
};
