import React, { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      console.log(e);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      if (!value) {
        localStorage.removeItem(key);
        setStoredValue("Not Set");
        return;
      }
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (e) {
      console.log(e);
    }
  };
  return [storedValue, setValue];
};
