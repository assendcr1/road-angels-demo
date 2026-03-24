import { motion } from "framer-motion";
import { Wrench, Zap, Cpu, ArrowUpRight, Cog } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Gearbox Overhaul",
      brand: "Full Restoration",
      desc: "Comprehensive mechanical rebuilds for DQ200, DQ250, and DL501 units. Specialized for Audi, VW, and Porsche[cite: 5, 15].",
      icon: <Cog size={20} className="text-[var(--color-halo-silver)]" />,
      tags: ["AUDI", "VW", "PORSCHE"]
    },
    {
      title: "TCM Repair & Cloning",
      brand: "Electronics Surgery",
      desc: "Specialized Transmission Control Module repair. We clone existing data to new units to maintain factory settings[cite: 13, 15].",
      icon: <Cpu size={20} className="text-[var(--color-halo-silver)]" />,
      tags: ["SOFTWARE", "DATA CLONING"]
    },
    {
      title: "Mechatronic Repair",
      brand: "Hydraulic Mastery",
      desc: "Professional restoration of damaged Mechatronic units, including valve body and solenoid service[cite: 17].",
      icon: <Zap size={20} className="text-[var(--color-halo-silver)]" />,
      tags: ["HYDRAULICS", "S-TRONIC"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#050505] text-white px-8 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-xl">
            <div className="inline-block px-3 py-1 bg-[var(--color-halo-silver)] text-white text-[9px] font-black uppercase tracking-[0.3em] mb-4">
              Engineering Portfolio
            </div>
            <h2 className="text-5xl font-black italic uppercase tracking-tighter leading-[0.85]">
              VAG Technical <br /><span className="text-[var(--color-halo-silver)]">Capabilities.</span>
            </h2>
          </div>
          
          {/* NAVIGATION BUTTON TO SERVICES PAGE */}
          <button 
            onClick={() => window.location.href = '/services'}
            className="px-8 py-4 border border-white/10 hover:border-[var(--color-halo-silver)] transition-all flex items-center gap-4 group"
          >
            <span className="text-[10px] font-black uppercase tracking-widest">Explore Full Services</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              className="group p-10 bg-[#080808] hover:bg-[#0c0c0c] transition-all duration-500 relative"
            >
              <div className="p-3 bg-white/[0.02] border border-white/5 text-[var(--color-halo-silver)] mb-8 inline-block">
                {s.icon}
              </div>
              <h3 className="text-xl font-black italic uppercase tracking-tighter mb-4 text-white group-hover:text-[var(--color-halo-silver)] transition-colors">
                {s.title}
              </h3>
              <p className="text-[10px] text-gray-500 uppercase leading-relaxed mb-8 tracking-wider font-medium">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-white/5 text-[7px] font-black text-gray-400 border border-white/5 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}