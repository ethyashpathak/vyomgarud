import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState(null);

  
  const [cursorEnabled, setCursorEnabled] = useState(true);

  
  const mx = useMotionValue(-999);
  const my = useMotionValue(-999);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("Contact form:", data);
    setStatus("Thank you! We’ll get back to you within 1–2 business days.");
    e.currentTarget.reset();
  };
  const titleUnderlineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 overflow-hidden"
      onMouseMove={(e) => {
        if (!cursorEnabled) return; 
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - rect.left);
        my.set(e.clientY - rect.top);
      }}
      onMouseLeave={() => {
        mx.set(-999);
        my.set(-999);
      }}
    >
     
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute right-10 top-10 w-40 h-40 rounded-full radar-sweep" />
        <div className="absolute left-10 bottom-10 w-32 h-32 rounded-full radar-sweep" style={{ animationDuration: '9s' }} />

        <div className="ping" style={{ top: '30%', left: '18%', animationDelay: '0.2s' }} />
        <div className="ping" style={{ top: '65%', left: '75%', animationDelay: '1.1s' }} />
        <div className="ping" style={{ top: '42%', left: '55%', animationDelay: '2s' }} />

        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
          className="flight-path absolute inset-0"
        >
          <motion.path
            d="M80 420 C180 300 260 260 330 300 S480 400 560 260 700 120 860 200"
            fill="none"
            stroke="rgba(255,123,0,0.35)"
            strokeWidth="2"
          />
        </motion.svg>
      </div>

     
      {cursorEnabled && (
        <motion.div
          className="pointer-events-none absolute z-20 w-14 h-14 -translate-x-1/2 -translate-y-1/2"
          style={{ left: mx, top: my, opacity: 0.6 }}
        >
          <div className="absolute inset-0 rounded-full border border-(--brand)/40" />
          <div className="absolute inset-[30%] border border-(--brand)/70" />
          <div className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-(--brand)/60" />
          <div className="absolute left-1/2 bottom-0 h-3 w-px -translate-x-1/2 bg-(--brand)/60" />
          <div className="absolute top-1/2 left-0 w-3 h-px -translate-y-1/2 bg-(--brand)/60" />
          <div className="absolute top-1/2 right-0 w-3 h-px -translate-y-1/2 bg-(--brand)/60" />
        </motion.div>
      )}

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <motion.div
                         className="relative inline-block mt-4"
                         initial="hidden"
                         whileHover="visible"
                       >
                     <h2 className="text-2xl md:text-3xl font-semibold text-white">
                       Get in Touch!
                     </h2>
                     <motion.div
                       className="absolute bottom-0 left-0 right-0 h-1"
                       style={{ background: "var(--brand)" }}
                       variants={titleUnderlineVariants}
                        />
                     </motion.div>
            <p className="mt-3 text-neutral-300">
              Share your mission requirements or request a capabilities briefing.
            </p>

            <div className="mt-6 space-y-2 text-sm text-neutral-300">
              <div>
                Email:{" "}
                <a className="text-(--brand) hover:underline" href="mailto:contact@vyomgarud.com">
                  contact@vyomgarud.com
                </a>
              </div>
              <div>
                LinkedIn:{" "}
                <a className="text-(--brand) hover:underline" href="#">
                  /company/vyomgarud
                </a>
              </div>
            </div>
          </div>

         
          <form
            onSubmit={onSubmit}
            className="relative glass rounded-xl p-6 border border-white/10 overflow-hidden"
          >
            
            <div
              className="hidden"
              onFocusCapture={() => setCursorEnabled(false)}
              onBlurCapture={() => setCursorEnabled(true)}
            />

            <div
              className="pointer-events-none absolute -top-20 -right-24 w-72 h-72 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(255,123,0,0.25), transparent 70%)",
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-neutral-300" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  onFocus={() => setCursorEnabled(false)}
                  onBlur={() => setCursorEnabled(true)}
                  className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-(--brand)/60"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-300" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onFocus={() => setCursorEnabled(false)}
                  onBlur={() => setCursorEnabled(true)}
                  className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-(--brand)/60"
                  placeholder="jane@domain.com"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm text-neutral-300" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                onFocus={() => setCursorEnabled(false)}
                onBlur={() => setCursorEnabled(true)}
                className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-(--brand)/60"
                placeholder="Tell us about your use case..."
              />
            </div>

            <div className="mt-5">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium text-black"
                style={{ background: "var(--brand)" }}
              >
                Send message
              </button>
            </div>

            {status && (
              <p className="mt-3 text-sm text-(--brand)">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
