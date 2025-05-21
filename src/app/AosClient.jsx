"use client";
import { useEffect } from "react";
import AOS from "aos";

export default function AosClient() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return null;
}
