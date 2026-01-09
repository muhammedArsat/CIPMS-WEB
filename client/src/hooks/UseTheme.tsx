import React, { Context, useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

const UseTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme should be provided");
  }
  return context;
};

export default UseTheme;
