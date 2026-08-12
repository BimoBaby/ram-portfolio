import { useEffect } from "react";
import { BrowserRouter, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

const SECTION_PATHS = {
  "/ram-about": "ram-about",
  "/ram-projects": "ram-projects",
  "/ram-exp": "ram-exp",
  "/ram-contact": "ram-contact",
};

const KNOWN_PATHS = ["/", ...Object.keys(SECTION_PATHS)];

function ScrollToSection() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const sectionId = SECTION_PATHS[pathname];
    if (!sectionId) return;

    const frame = requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}

function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function AppRoutes() {
  const { pathname } = useLocation();

  if (!KNOWN_PATHS.includes(pathname)) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <ScrollToSection />
      <Portfolio />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
