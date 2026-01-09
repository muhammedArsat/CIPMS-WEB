import React from "react";
import Routes from "./routes";
import Logo from "./assets/Logo";
import ThemeProvider from "./providers/ThemeProvider";
const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </div>
  );
};

export default App;
