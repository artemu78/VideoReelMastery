import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";

export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="pricing">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm uppercase font-semibold tracking-wider text-secondary">Pricing Options</span>
          <h2 className="font-bold text-3xl md:text-4xl mt-2 mb-6">
            Invest in Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Creative Future</span>
          </h2>
          <p className="text-gray-600 text-lg">Choose the plan that best fits your needs and start creating professional video content today</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div 
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${plan.popular ? 'border-2 border-primary transform scale-105 z-10' : 'border border-gray-100'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="bg-primary text-white py-2 text-center font-medium">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className="font-semibold text-xl mb-4">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`flex items-center ${!feature.included ? 'text-gray-400' : ''}`}>
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <X className="h-5 w-5 mr-2" />
                      )}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#register" 
                  className={`block text-center py-3 px-6 rounded-lg transition-colors ${
                    plan.popular 
                      ? 'bg-primary text-white font-medium hover:bg-primary/90 shadow-lg' 
                      : 'border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 max-w-2xl mx-auto">
            All plans include access to the 6-module masterclass. Prices don't include any subscription costs for the AI tools mentioned in the course.
          </p>
          <a href="#" className="inline-block mt-4 text-secondary hover:text-secondary/80 font-medium">
            View our refund policy 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
