import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Zap, 
  Wrench, 
  Percent, 
  PhoneCall, 
  FileText,
  ChevronRight,
  CheckCircle2,
  Award,
  CheckCircle,
  Star,
  Crown,
  Shield
} from "lucide-react";

const BadgeTierCard = ({ icon: Icon, title, subtitle, goal, description, features, colorClass }) => (
  <div className="flex flex-col bg-[#080808] border border-white/5 p-10 hover:border-white/10 transition-all duration-500 group relative">
    {/* Milestone Indicator */}
    <div className="absolute top-6 right-8">
      <span className="text-[8px] font-black uppercase tracking-[0.4em] text-gray-600 group-hover:text-white transition-colors">
        {goal} Goal
      </span>
    </div>

    {/* Badge Icon Styling */}
    <div className={`w-16 h-16 flex items-center justify-center border border-white/10 bg-white/[0.02] mb-10 transition-all duration-500 group-hover:border-white/20 ${colorClass}`}>
      <Icon size={28} strokeWidth={1.5} />
    </div>
    
    <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-2">
      {title}
    </h3>
    <p className={`text-[10px] font-black uppercase tracking-widest mb-6 ${colorClass}`}>
      {subtitle}
    </p>

    <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed font-bold mb-10 min-h-[60px]">
      "{description}"
    </p>

    <div className="space-y-4 pt-8 border-t border-white/5">
      {features.map((feature, i) => (
        <div key={i} className="flex items-center gap-3">
          <CheckCircle2 size={14} className="text-[var(--color-halo-silver)] shrink-0" />
          <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">
            {feature}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default function MembershipPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const badgeTiers = [
    {
      title: "Bronze Badge",
      subtitle: "Free Full Maintenance",
      goal: "4 Months",
      description: "Unlocks a free DSG gearbox service including oil, filters, and software updates after 4 months of active status.",
      icon: Shield,
      colorClass: "text-orange-500",
      features: ["DSG Gearbox Discounts", "Software Updates", "Roadside Assistance"]
    },
    {
      title: "Silver Badge",
      subtitle: "30% Service Discount",
      goal: "12 Months",
      description: "Massive savings on gearbox services and clutch replacements, plus free maintenance and software updates.",
      icon: Star,
      colorClass: "text-gray-300",
      features: ["DSG Gearbox Discounts", "Software Updates", "Roadside Assistance"]
    },
    {
      title: "Gold Badge",
      subtitle: "50% Overhaul Discount",
      goal: "24 Months",
      description: "The ultimate package: Half-price overhauls, roadside assistance, and flexible payment plans for dead units.",
      icon: Crown,
      colorClass: "text-yellow-500",
      features: ["DSG Gearbox Discounts", "Software Updates", "Roadside Assistance"]
    }
  ];

  const accreditations = [
    { icon: ShieldCheck, label: "RMI Accredited", sub: "Retail Motor Industry" },
    { icon: Award, label: "VAG Certified", sub: "Specialist Engineering" },
    { icon: CheckCircle, label: "SABS Approved", sub: "Quality Standards" },
    { icon: Zap, label: "MIWA Member", sub: "Workshop Association" },
  ];

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-24 px-8 md:px-20 font-sans selection:bg-[var(--color-halo-silver)]">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-24 text-center">
        <div className="inline-block px-3 py-1 bg-[var(--color-halo-silver)] text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 font-bold">
          VAG Protection Program
        </div>
        <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.8] text-white mb-8">
          The <span className="text-[var(--color-halo-silver)]">Angel</span> Bond.
        </h1>
        <p className="max-w-2xl mx-auto text-[11px] text-gray-500 uppercase tracking-[0.3em] leading-loose font-bold">
          Membership is a journey of precision. Earn badges as you maintain your active status and unlock elite engineering benefits.
        </p>
      </div>

      {/* BADGE TIERS GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-24">
        {badgeTiers.map((tier, i) => (
          <BadgeTierCard key={i} {...tier} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-start text-left">
        <div className="lg:col-span-2 space-y-12">
          
          {/* ACCREDITATIONS */}
          <div className="p-12 bg-white/[0.01] border border-white/5">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-white mb-10 flex items-center gap-3">
              <ShieldCheck size={16} className="text-[var(--color-halo-silver)]" /> Institutional Backing
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {accreditations.map((badge, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <badge.icon size={24} className="text-gray-600 group-hover:text-[var(--color-halo-silver)] transition-colors mb-3" />
                  <span className="text-[9px] text-white font-black uppercase tracking-widest mb-1">{badge.label}</span>
                  <span className="text-[7px] text-gray-600 font-bold uppercase tracking-widest">{badge.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* REQUIREMENTS */}
          <div className="p-12 bg-white/[0.01] border border-white/5">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-white mb-8 flex items-center gap-3">
              <FileText size={16} className="text-[var(--color-halo-silver)]" /> Program Requirements
            </h3>
            <ul className="space-y-4">
              {["Active Audi, VW, or Porsche Registration", "Initial Technical Inspection Required", "Minimum 12-Month Commitment", "Non-Transferable Engineering Bond"].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                  <CheckCircle2 size={14} className="text-[var(--color-halo-silver)]" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PRICING CARD (Simplified) */}
        <div className="sticky top-32">
          <div className="bg-white text-black p-10 relative overflow-hidden shadow-2xl shadow-black/50">
            <div className="absolute top-0 right-0 p-4">
              <ShieldCheck size={40} strokeWidth={1} className="text-black/5 opacity-50" />
            </div>

            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-halo-silver)] mb-4 block">
              Standard Access
            </span>
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-2">RSA Member</h2>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-black italic tracking-tighter">R195</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">/ Per Month</span>
            </div>

            <p className="text-[11px] font-bold uppercase tracking-wider leading-relaxed mb-10 text-gray-700">
              One simple subscription unlocks all tiers. Your level is determined by your length of membership.
            </p>

            <button className="w-full py-5 bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[var(--color-halo-silver)] transition-all flex items-center justify-center gap-3 group">
              Start Your Journey <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="mt-6 text-[8px] uppercase tracking-[0.3em] text-gray-400 text-center font-bold">
              Secure checkout by Netcash / Payflex
            </p>
          </div>
          
          <div className="mt-8 p-6 border border-white/5 text-center">
            <p className="text-[9px] text-gray-500 uppercase tracking-[0.3em] leading-loose font-bold">
              Already a member? <span className="text-white cursor-pointer hover:text-[var(--color-halo-silver)] transition-colors">Access Portal</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}