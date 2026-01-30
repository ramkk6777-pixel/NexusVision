
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 min-h-[600px] flex items-center bg-blue-600 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-[1400px] mx-auto px-8 w-full grid lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
        <div className="text-left animate-in fade-in slide-in-from-left-10 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
            Mission, Vision <br />& Values
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-50 font-light max-w-lg leading-relaxed opacity-90">
            Our guiding principles that define who we are and what we stand for.
          </p>
          
          <div className="mt-12 flex space-x-6">
            <div className="h-1 w-20 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-white"></div>
            </div>
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right-10 duration-1000 delay-200">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
              alt="Team collaboration" 
              className="w-full h-auto object-cover min-h-[400px]"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"></div>
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-400/20 backdrop-blur-xl rounded-full border border-white/20"></div>
        </div>
      </div>
      
      {/* Transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  );
};

export default Hero;
