
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import WhyChooseUs from './components/WhyChooseUs.tsx';
import Services from './components/Services.tsx';
import FAQ from './components/FAQ.tsx';
import Features from './components/Features.tsx';
import DataSection from './components/DataSection.tsx';
import AIAssistant from './components/AIAssistant.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-500/30">
      <Navbar />
      <main>
        {/* Mission, Vision & Values Section */}
        <div id="mission">
          <Hero />
        </div>
        
        <About />
        
        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Core Services Section */}
        <Services />

        {/* Features & Technical Capabilities */}
        <Features />
        
        <DataSection />
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* Contact CTA Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-5xl mx-auto glass p-16 rounded-[4rem] border border-white/10 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-[length:200%_auto] group-hover:bg-right transition-all duration-1000"></div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight">Ready to transform?</h2>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Collaborate with the most advanced enterprise software platform. 
              Book a session with our strategic advisors today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-y-0 sm:space-x-6">
              <button className="w-full sm:w-auto px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-600/30 uppercase tracking-widest text-sm">
                Start Free Trial
              </button>
              <button className="w-full sm:w-auto px-12 py-5 bg-slate-900 text-white border border-slate-700 rounded-xl font-bold hover:bg-slate-800 transition-all uppercase tracking-widest text-sm">
                Consult With Us
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
