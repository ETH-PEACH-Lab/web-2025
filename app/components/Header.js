"use client";
import { Breadcrumbs } from "@geist-ui/core";

export default function Header() {
  return (
    <div className="breadcrumbs-container">
      <Breadcrumbs separator=">">
        <Breadcrumbs.Item href="https://ethz.ch/en.html">ETH Zürich</Breadcrumbs.Item>
        <Breadcrumbs.Item href="https://inf.ethz.ch/">D-INFK</Breadcrumbs.Item>
        <Breadcrumbs.Item href="https://iis.inf.ethz.ch/">Institute for Intelligent Interactive Systems</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/">Educational Technology</Breadcrumbs.Item>
      </Breadcrumbs>
    </div>
  );
}
