
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-800 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-xl font-bold transition-colors ${isOpen ? 'text-blue-500' : 'text-white group-hover:text-blue-400'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center transition-all ${isOpen ? 'bg-blue-600 border-blue-600 rotate-180' : 'bg-transparent'}`}>
          {isOpen ? <Minus size={16} className="text-white" /> : <Plus size={16} className="text-slate-400" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-400 leading-relaxed text-lg max-w-4xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How long does a typical migration take?",
      answer: "Most enterprise migrations take between 4 to 8 weeks depending on data volume. Our automated CorePorter tool handles 80% of the heavy lifting, ensuring minimal downtime during the transition."
    },
    {
      question: "Is NexusVision compliant with global data privacy laws?",
      answer: "Absolutely. We are fully GDPR, HIPAA, and SOC2 Type II compliant. Data is encrypted both at rest and in transit using industry-standard AES-256 protocols."
    },
    {
      question: "Can we integrate with our existing legacy systems?",
      answer: "Yes, our 'Bridge' API is designed specifically to connect modern cloud infrastructure with on-premise legacy databases. We support over 200+ legacy protocols."
    },
    {
      question: "What kind of training do you provide for our staff?",
      answer: "We offer a comprehensive onboarding package including on-site workshops, dedicated video tutorials, and a 24/7 priority support line for your technical leads."
    },
    {
      question: "Do you offer custom feature development?",
      answer: "For our Enterprise tier clients, we provide dedicated engineering resources to build bespoke features that align with your unique business requirements."
    }
  ];

  return (
    <section id="faq" className="py-24 px-8 bg-slate-900/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Common Questions</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">Got Questions? We Have Answers.</h2>
        </div>
        
        <div className="bg-slate-900/50 rounded-[3rem] p-8 md:p-12 border border-slate-800 shadow-2xl">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
