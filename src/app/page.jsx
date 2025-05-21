"use client";
import AboutSection from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navar/Navbar";
import ProgramSection from "@/components/ProgramSection/ProgramSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection/WhyChooseUsSection";

// const sections = ["about", "why", "program", "teachers", "reviews", "faq"];
// const sectionNames = {
//   about: "О нас",
//   why: "Почему мы?",
//   program: "Программа",
//   teachers: "Учителя",
//   reviews: "Отзывы",
//   faq: "FAQ",
// };
export default function Home() {
  return (
    <section className="main-container">
      <Navbar />
      <Hero />
      <AboutSection />
      <WhyChooseUsSection />
      <ProgramSection />
      {/* <section className="page-container" id="program">
        <h1>[Page] Page</h1>
      </section> */}
    </section>
  );
}
