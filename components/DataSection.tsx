
import React from 'react';

const DataSection: React.FC = () => {
  // Custom SVG path for the "Vision Graph"
  const pathData = "M 0 180 Q 50 160 100 120 T 200 140 T 300 60 T 400 100 T 500 20 T 600 40 L 600 200 L 0 200 Z";
  const lineData = "M 0 180 Q 50 160 100 120 T 200 140 T 300 60 T 400 100 T 500 20 T 600 40";

  return (
    <section id="analytics" className="py-24 px-6 bg-slate-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Nexus Intelligence</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight text-white">
            See your performance <br /> in <span className="text-blue-500">Real-Time</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Stop flying blind. Our unified analytics engine aggregates data from all your services, providing a single source of truth for your executive team.
          </p>
          <ul className="space-y-4">
            {['Millisecond data refresh', 'Customizable dashboard widgets', 'Automated PDF reports', 'AI-generated insights'].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3 text-slate-300">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex-1 w-full glass p-8 rounded-[3rem] border border-white/10 shadow-2xl min-h-[400px] relative group">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          
          <div className="flex justify-between items-center mb-10">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Global Infrastructure Usage</h4>
            <div className="flex space-x-2">
              <div className="px-3 py-1 bg-blue-500/10 rounded-full text-[10px] text-blue-400 font-bold">LIVE</div>
              <div className="px-3 py-1 bg-slate-800 rounded-full text-[10px] text-slate-400 font-bold">24H</div>
            </div>
          </div>

          <div className="h-[250px] w-full relative">
            <svg viewBox="0 0 600 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={pathData} fill="url(#gradient)" className="animate-pulse" />
              <path d={lineData} fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" className="animate-in fade-in duration-1000" />
              
              {/* Grid Lines */}
              {[0, 50, 100, 150].map(y => (
                <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="#1e293b" strokeWidth="1" strokeDasharray="5,5" />
              ))}
            </svg>
            
            {/* Interactive Points */}
            <div className="absolute top-[20px] left-[83%] w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6] animate-ping"></div>
            <div className="absolute top-[20px] left-[83%] w-3 h-3 bg-white border-2 border-blue-500 rounded-full"></div>
          </div>
          
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Peak Usage</p>
              <p className="text-lg font-bold text-white">98.4%</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Avg Latency</p>
              <p className="text-lg font-bold text-white">12ms</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Uptime</p>
              <p className="text-lg font-bold text-blue-500">99.99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSection;
