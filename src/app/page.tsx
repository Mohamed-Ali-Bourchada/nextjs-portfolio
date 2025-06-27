import { Viewport } from "next";
import Header from "@/components/layout/Header";
import dynamic from "next/dynamic";
import Footer from "@/components/layout/Footer";

// Dynamically import heavy components
const Hero = dynamic(() => import("@/components/sections/Hero"), { 
  ssr: true,
  loading: () => <div className="min-h-[500px] flex items-center justify-center">Loading...</div>
});

const About = dynamic(() => import("@/components/sections/About"), { 
  ssr: true,
  loading: () => <div className="min-h-[400px]">Loading...</div>
});

const Skills = dynamic(() => import("@/components/sections/Skills"), { 
  ssr: true,
  loading: () => <div className="min-h-[400px]">Loading...</div>
});

const Projects = dynamic(() => import("@/components/sections/Projects"), { 
  ssr: true,
  loading: () => <div className="min-h-[400px]">Loading...</div>
});

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
      <Projects />
      <Footer />
    </main>
  );
}
