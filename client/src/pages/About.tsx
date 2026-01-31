import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { FloatingContact } from "@/components/FloatingContact";
import { Target, Eye, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navigation />
      
      {/* Unsplash: Office building or team discussion */}
      <PageHeader 
        title="About Us" 
        subtitle="Driving growth through strategic trade partnerships and industrial excellence."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Our Story</h2>
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-6">From Local Roots to Global Routes</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Aadesh Impex began as a modest trading house in the vibrant industrial hub of Gujarat. Over the years, our relentless commitment to quality and integrity has propelled us into a leading position in the import-export sector.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Recognizing the growing demand for industrial explosives in mining and infrastructure sectors, we diversified our operations to establish a world-class manufacturing plant in Kutch. This strategic expansion allows us to control quality from production to delivery.
              </p>
              
              <div className="bg-slate-100 p-8 border-l-4 border-primary mt-8">
                <p className="text-slate-800 italic text-lg font-medium">
                  "Our goal is not just to trade, but to build lasting bridges between markets, fostering economic growth and industrial safety."
                </p>
                <div className="mt-4 font-bold font-display uppercase text-primary">- The Founder</div>
              </div>
            </div>
            
            <div className="grid gap-8">
              <div className="bg-white p-8 shadow-lg border-t-4 border-primary">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-xl font-display font-bold mb-3">Our Mission</h4>
                <p className="text-slate-600">
                  To provide superior quality products and logistical solutions that empower industries globally, while maintaining the highest standards of safety and sustainability.
                </p>
              </div>

              <div className="bg-white p-8 shadow-lg border-t-4 border-slate-900">
                <Eye className="h-10 w-10 text-slate-900 mb-4" />
                <h4 className="text-xl font-display font-bold mb-3">Our Vision</h4>
                <p className="text-slate-600">
                  To be recognized globally as a synonym for reliability and innovation in both international trade and explosive manufacturing.
                </p>
              </div>

              <div className="bg-white p-8 shadow-lg border-t-4 border-primary">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-xl font-display font-bold mb-3">Our Values</h4>
                <ul className="text-slate-600 space-y-2 list-disc list-inside">
                  <li>Integrity in every transaction</li>
                  <li>Safety first, always</li>
                  <li>Customer-centric approach</li>
                  <li>Innovation in processes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
}
