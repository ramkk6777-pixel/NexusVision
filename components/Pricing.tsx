
import React from 'react';
import { Check } from 'lucide-react';

const PricingPlan = ({ name, price, description, features, recommended }: any) => (
  <div className={`p-8 rounded-3xl border transition-all ${recommended ? 'bg-blue-600 border-blue-400 scale-105 shadow-xl shadow-blue-600/20' : 'bg-slate-900 border-slate-800 hover:border-slate-700'}`}>
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <div className="flex items-baseline space-x-1 mb-4">
      <span className="text-4xl font-extrabold">{price}</span>
      {price !== 'Custom' && <span className="text-slate-300">/mo</span>}
    </div>
    <p className={`text-sm mb-8 ${recommended ? 'text-blue-100' : 'text-slate-400'}`}>{description}</p>
    
    <ul className="space-y-4 mb-8">
      {features.map((feature: string, idx: number) => (
        <li key={idx} className="flex items-center space-x-3 text-sm">
          <Check size={18} className={recommended ? 'text-white' : 'text-blue-500'} />
          <span className={recommended ? 'text-blue-50' : 'text-slate-300'}>{feature}</span>
        </li>
      ))}
    </ul>
    
    <button className={`w-full py-3 rounded-xl font-bold transition-all ${recommended ? 'bg-white text-blue-600 hover:bg-slate-100' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
      Choose Plan
    </button>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing for Every Stage</h2>
          <p className="text-slate-400">Scale from startup to enterprise with flexible billing.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <PricingPlan 
            name="Basic"
            price="$49"
            description="Perfect for small teams and early-stage startups."
            features={['Up to 10 team members', 'Standard infrastructure', 'Weekly reporting', 'Community support']}
          />
          <PricingPlan 
            name="Pro"
            price="$149"
            description="Optimized for scaling businesses with high volume."
            recommended={true}
            features={['Up to 100 team members', 'Priority infrastructure', 'Daily reporting', '24/7 Priority support', 'Custom integrations']}
          />
          <PricingPlan 
            name="Enterprise"
            price="Custom"
            description="Bespoke solutions for global organizations."
            features={['Unlimited team members', 'Dedicated hardware', 'Real-time analytics', 'Dedicated account manager', 'SLA guarantees']}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
