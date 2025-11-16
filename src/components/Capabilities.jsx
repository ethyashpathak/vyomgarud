import { motion } from "framer-motion";

const items = [
  {
    title: "Tactical UAV Platforms",
    desc: "Rugged airframes with swappable ISR payloads and encrypted datalinks.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12h6l3 3 3-3h6" />
        <path d="M12 5v10M7 5l5 3 5-3" />
      </svg>
    ),
  },
  {
    title: "Autonomous Navigation",
    desc: "Vision + GNSS denied navigation, obstacle avoidance, and return to base.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v6l3 3" />
      </svg>
    ),
  },
  {
    title: "Secure C2 & Telemetry",
    desc: "AES 256 links, BVLOS, and mesh networking for resilient operations.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 8h16v10H4z" />
        <path d="M8 8V6a4 4 0 118 0v2" />
      </svg>
    ),
  },
  {
    title: "Advanced Payloads",
    desc: "EO/IR gimbals, LIDAR, SAR, and custom integrations via open SDK.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 5l7 7-7 7-7-7 7-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: i * 0.05,
    },
  }),
  
  hover: {
    y: -6, 
    transition: { duration: 0.3, ease: "easeOut" },
  },
};
const titleUnderlineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


const scannerVariants = {
  
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: "-100%", opacity: 0 },
  
  hover: {
    opacity: [0, 1, 1, 0], 
    y: "110%", 
    transition: {
      duration: 1.0,
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 0.5, 
      times: [0, 0.2, 0.8, 1], 
    },
  },
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
            <motion.div
              className="relative inline-block mt-4"
              initial="hidden"
              whileHover="visible"
            >
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Capabilities
          </h2>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ background: "var(--brand)" }}
            variants={titleUnderlineVariants}
             />
          </motion.div>
          <a
            href="#contact"
            className="hidden md:inline-flex text-sm text-(--brand) hover:text-white transition"
          >
            Talk to an expert →
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
            
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.4 }}
              custom={i} 
             
              className="glass rounded-xl p-5 border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden"
            >
             
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: "var(--brand)",
                  boxShadow: "0px 0px 10px 0px var(--brand)",
                }}
                variants={scannerVariants} 
              />
             

             
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-md text-(--brand) bg-white/5 ring-1 ring-white/10">
                  {item.icon}
                </div>
              </div>
              <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}