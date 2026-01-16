export default function Team() {
  const founders = [
    { name: "Ashrith Varghese A", role: "Founder" },
    { name: "Abhishek Krishna A M", role: "Co-Founder" },
    { name: "Aron Alex", role: "Co-Founder" }
  ];

  return (
    <section className="py-32 px-6 bg-slate-900 text-white rounded-[3rem] mx-4 mb-20 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-20 opacity-10 font-black text-9xl italic select-none">WEBERNYX</div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-black mb-20 italic">The <span className="text-[#5e17eb] not-italic underline decoration-white decoration-1 underline-offset-8">Mindset.</span></h2>
        <div className="grid md:grid-cols-3 gap-16">
          {founders.map((f, i) => (
            <div key={i} className="border-l-2 border-[#5e17eb] pl-8 py-4">
              <h4 className="text-3xl font-black tracking-tight">{f.name}</h4>
              <p className="text-[#5e17eb] font-bold uppercase tracking-widest text-xs mt-2">{f.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
