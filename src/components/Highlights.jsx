import { motion } from "framer-motion";

const points = [
  {
    title: "MIL‑STD qualified",
    desc: "Ruggedization and environmental testing for harsh deployments.",
  },
  { title: "120+ min endurance", desc: "Optimized aerodynamics and power train." },
  { title: "BVLOS + failsafes", desc: "Secure C2, health monitoring, and RTL." },
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

export default function Highlights() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.4 }}
              custom={i}
              className="glass rounded-xl p-6 border border-white/10 relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background: "var(--brand)",
                  boxShadow: "0px 0px 10px 0px var(--brand)",
                }}
                variants={scannerVariants}
              />
              
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-(--brand)/20 text-(--brand) ring-1 ring-(--brand)/30">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-white">{p.title}</div>
                  <div className="text-sm text-neutral-300">{p.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}