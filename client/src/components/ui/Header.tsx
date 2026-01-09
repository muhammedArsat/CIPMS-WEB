import React from "react";
import Logo from "../../assets/Logo";
import { Bell, Moon, Sun, User } from "lucide-react";
import useTheme from "../../hooks/UseTheme";
const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="border-b fixed w-full flex justify-between items-center border-border-light dark:border-border-dark p-1 bg-white dark:bg-dark">
      <div className="relative left-6">
        <Logo />
      </div>
      <div className="flex justify-center items-center gap-3 cursor-pointer">
        {theme === "light" ? (
          <Moon size={23} strokeWidth={1} onClick={toggleTheme} />
        ) : (
          <Sun size={23} strokeWidth={1} onClick={toggleTheme} />
        )}
        <Bell size={23} strokeWidth={1} />
        <User size={23} strokeWidth={1} />
      </div>
    </div>
  );
};

export default Header;
