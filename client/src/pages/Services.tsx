import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { FloatingContact } from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      title: "Import / Export",
      desc: "We facilitate the smooth movement of goods across international borders. From raw materials to finished products, our network ensures timely delivery and compliance with global trade regulations.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Logistics & Supply Chain",
      desc: "Our integrated logistics solutions optimize your supply chain. We handle freight forwarding, warehousing, and last-mile delivery, reducing costs and transit times.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Custom Clearance",
      desc: "Navigating complex customs procedures can be daunting. Our experts handle documentation and regulatory compliance to ensure your cargo clears ports without unnecessary delays.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2071&auto=format&fit=crop"
    },
    {
      title: "Sourcing & Procurement",
      desc: "Looking for specific products? We leverage our global network to source high-quality materials at competitive prices, acting as your trusted procurement partner.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navigation />
      
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive solutions tailored to meet the dynamic needs of global commerce."
        image="https://images.unsplash.com/photo-1495112398151-7eedd7c2e7e8?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {services.map((service, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative overflow-hidden rounded shadow-xl group">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">{service.title}</h3>
                  <div className="w-20 h-1 bg-primary mb-6"></div>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <Link href="/contact">
                    <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase font-bold tracking-wider">
                      Inquire Now
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
}
