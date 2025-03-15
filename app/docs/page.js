"use client"; // ✅ Add this at the top!

import Sidebar from "../components/Sidebar";

export default function DocsPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "2rem", flex: 1 }}>
        <h1>Introduction</h1>
        <p>Welcome to PEACH Lab documentation.</p>
      </main>
    </div>
  );
}
