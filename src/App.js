import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { useRef } from "react";

export default function Home() {
  const HeroSection = useRef();
  const SkillsSection = useRef();
  const PortfolioSection = useRef();
  const ContactSection = useRef();

  const pages = {
    home: HeroSection,
    skills: SkillsSection,
    portfolio: PortfolioSection,
    contact: ContactSection,
  };

  return (
    <div className={styles.container}>
      <main>
        <Header pages={pages} />
        <Hero ref={HeroSection} />
        <Skills ref={SkillsSection} />
        <Portfolio ref={PortfolioSection} />
        <Contact ref={ContactSection} />
      </main>

      <footer className={styles.footer}>© Amr Hesham. 2022</footer>
    </div>
  );
}
