import React, { createContext, useContext } from "react";

const ColorModeContext = createContext(null);

export function ColorModeProvider({ value, children }) {
  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  const ctx = useContext(ColorModeContext);
  if (!ctx) {
    throw new Error("useColorMode debe usarse dentro de ColorModeProvider");
  }
  return ctx;
}
