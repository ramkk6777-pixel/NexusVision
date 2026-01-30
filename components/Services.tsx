
import React from 'react';
import { Code, Globe, Smartphone, Bitcoin, Palette, Megaphone } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-10 rounded-[2.5rem] bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all group relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-600/10 transition-colors"></div>
    <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl shadow-blue-600/5">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{title}</h3>
    <p className="text-slate-400 leading-relaxed">
      {description}
    </p>
    <div className="mt-8 flex items-center text-blue-500 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
      Learn More <span className="ml-2">→</span>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom enterprise software solutions designed for scalability, performance, and long-term maintainability."
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Next-gen web applications built with the latest technologies to ensure rapid load times and SEO dominance."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile experiences that engage users and drive business growth on every device."
    },
    {
      icon: Bitcoin,
      title: "Blockchain Development",
      description: "Secure, decentralized solutions ranging from smart contracts to custom DLT infrastructure for modern finance."
    },
    {
      icon: Palette,
      title: "UI/UX & Graphics Design",
      description: "Human-centric design philosophies that bridge the gap between complex functionality and effortless usability."
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Data-driven growth strategies that amplify your brand's presence and convert global audiences into loyal customers."
    }
  ];

  return (
    <section id="services" className="py-24 px-8 bg-slate-950">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Our Expertise</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 text-white leading-tight max-w-4xl">
            Comprehensive Digital <br /> <span className="text-blue-500">Transformation Services</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            We deliver end-to-end solutions that empower enterprises to outpace competition and define the future of their industry.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
