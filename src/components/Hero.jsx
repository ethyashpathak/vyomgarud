import { motion, useMotionValue, useTransform } from "framer-motion";

const DroneMark = () => (
  <svg
    aria-hidden="true"
    className="w-32 h-32 text-(--brand)/80"
    viewBox="0 0 120 120"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <circle cx="60" cy="60" r="38" className="opacity-20" />
    <circle cx="60" cy="60" r="58" className="opacity-10" />
    <path d="M60 18v20M60 82v20M18 60h20M82 60h20" className="opacity-40" />
    
    <path d="M35 62l18-10 7 0 0 16 -7 0 -18-6z" className="opacity-80" />
    <path d="M85 62l-18-10 -7 0 0 16 7 0 18-6z" className="opacity-80" />
    <circle cx="60" cy="60" r="3" fill="currentColor" />
  </svg>
);

// --- ADDED: Variants for the title underline ---
const titleUnderlineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity);
        mouseY.set(Infinity);
      }}
    >
      
      <motion.div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(
                400px circle at ${x}px ${y}px, 
                rgba(255, 123, 0, 0.07), 
                transparent 80%
              )`
          ),
        }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-neutral-900 via-neutral-950 to-black" />
      <div className="absolute inset-0 bg-grid" />
      <div
        className="absolute -top-40 -right-20 w-[480px] h-[480px] rounded-full blur-3xl opacity-30"
        style={{
          background: "radial-gradient(closest-side, #ff7b00 10%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-36 md:pb-28">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-neutral-300/80">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--brand)" }}
              />
              Military grade UAV Systems
            </span>

          
            <motion.div
              className="relative inline-block mt-4"
              initial="hidden"
              whileHover="visible"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-white">Vyom</span>
                <span className="text-(--brand)">Garud</span>
              </h1>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ background: "var(--brand)" }}
                variants={titleUnderlineVariants}
              />
            </motion.div>
           

            <p className="mt-4 max-w-xl text-neutral-300 md:text-lg">
              Precision engineered autonomous platforms with secure C2, ISR
              payloads, and advanced navigation for contested environments.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-black"
                style={{ background: "var(--brand)" }}
              >
                Explore capabilities
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white/90 border border-white/15 hover:border-white/30 transition"
              >
                Contact us
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-neutral-400">
              <span className="inline-flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full animate-pulse"
                  style={{ background: "var(--brand)" }}
                />
                High reliability
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/30" /> Precision
                autonomy
              </span>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <div className="relative glass rounded-2xl p-4 md:p-5 ring-1 ring-white/10">
              <div
                className="absolute -inset-4 -z-10 rounded-3xl opacity-30 blur-2xl"
                style={{
                  background:
                    "conic-gradient(from 220deg, rgba(255,123,0,0.2), transparent 45%)",
                }}
              />
              <div className="relative">
                <img
                  src="/drone1.jpg"
                  alt="VyomGarud tactical UAV in flight"
                  className="aspect-video w-full rounded-lg object-cover ring-1 ring-white/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.7)]"
                  loading="eager"
                />
                <div className="absolute left-3 top-3 opacity-70">
                  <DroneMark />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center text-xs text-neutral-300/80">
                <div>
                  <div className="text-white font-semibold">120 min</div>
                  Endurance
                </div>
                <div>
                  <div className="text-white font-semibold">BVLOS</div>
                  Ready
                </div>
                <div>
                  <div className="text-white font-semibold">MIL STD</div>
                  Tested
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}