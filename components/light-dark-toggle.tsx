"use client";

import { TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import React, { useState } from "react";
import { Tooltip, TooltipContent } from "./ui/tooltip";
import { MoonIcon, SunIcon } from "lucide-react";

interface Props {
  className?: string;
}

function LightDarkToggle(props: Props) {
  const { className } = props;
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={className}
          onClick={() => {
            setIsDarkMode((prevValue) => !prevValue);
            document.body.classList.toggle('dark')
          }}
        >
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </TooltipTrigger>
        <TooltipContent>
          {isDarkMode ? "dark mode" : "enable mode"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default LightDarkToggle;
