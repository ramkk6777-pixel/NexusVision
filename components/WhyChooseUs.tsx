
import React from 'react';
import { Target, Trophy, Clock, Users } from 'lucide-react';

const ReasonCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 hover:bg-slate-900/60 hover:border-blue-500/30 transition-all duration-500 group">
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-slate-400 leading-relaxed">
      {description}
    </p>
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-24 px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Differentiators</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white leading-tight">What Makes Us Your Best Strategic Partner?</h2>
          <p className="text-slate-400 text-lg">We don't just provide software; we provide a foundation for your digital legacy.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <ReasonCard 
            icon={Target}
            title="Strategic Accuracy"
            description="Our solutions are precisely engineered to meet specific industry challenges, eliminating bloat and focusing on high-impact ROI."
          />
          <ReasonCard 
            icon={Clock}
            title="Rapid ROI"
            description="With our pre-built modules and intuitive API, most clients see measurable performance gains within the first 30 days of deployment."
          />
          <ReasonCard 
            icon={Trophy}
            title="Award-Winning Support"
            description="Recognized for 5 years straight as the #1 enterprise support team. We don't just solve tickets; we solve business problems."
          />
          <ReasonCard 
            icon={Users}
            title="Community Driven"
            description="A growing ecosystem of thousands of developers and partners sharing best practices and custom integrations daily."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
