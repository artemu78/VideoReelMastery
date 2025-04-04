import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Tools", href: "#tools" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.376 13.27V5.74a1.4 1.4 0 0 0-2.142-1.188L10.285 9.3a1.4 1.4 0 0 0 0 2.376l6.95 4.748a1.4 1.4 0 0 0 2.142-1.188v-1.967zm-14.75.73h2v-4h-2z"/>
              <path d="M4.626 9h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2v5a1 1 0 0 0 1 1h13.38a3.4 3.4 0 0 0 3.37-3.479V6.479A3.4 3.4 0 0 0 19.005 3H5.626a1 1 0 0 0-1 1zm0 0v5"/>
            </svg>
            <span className="font-bold text-xl">VideoReels<span className="text-primary">AI</span></span>
          </Link>
          
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href}
                className="font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <a 
            href="#register" 
            className="hidden md:block text-white font-medium px-6 py-2 rounded-full transition-all transform hover:scale-105 bg-primary hover:bg-primary/90"
          >
            Register Now
          </a>
          
          <button className="md:hidden text-foreground hover:text-primary" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white rounded-lg mt-2 py-2 shadow-lg overflow-hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#register"
                className="block px-4 py-2 text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                Register Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
