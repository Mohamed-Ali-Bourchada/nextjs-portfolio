import { Viewport } from "next";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
// import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";

export const viewport: Viewport = {
  colorScheme: "dark",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Footer />
    </main>
  );
}
