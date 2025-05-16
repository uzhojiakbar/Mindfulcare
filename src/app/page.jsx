"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navar/Navbar";

export default function Home() {
  return (
    <section className="main-container">
      <Navbar />
      <Hero />
      <section className="page-container" id="about">
        <h1>About Page</h1>
      </section>
      <section className="page-container" id="services">
        <h1>Services Page</h1>
      </section>
      <section className="page-container" id="page">
        <h1>[Page] Page</h1>
      </section>
    </section>
  );
}
