import { motion } from "framer-motion";
import { VIDEO_CREATION_STEPS, REAL_IMAGES } from "@/lib/constants";

// Set to true to use real images, false to use SVGs
const USE_REAL_IMAGES = true;

export default function Process() {
  return (
    <section className="py-20 bg-gray-50" id="process">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm uppercase font-semibold tracking-wider text-secondary">Course Curriculum</span>
          <h2 className="font-bold text-3xl md:text-4xl mt-2 mb-6">
            Master the Complete <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Video Creation Process</span>
          </h2>
          <p className="text-gray-600 text-lg">Our comprehensive masterclass covers every step of creating professional video reels using AI-powered tools and CapCut</p>
        </motion.div>
        
        <div className="relative px-4">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 w-1 bg-secondary left-[31px] md:left-1/2 md:ml-[-2px] z-0"></div>
          
          {VIDEO_CREATION_STEPS.map((step, index) => (
            <motion.div 
              key={step.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:justify-between mb-24 md:mb-32 relative`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`md:w-5/12 z-10 ${index % 2 === 0 ? 'md:text-right' : ''} order-2 md:order-${index % 2 === 0 ? '1' : '2'} mt-8 md:mt-0`}>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className={`mb-4 inline-block rounded-full bg-${step.color}/10 text-${step.color} h-12 w-12 flex items-center justify-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {step.icon === "pen-fancy" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      )}
                      {step.icon === "microphone-alt" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      )}
                      {step.icon === "film" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                      )}
                      {step.icon === "photo-video" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      )}
                      {step.icon === "volume-up" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      )}
                      {step.icon === "cut" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                      )}
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <ul className="mt-4 text-gray-600 list-disc list-inside">
                    {step.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="absolute left-[31px] md:left-1/2 transform md:-translate-x-1/2 z-20">
                <div className={`w-16 h-16 rounded-full bg-${step.color} text-white flex items-center justify-center text-xl font-bold shadow-lg`}>
                  {step.id}
                </div>
              </div>
              
              <div className={`md:w-5/12 z-10 order-1 md:order-${index % 2 === 0 ? '2' : '1'}`}>
                <div className="h-48 md:h-64 bg-gray-200 rounded-xl overflow-hidden shadow-lg flex items-center justify-center p-4">
                  <img 
                    src={USE_REAL_IMAGES 
                      ? step.id === 1 ? REAL_IMAGES.process.aiScript 
                        : step.id === 2 ? REAL_IMAGES.process.voice
                        : step.id === 3 ? REAL_IMAGES.process.aiVideo
                        : step.id === 4 ? REAL_IMAGES.process.stockMedia
                        : step.id === 5 ? REAL_IMAGES.process.sound
                        : REAL_IMAGES.process.capcut
                      : `/src/assets/images/process-${step.id === 1 ? 'ai-script' : 
                          step.id === 2 ? 'voice' : 
                          step.id === 3 ? 'visuals' : 
                          step.id === 4 ? 'library' : 
                          step.id === 5 ? 'sound' : 
                          'capcut'}.svg`
                    }
                    alt={step.title} 
                    className={`${USE_REAL_IMAGES ? 'w-full h-full object-cover' : 'h-full object-contain'}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
