import "../styles/global.css";
import Providers from "./components/Providers";
import Navbar from "./components/Navbar";
import Footnote from "./components/Footnote";
import Header from "./components/Header";

import { myCustomFont } from "./fonts"; // ✅ Import the custom font


export const metadata = {
  title: "PEACH Lab",
  description: "Experiential Programming Education Research Lab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myCustomFont.variable}>
      <body>
        <Providers> {/* ✅ Wrap everything inside Providers */}
          <Header/>
          <Navbar />
          <div className="main" style={{maxWidth: "55rem", margin: "0 auto", padding: "2rem 2rem 2rem 2rem", minHeight: "500pt"}}>
          {children}
          </div>
          <Footnote />
        </Providers>
      </body>
    </html>
  );
}
