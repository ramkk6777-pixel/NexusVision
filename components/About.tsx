
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-8 bg-slate-950">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -inset-4 bg-blue-600/20 blur-2xl rounded-full opacity-50"></div>
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
            alt="Our Workspace" 
            className="relative rounded-[2rem] shadow-2xl border border-white/10"
          />
          <div className="absolute -bottom-8 -right-8 bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl hidden md:block">
            <p className="text-3xl font-bold text-blue-500 mb-1">12+</p>
            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Years of Excellence</p>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 space-y-8">
          <div>
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white leading-tight">Founded on Innovation, Driven by Results.</h2>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed">
            NexusVision started as a small team of engineers in a garage with a single goal: to make enterprise software as intuitive as a consumer app. Today, we've scaled into a global force, managing infrastructure for the world's most demanding brands.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <h4 className="text-white font-bold text-xl mb-2">Global Reach</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Operating in 45 countries with localized support and high-performance data centers.</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-2">Expert Team</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Over 500+ specialists dedicated to your success across security, DevOps, and AI.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
