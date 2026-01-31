import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { FloatingContact } from "@/components/FloatingContact";
import { AlertTriangle, ShieldCheck, Settings, CheckCircle2 } from "lucide-react";

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navigation />
      
      {/* Unsplash: Industrial factory floor or chemical plant */}
      <PageHeader 
        title="Manufacturing Plant" 
        subtitle="Advanced explosive manufacturing facility located in the heart of Kutch, Gujarat."
        image="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2076&auto=format&fit=crop"
      />

      {/* Intro */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Industrial Excellence</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-8">State-of-the-Art Facility in Kutch</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our explosive manufacturing plant is designed to meet the rigorous demands of mining, infrastructure, and seismic exploration industries. 
              Spread across a vast area in Kutch, Gujarat, the facility is equipped with automated machinery and strictly adheres to PESO (Petroleum and Explosives Safety Organization) guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Highlight */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="h-10 w-10 text-primary" />
                <h3 className="text-3xl font-display font-bold uppercase">Safety First</h3>
              </div>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Handling explosives requires zero margin for error. We prioritize safety above all else, implementing rigorous protocols at every stage of production, storage, and transport.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Automated temperature and pressure monitoring systems",
                  "Blast-proof infrastructure and secure storage bunkers",
                  "Regular safety audits and staff training programs",
                  "Compliance with international safety standards"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary transform rotate-3 rounded-lg opacity-20"></div>
              {/* Unsplash: Safety gear or industrial controls */}
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop" 
                alt="Safety Protocols" 
                className="relative rounded-lg shadow-2xl z-10 border border-slate-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-display font-bold text-slate-900">Production Capabilities</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg border-t-4 border-slate-900 hover:border-primary transition-colors duration-300">
              <Settings className="h-12 w-12 text-slate-700 mb-6" />
              <h4 className="text-xl font-display font-bold mb-3">Custom Formulation</h4>
              <p className="text-slate-600">
                Ability to tailor explosive strength and velocity based on specific geological conditions and blasting requirements.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-lg border-t-4 border-slate-900 hover:border-primary transition-colors duration-300">
              <ShieldCheck className="h-12 w-12 text-slate-700 mb-6" />
              <h4 className="text-xl font-display font-bold mb-3">Quality Control</h4>
              <p className="text-slate-600">
                In-house laboratory for testing raw materials and finished products to ensure consistent performance.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-lg border-t-4 border-slate-900 hover:border-primary transition-colors duration-300">
              <Factory className="h-12 w-12 text-slate-700 mb-6" />
              <h4 className="text-xl font-display font-bold mb-3">Scalable Output</h4>
              <p className="text-slate-600">
                High-capacity production lines designed to meet bulk orders for large-scale infrastructure projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
}

// Simple icon wrapper
function Factory(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  );
}
