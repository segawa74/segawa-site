import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Toaster />
        <Navbar />
        <div className="container">
          <Hero />
          <Skills />
          <Experience />
          <Portfolio />
          <ContactMe />
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
