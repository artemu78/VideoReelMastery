import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-20" id="faq">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm uppercase font-semibold tracking-wider text-secondary">Questions & Answers</span>
          <h2 className="font-bold text-3xl md:text-4xl mt-2 mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">Everything you need to know about our AI video reels masterclass</p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div 
              key={index}
              className="border-b border-gray-200 py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button 
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full text-left font-medium text-lg focus:outline-none"
                aria-expanded={openItem === index}
                aria-controls={`faq-content-${index}`}
              >
                <span>{item.question}</span>
                <div className="text-primary transition-transform">
                  {openItem === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openItem === index && (
                  <motion.div
                    id={`faq-content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-gray-600">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
