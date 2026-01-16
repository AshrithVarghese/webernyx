import { Lightning, ArrowRight, Asterisk } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-6 min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Floating Objects for 'Life' */}
      <div className="absolute top-20 left-10 animate-bounce text-[#5e17eb]/20"><Asterisk size={64} weight="fill" /></div>
      <div className="absolute bottom-20 right-10 animate-pulse text-[#5e17eb]/10"><Asterisk size={120} weight="fill" /></div>
      
      <div className="fade-up inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase mb-8 text-slate-500">
        <Lightning weight="fill" className="text-[#5e17eb]" /> Webernyx Digital Studio
      </div>

      <h1 className="fade-up delay-1 text-[12vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter text-center uppercase">
        Create <br /> 
        <span className="text-white drop-shadow-[2px_2px_0_#5e17eb] [-webkit-text-stroke:1px_#5e17eb]">Impact.</span>
      </h1>

      <p className="fade-up delay-2 text-lg md:text-xl text-slate-500 max-w-xl text-center mt-10 mb-12 font-medium">
        We specialize in building software that doesn't just work—it <span className="text-slate-900 font-bold">dominates.</span> Flexible pricing. Elite execution.
      </p>

    </section>
  );
}
