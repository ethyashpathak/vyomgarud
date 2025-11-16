import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Capabilities from "./components/Capabilities.jsx";
import Showcase from "./components/Showcase.jsx";
import Highlights from "./components/Highlights.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const NavLink = ({ href, children }) => {
  const underlineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      originX: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="relative"
      whileHover="visible"
      initial="hidden"
    >
      <a className="hover:text-white" href={href}>
        {children}
      </a>
      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-[2px]"
        style={{ background: "var(--brand)" }}
        variants={underlineVariants}
      />
    </motion.div>
  );
};
  return (
    <div className="min-h-screen">
     
      <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 backdrop-blur">
          <a
            href="#home"
            className="flex items-center gap-2 font-semibold text-white tracking-wide"
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--brand)" }}
            />
            VyomGarud
          </a>
          
       
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#capabilities">Capabilities</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
        

          <a
            href="#contact"
            className="inline-flex items-center rounded-md px-4 py-2 text-xs font-medium text-black"
            style={{ background: "var(--brand)" }}
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>

      <main>
         <Hero />
         <About />
         <Showcase />
         <Capabilities />
         <Highlights />
         <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App
