import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-white/2" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid md:grid-cols-3 gap-10"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">About VyomGarud</h2>
          </div>
          <div className="md:col-span-2 text-neutral-300 leading-relaxed">
            VyomGarud designs and manufactures autonomous UAV systems for defense and
            industrial missions. Our platforms combine rugged airframes, modular ISR
            payloads, and secure command‑and‑control with state‑of the art guidance,
            navigation, and autonomy.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
