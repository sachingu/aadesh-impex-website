import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { FloatingContact } from "@/components/FloatingContact";
import { Card, CardContent } from "@/components/ui/card";

export default function Products() {
  const products = [
    {
      category: "Industrial Explosives",
      items: ["Slurry Explosives", "Emulsion Explosives", "Detonating Fuse", "Electric Detonators"],
      image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=2069&auto=format&fit=crop"
    },
    {
      category: "Agricultural Commodities",
      items: ["Spices", "Grains", "Cotton", "Oil Seeds"],
      image: "https://images.unsplash.com/photo-1557234195-adeef7741040?q=80&w=2070&auto=format&fit=crop"
    },
    {
      category: "Minerals & Ores",
      items: ["Bauxite", "Bentonite", "China Clay", "Silica Sand"],
      image: "https://images.unsplash.com/photo-1518558997970-4dadc805509c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      category: "Chemicals",
      items: ["Industrial Salts", "Soda Ash", "Caustic Soda", "Fertilizers"],
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navigation />
      
      <PageHeader 
        title="Our Products" 
        subtitle="Diverse portfolio of high-quality products sourced and manufactured for global markets."
        image="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((cat, idx) => (
              <Card key={idx} className="overflow-hidden border-none shadow-lg group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={cat.image} 
                    alt={cat.category} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                    <h3 className="text-2xl font-display font-bold text-white uppercase">{cat.category}</h3>
                  </div>
                </div>
                <CardContent className="p-8 bg-white">
                  <ul className="grid grid-cols-2 gap-4">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center text-slate-600">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
}
