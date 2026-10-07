"use client";
import { useEffect } from "react";
import markup from "./markup";

/**
 * Client component: renders the portfolio markup and attaches the
 * interactions (loader, cursor dot, case studies, uploads, popups)
 * from /public/portfolio.js. Project data (the `P` array) lives at the
 * top of that file; set img:"/images/yourfile.jpg" to use real images.
 */
export default function Portfolio() {
  useEffect(() => {
    const load = (src: string) =>
      new Promise<void>((resolve) => {
        const s = document.createElement("script");
        s.src = src;
        s.onload = () => resolve();
        document.body.appendChild(s);
      });
    load("/collections-data.js").then(() => load("/portfolio.js"));
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
