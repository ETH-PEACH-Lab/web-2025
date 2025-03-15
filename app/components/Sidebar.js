import { Link } from "@geist-ui/core";

export default function Sidebar() {
  return (
    <aside style={{ width: "250px", padding: "1rem", borderRight: "1px solid #eee" }}>
      <h3>Documentation</h3>
      <ul>
        <li><Link href="/docs">Introduction</Link></li>
        <li><Link href="/docs/getting-started">Getting Started</Link></li>
        <li><Link href="/docs/api">API Reference</Link></li>
      </ul>
    </aside>
  );
}
