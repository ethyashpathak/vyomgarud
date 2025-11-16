import { motion } from "framer-motion";


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
      <a className="hover:text-white transition" href={href}>
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

export default function Footer() {
  return (
    <footer className="mt-10 pb-10 pt-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
        <div>
          © {new Date().getFullYear()} VyomGarud. All rights reserved.
        </div>
        
        
        <nav className="flex items-center gap-5">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#capabilities">Capabilities</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
       
      </div>
    </footer>
  );
}