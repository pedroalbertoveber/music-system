// External content
import React, { useEffect, ReactElement } from "react";

// Icons
import { MoonIcon, SunIcon} from "@heroicons/react/24/solid";

const ToggleIcon = ():ReactElement => {

  const systemPreferences = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const pageClasses = document.documentElement.classList;

  const toggleTheme = () => {
    pageClasses.toggle('dark');
  };

  useEffect(() => {
    systemPreferences && pageClasses.add('dark');
  }, []);

  return (
    <div>
      <SunIcon className="fill-gray-200 dark:fill-cyber-500 w-12 hidden dark:block cursor-pointer" onClick={toggleTheme}/>
      <MoonIcon className="fill-gray-200 dark:fill-cyber-500 w-12 dark:hidden cursor-pointer" onClick={toggleTheme}/>
    </div>
  );
};

export default ToggleIcon;