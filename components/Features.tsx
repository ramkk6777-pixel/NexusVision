
import React from 'react';
import { Layout, Zap, Shield, BarChart3, Cloud, Layers } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all group">
    <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Elite Teams</h2>
          <p className="text-slate-400">Everything you need to manage your global operations at scale.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Zap}
            title="Rapid Deployment"
            description="Deploy updates to your infrastructure across 40+ global regions in under 5 minutes with our CorePulse system."
          />
          <FeatureCard 
            icon={Shield}
            title="Zero Trust Security"
            description="Industry-leading protection with automated threat detection and SOC2 compliance built-in from day one."
          />
          <FeatureCard 
            icon={Layout}
            title="Intuitive Workflows"
            description="Drag-and-drop workflow builders that allow non-technical teams to automate complex business processes."
          />
          <FeatureCard 
            icon={BarChart3}
            title="Advanced Analytics"
            description="Real-time data processing using AI to predict bottlenecks before they affect your bottom line."
          />
          <FeatureCard 
            icon={Cloud}
            title="Hybrid Cloud Ready"
            description="Seamlessly bridge on-premise servers with modern cloud providers using our dedicated bridge technology."
          />
          <FeatureCard 
            icon={Layers}
            title="Integrated Stack"
            description="NexusCore connects with over 500+ existing tools including Slack, Salesforce, and AWS."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
