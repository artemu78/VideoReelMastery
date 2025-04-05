import { motion } from "framer-motion";
import { TESTIMONIALS, REAL_IMAGES } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm uppercase font-semibold tracking-wider text-secondary">Success Stories</span>
          <h2 className="font-bold text-3xl md:text-4xl mt-2 mb-6">
            What Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Students Say</span>
          </h2>
          <p className="text-gray-600 text-lg">Hear from creators who have transformed their video production process with our masterclass</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => {
            // Get the correct avatar image based on the person's name
            const getAvatarImage = () => {
              if (testimonial.name.includes("Sarah")) return REAL_IMAGES.testimonials.sarah;
              if (testimonial.name.includes("Marcus")) return REAL_IMAGES.testimonials.marcus;
              if (testimonial.name.includes("Elena")) return REAL_IMAGES.testimonials.elena;
              return ""; // Fallback (shouldn't happen with our current data)
            };
            
            return (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full ${
                  index === 0 ? 'bg-primary' : index === 1 ? 'bg-secondary' : 'bg-accent'
                } text-white flex items-center justify-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="pt-4">
                  <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4 shadow-md">
                      <img 
                        src={getAvatarImage()}
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
