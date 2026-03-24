import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronRight, Zap } from "lucide-react";

export default function Hero() {
  const [ignite, setIgnite] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setIgnite(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center px-8 md:px-20 overflow-hidden bg-[#050505]">
      {/* Base Car Image */}
      <motion.img
        src="/hero-car.jpg"
        alt="VAG Specialist"
        initial={{ opacity: 0.1, scale: 1.02 }}
        animate={{ opacity: ignite ? 0.35 : 0.1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* REFINED HEADLIGHT EFFECT */}
      <div className="absolute left-[12%] top-[38%] w-[450px] pointer-events-none">
        {/* Core LED Bulb (The Sharp Center) */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={ignite ? { opacity: [0, 1, 0.5, 1], scale: [0.8, 1.1, 0.9, 1] } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="absolute left-0 top-0 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#fff] z-20"
        />
        
        {/* The Matrix Bloom (The Glow) */}
        {ignite && (
          <div className="absolute -left-20 -top-20 w-[400px] h-[200px] bg-matrix-blue/30 rounded-full blur-[60px] animate-matrix z-10" />
        )}

        {/* The Horizontal Lens Flare (Luxury Detail) */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={ignite ? { width: "150%", opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
          className="lens-flare absolute top-2 -left-1/4 z-30"
        />
      </div>

      <div className="relative z-10 container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Value Proposition (Kept as is) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: ignite ? 1 : 0, x: ignite ? 0 : -30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4 text-[var(--color-halo-silver)] font-bold tracking-[0.3em] text-[10px] uppercase">
            <Zap size={14} /> Engineering Excellence
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter uppercase italic">
            Precision. <br />
            <span className="text-gray-600">Restored.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-md border-l-2 border-[var(--color-halo-silver)] pl-6 mb-8">
            Specialized VAG Transmission & Mechatronic Engineering for Audi, VW, and Porsche.
          </p>
        </motion.div>

        {/* CRO SHIFT-CHECK FORM (Kept as is) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: ignite ? 1 : 0, y: ignite ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-[#0b0f14]/90 backdrop-blur-2xl border border-white/10 p-10 rounded-2xl shadow-2xl w-full max-w-md ml-auto"
        >
          <div className="flex gap-1 mb-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`h-1 flex-1 transition-all duration-700 ${step >= i ? 'bg-[var(--color-halo-silver)]' : 'bg-white/5'}`} />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h3 className="text-xs font-bold mb-6 tracking-widest text-gray-500 uppercase">01. Select Brand</h3>
                <div className="space-y-3">
                  {["Audi", "Volkswagen", "Porsche"].map((brand) => (
                    <button key={brand} onClick={() => setStep(2)} className="w-full text-left p-5 bg-white/5 border border-white/5 hover:border-[var(--color-halo-silver)] hover:bg-[var(--color-halo-silver)]/5 transition-all flex justify-between group uppercase text-sm tracking-widest font-bold">
                      {brand} <ChevronRight className="group-hover:translate-x-2 transition-transform text-[var(--color-halo-silver)]" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h3 className="text-xs font-bold mb-6 tracking-widest text-gray-500 uppercase">02. Identify Symptom</h3>
                <div className="space-y-3">
                  {["Gearbox Warning", "Jerking / Hard Shift", "No Reverse Gear"].map((issue) => (
                    <button key={issue} onClick={() => setStep(3)} className="w-full text-left p-5 bg-white/5 border border-white/5 hover:border-[var(--color-halo-silver)] transition-all uppercase text-sm font-bold tracking-widest">
                      {issue}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="s3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h3 className="text-xs font-bold mb-2 tracking-widest text-gray-500 uppercase">03. Contact</h3>
                <p className="text-sm text-gray-400 mb-6 italic text-center">Secure your specialist diagnostic slot.</p>
                <input type="tel" placeholder="MOBILE NUMBER" className="w-full bg-white/5 border border-white/10 p-5 mb-4 outline-none focus:border-[var(--color-halo-silver)] text-white placeholder:text-gray-700 font-bold" />
                <button className="w-full bg-[var(--color-halo-silver)] py-5 font-black uppercase tracking-[0.2em] text-xs hover:bg-red-800 transition-colors">
                  Request Shift-Check
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}