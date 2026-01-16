import { PaperPlaneTilt } from "@phosphor-icons/react";

export default function Contact() {
  return (
    <section className="py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto bg-[#5e17eb] rounded-[3rem] p-10 md:p-24 text-white relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 text-center">
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic">Ready to Ship?</h2>
          <p className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto mb-16 font-medium">
            Contact us for a quote tailored to your specific needs. <span className="underline decoration-2">Flexible pricing</span> for serious founders.
          </p>
          
          <div className="max-w-lg mx-auto bg-white/10 backdrop-blur-md p-2 rounded-3xl border border-white/20 flex flex-col md:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent px-6 py-4 flex-1 focus:outline-none placeholder:text-purple-200 font-bold"
            />
            <button className="bg-white text-[#5e17eb] px-8 py-4 rounded-2xl font-black uppercase tracking-tighter hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2">
              Send <PaperPlaneTilt weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
