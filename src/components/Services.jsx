import React from "react";
import { Code, AppWindow, CurrencyCircleDollar } from "@phosphor-icons/react";

const items = [
  { title: "Web Domination", icon: <Code />, desc: "NextJS & React apps built for raw speed." },
  { title: "Software Architecture", icon: <AppWindow />, desc: "Complex systems engineered for massive scale." },
  { title: "Flexible Value", icon: <CurrencyCircleDollar />, desc: "Pricing that adapts to your needs, not a fixed menu." }
];

export default function Services() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={i} className="gradient-border group p-10 border border-slate-100 flex flex-col items-start hover:shadow-2xl transition-all cursor-pointer">
            <div className="p-4 bg-slate-50 rounded-2xl text-[#5e17eb] mb-6 group-hover:bg-[#5e17eb] group-hover:text-white transition-colors">
              {React.cloneElement(item.icon, { size: 32, weight: "duotone" })}
            </div>
            <h3 className="text-2xl font-black mb-4">{item.title}</h3>
            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
