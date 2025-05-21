"use client";
import AboutSection from "@/components/About";
import ContactForm from "@/components/ContactForm/ContactForm";
import FaqSection from "@/components/FaqSection/FaqSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navar/Navbar";
import ProgramSection from "@/components/ProgramSection/ProgramSection";
import TeacherCardList from "@/components/TeacherCard/TeacherCard";
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
      <TeacherCardList />
      <FaqSection />
      <ContactForm />
      {/* <section className="page-container" id="program">
        <h1>[Page] Page</h1>
      </section> */}
    </section>
  );
}
