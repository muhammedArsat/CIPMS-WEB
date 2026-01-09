import { LogOut, Menu } from "lucide-react";
import React, { useState } from "react";
import { NAVBAR_ITEMS } from "../../constants/Sidebar.const";
import { useLocation, useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const role = "PLACEMENT_OFFICER";
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  return (
    <div>
      <div className="lg:hidden absolute top-4 left-2">
        <Menu size={23} onClick={() => setIsOpen(!isOpen)} />
      </div>
      <nav
        className={`
    fixed top-15 left-0 z-40
    h-screen w-50
    bg-white dark:bg-dark
    transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0
    overflow-hidden
    shadow-lg
  `}
      >
        <ul className="p-4 space-y-3">
          {NAVBAR_ITEMS.filter((nav) => nav.role.includes(role)).map(
            (nav, id) => {
              return (
                <li
                  key={id}
                  className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg ${
                    pathname === nav.path
                      ? "bg-neutral-200 dark:bg-neutral-800"
                      : ""
                  }`}
                  onClick={()=>{
                    navigate(`${nav.path}`)
                  }}
                >
                  {nav.icon}
                  {nav.title}
                </li>
              );
            }
          )}
        </ul>
        <ul className="absolute bottom-13 p-4 space-y-3 w-full text-white">
          <li className="cursor-pointer flex items-center gap-3 bg-danger-light hover:bg-danger-dark-hover active:bg-danger-dark-active dark:bg-danger-dark dark:hover:bg-danger-dark-hover dark:active:bg-danger-dark-active p-2 rounded-lg w-full">
            <LogOut size={18}/>
            Logout
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
