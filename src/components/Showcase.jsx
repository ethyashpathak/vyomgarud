import { motion } from "framer-motion";

const shots = [
  {
    src: "/drone3.jpg",
    alt: "Tactical UAV reconnaissance flight",
    caption: "ISR Recon - dusk sortie",
  },
  {
    src: "/drone2.jpg",
    alt: "UAV endurance test over range",
    caption: "Endurance Test - 120+ min",
  },
];

export default function Showcase() {
  return (
    <section aria-label="Operational showcase" className="py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {shots.map((s, i) => (
            <motion.figure
              key={s.src}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="aspect-16/10 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                <div className="glass rounded-lg px-3 py-2 text-sm text-white/90 inline-flex ring-1 ring-white/10">
                  {s.caption}
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
