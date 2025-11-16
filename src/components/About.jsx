import { motion } from "framer-motion";

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

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-white/2" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -right-20 -top-10 w-60 h-60 rounded-full radar-sweep opacity-30" />
      <div className="absolute -left-16 bottom-0 w-48 h-48 rounded-full radar-sweep opacity-20" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid md:grid-cols-3 gap-10"
        >
          <div>
            <motion.div
              className="relative inline-block mt-4"
              initial="hidden"
              whileHover="visible"
            >
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              About VyomGarud
            </h2>
             <motion.div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{ background: "var(--brand)" }}
              variants={titleUnderlineVariants}
            />
            </motion.div>
          </div>
          <div className="md:col-span-2 text-neutral-300 leading-relaxed">
            VyomGarud designs and manufactures autonomous UAV systems for
            defense and industrial missions. Our platforms combine rugged
            airframes, modular ISR payloads, and secure command‑and‑control
            with state‑of‑the‑art guidance, navigation, and autonomy.
          </div>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="glass rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background: "var(--brand)",
                boxShadow: "0px 0px 10px 0px var(--brand)",
              }}
              variants={scannerVariants}
            />
            <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 text-(--brand)">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M4 7h16M7 4v6m10-6v6M5 20h14l-2-9H7l-2 9z" />
              </svg>
            </div>
            <h3 className="mt-4 text-white font-semibold">
              Reliability Engineering
            </h3>
            <p className="mt-2 text-sm text-neutral-300">
              Ruggedized airframes and electronics validated against
              temperature, vibration, and ingress per demanding benchmarks.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            className="glass rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background: "var(--brand)",
                boxShadow: "0px 0px 10px 0px var(--brand)",
              }}
              variants={scannerVariants}
            />
            <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 text-(--brand)">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3v6l3 3" />
              </svg>
            </div>
            <h3 className="mt-4 text-white font-semibold">
              Autonomous Systems
            </h3>
            <p className="mt-2 text-sm text-neutral-300">
              GNSS‑denied navigation, obstacle avoidance, and resilient
              return‑to‑launch driven by onboard perception.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            className="glass rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background: "var(--brand)",
                boxShadow: "0px 0px 10px 0px var(--brand)",
              }}
              variants={scannerVariants}
            />
            <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 text-(--brand)">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M4 8h16v10H4z" />
                <path d="M8 8V6a4 4 0 118 0v2" />
              </svg>
            </div>
            <h3 className="mt-4 text-white font-semibold">Secure C2</h3>
            <p className="mt-2 text-sm text-neutral-300">
              Encrypted command‑and‑control, telemetry, and mesh links
              designed for contested environments.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center gap-2"
        >
          <span className="glass rounded-md px-3 py-1.5 text-xs text-white/90 ring-1 ring-white/10">
            MIL‑STD
          </span>
          <span className="glass rounded-md px-3 py-1.5 text-xs text-white/90 ring-1 ring-white/10">
            BVLOS‑Ready
          </span>
          <span className="glass rounded-md px-3 py-1.5 text-xs text-white/90 ring-1 ring-white/10">
            IP67
          </span>
          <span className="glass rounded-md px-3 py-1.5 text-xs text-white/90 ring-1 ring-white/10">
            NDAA‑Compliant
          </span>
        </motion.div>
      </div>
    </section>
  );
}