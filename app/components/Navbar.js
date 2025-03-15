"use client"; // ✅ Mark as a Client Component

import React, { useCallback, useEffect, useMemo, useState } from 'react'

import Link from "next/link";
import { Button, Spacer, useTheme, Tabs, Image } from "@geist-ui/core";
import { useScale, Metadata } from "@geist-ui/core";
import { Moon, Sun } from "@geist-ui/icons";
import { useRouter, usePathname } from "next/navigation";
import { useThemeSwitcher } from "../components/Providers"; // ✅ Import ThemeContext Hook

//Convert HEX to RGBA manually
const addColorAlpha = (hex, alpha) => {
  hex = hex.replace("#", "");
  let r, g, b;

  if (hex.length === 3) {
    // Convert shorthand hex (#fff → #ffffff)
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};


export default function Navbar() {
  const { themeType, setThemeType } = useThemeSwitcher(); // ✅ Use theme state from context

  const [isLocked, setIsLocked] = useState(false)
  const { tabbar: currentUrlTabValue, locale } = useScale()
  const theme = useTheme()
  const router = useRouter();
  const pathname = usePathname(); // ✅ Get current route

  const currentTab = pathname === "/" ? "" : pathname.split("/")[1];

  const handleTabChange = (tab) => {
    router.push(`/${tab}`);
  };

  return (
    <>
      <div className="menu-wrapper">
        <nav style={navStyle} className="menu">
          {/* Logo Section */}
          <div className="content">

            <div className="logo">
              <Link href="/" style={logoStyle}><Image
                    src={themeType=="custom-dark"?`/assets/logo-dark.png`:`/assets/logo-light.png`}
                    height="30px"
                    alt="PEACH Lab Logo"
                    draggable={false}
                    title="Logo"
                  /></Link>
            </div>

            {/* Navigation Links */}
            <div style={linksContainer} className="tabs">
              <Tabs
                value={currentTab}
                leftSpace={0}
                activeClassName="current"
                align="center"
                hideDivider
                hideBorder
                onChange={handleTabChange}>
                <Tabs.Item
                    font="14px"
                    label={"Home"}
                    value={""}
                  />
                  <Tabs.Item
                    font="14px"
                    label={"Team"}
                    value={"team"}
                  />
                  <Tabs.Item
                    font="14px"
                    label={"Research"}
                    value={"research"}
                  />
                  <Tabs.Item
                    font="14px"
                    label={"Publications"}
                    value={"publications"}
                  />
                  <Tabs.Item
                    font="14px"
                    label={"Teaching"}
                    value={"teaching"}
                  />
                  <Tabs.Item
                    font="14px"
                    label={"Theses"}
                    value={"theses"}
                  />
                  <Tabs.Item
                    font="14px"
                    label={"Join Us"}
                    value={"join"}
                  />
              </Tabs>
            </div>

            {/* Dark Mode Toggle */}
            <div className="controls">

            <Button auto icon={themeType ==="dark" ? <Sun /> : <Moon />} onClick={() => setThemeType(themeType === "custom-dark" ? "custom-light" : "custom-dark")}>
              {themeType === "custom-dark" ? "Light Mode" : "Dark Mode"}
            </Button>
            </div>
          </div>
        </nav>
      </div>
      <style jsx>{`
        .menu-wrapper {
          height: var(--geist-page-nav-height);
        }
        .menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding-right: ${isLocked ? 'var(--geist-page-scrollbar-width)' : 0};
          height: var(--geist-page-nav-height);
          //width: 100%;
          backdrop-filter: saturate(180%) blur(5px);
          background-color: ${addColorAlpha(theme.palette.background, 0.8)};
          box-shadow: ${theme.type === 'dark'
          ? '0 0 0 1px #333'
          : '0 0 15px 0 rgba(0, 0, 0, 0.1)'};
          z-index: 999;
        }
        nav .content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1000px;
          height: 100%;
          margin: 0 auto;
          gap: 20px;
          user-select: none;
          padding: 0 ${theme.layout.gap};
        }
        .logo {
          flex: 1 1;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-right:40px;
        }
        .logo a {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          font-size: 1.125rem;
          font-weight: 500;
          color: inherit;
          height: 28px;
        }

        .tabs {
          flex: 1 1;
          padding: 0 ${theme.layout.gap};
        }
        .tabs :global(.content) {
          display: none;
        }
        @media only screen and (max-width: ${theme.breakpoints.xs.max}) {
          .tabs {
            display: none;
          }
        }
        .controls {
          flex: 1 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .controls :global(.menu-toggle) {
          display: flex;
          align-items: center;
          min-width: 40px;
          height: 40px;
          padding: 0;
        }
      `}</style>
    </>
  );
}

// Styles (Custom Geist UI-like)
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  position: "sticky",
  top: 0,
  zIndex: 1000,
};

const logoStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#000",
  textDecoration: "none",
};

const linksContainer = {
  display: "flex",
  gap: "20px",
};
