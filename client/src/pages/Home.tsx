import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Anchor, TrendingUp, ShieldCheck, Factory, Truck } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navigation />
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Unsplash: Industrial port with containers */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1494412651409-ae156eb18455?q=80&w=2070&auto=format&fit=crop" 
            alt="Global Logistics Port" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-900/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="h-[2px] w-12 bg-primary block"></span>
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Welcome to Aadesh Impex</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-8">
              BRIDGING MARKETS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">
                GLOBAL REACH
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              We specialize in premium import-export services and state-of-the-art explosive manufacturing. 
              Connecting Gujarat to the world with reliability, safety, and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-none font-display uppercase tracking-wider text-base">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/manufacturing-plant">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 rounded-none font-display uppercase tracking-wider text-base bg-transparent">
                  Our Plant
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary z-0"></div>
              {/* Unsplash: Business handshake or office meeting */}
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
                alt="Business Meeting" 
                className="w-full h-auto shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary z-20"></div>
            </div>
            
            <div>
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Who We Are</h2>
              <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Your Trusted Partner in Global Trade</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Established with a vision to redefine international trade standards, Aadesh Impex has grown into a powerhouse 
                connecting markets across continents. Headquartered in Kutch, Gujarat, we leverage our strategic location 
                near major ports to facilitate seamless import and export operations.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Beyond logistics, we take pride in our industrial venture – a cutting-edge explosive manufacturing 
                facility designed with paramount focus on safety and precision engineering.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-4xl font-display font-bold text-slate-900 mb-1">10+</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-wide">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-display font-bold text-slate-900 mb-1">50+</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-wide">Countries Served</p>
                </div>
              </div>

              <Link href="/about">
                <Button variant="link" className="text-primary p-0 h-auto font-bold uppercase tracking-wider hover:no-underline group">
                  Read More About Us <span className="block h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300 mt-1"></span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">What We Do</h2>
            <h3 className="text-4xl font-display font-bold mb-6">Comprehensive Trade Solutions</h3>
            <p className="text-slate-400">
              End-to-end supply chain management tailored to your specific industry needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Anchor, title: "Import / Export", desc: "Seamless global sourcing and distribution network covering major international markets." },
              { icon: Factory, title: "Manufacturing", desc: "High-grade explosive manufacturing unit adhering to global safety standards in Kutch." },
              { icon: Truck, title: "Logistics", desc: "Efficient transportation solutions ensuring your cargo reaches on time, every time." },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-slate-900 p-8 border border-slate-800 hover:border-primary transition-all duration-300 group"
              >
                <div className="bg-slate-800 w-16 h-16 flex items-center justify-center rounded mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-display font-bold mb-4">{service.title}</h4>
                <p className="text-slate-400 leading-relaxed mb-6">{service.desc}</p>
                <Link href="/services">
                  <span className="text-sm font-bold uppercase tracking-wider text-primary cursor-pointer flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MANUFACTURING TEASER */}
      <section className="py-24 relative">
         {/* Unsplash: Factory interior or industrial plant */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop" 
            alt="Manufacturing Plant" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ShieldCheck className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
            Safety. Precision. Scale.
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10">
            Our state-of-the-art explosive manufacturing facility in Kutch sets the benchmark for industrial safety and quality production.
          </p>
          <Link href="/manufacturing-plant">
            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-display uppercase tracking-wider rounded-none px-10 py-6">
              Visit Manufacturing Unit
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
}
