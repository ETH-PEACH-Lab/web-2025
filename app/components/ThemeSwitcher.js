"use client";

import { useState } from "react";
import { Button } from "@geist-ui/core";
import { Moon, Sun } from "@geist-ui/icons";

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Button auto icon={darkMode ? <Sun /> : <Moon />} onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
}
