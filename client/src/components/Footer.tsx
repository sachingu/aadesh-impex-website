import { Link } from "wouter";
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-sm text-white">
                <Globe className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-2xl text-white uppercase">
                Aadesh<span className="text-primary">Impex</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Leading the way in global trade and specialized manufacturing. 
              Delivering excellence across borders with safety and reliability at our core.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about"><span className="hover:text-primary transition-colors cursor-pointer">About Us</span></Link></li>
              <li><Link href="/services"><span className="hover:text-primary transition-colors cursor-pointer">Our Services</span></Link></li>
              <li><Link href="/products"><span className="hover:text-primary transition-colors cursor-pointer">Product Catalog</span></Link></li>
              <li><Link href="/manufacturing-plant"><span className="hover:text-primary transition-colors cursor-pointer">Manufacturing Plant</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-primary transition-colors cursor-pointer">Contact Us</span></Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-display text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Survey no.13<br />
                  Behind Nagor GIDC,<br />
                  Village - Purasar,<br />
                  Taluka - Bhuj, Dist - Kutch<br />
                  GUJARAT - 370001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>info@aadeshimpex.in</span>
              </li>
            </ul>
          </div>

          {/* Social / Newsletter */}
          <div>
            <h4 className="text-white font-display text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary">
              Follow Us
            </h4>
            <p className="text-sm text-slate-400 mb-6">
              Stay updated with our latest news and announcements.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-900 p-2 rounded hover:bg-primary hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="bg-slate-900 p-2 rounded hover:bg-primary hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="bg-slate-900 p-2 rounded hover:bg-primary hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Aadesh Impex. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
