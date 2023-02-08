// Extenal content
import React, { ReactElement } from "react";

// Icons
import { MusicalNoteIcon } from "@heroicons/react/24/solid";

// Components
import ToggleIcon from "../ToggleIcon";

const Header = ():ReactElement => {
  return (
    <header className="h-20 max-w-[1200px] mx-auto bg-cyber-300 dark:bg-dark-200 my-4 p-4 flex justify-between items-center rounded-lg shadow-md">
      <MusicalNoteIcon className="w-12 fill-gray-200 dark:fill-cyber-500"/>
      <ToggleIcon />
    </header>
  );
};

export default Header;