import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { REAL_IMAGES } from "@/lib/constants";

// Set to true to use real images, false to use SVGs
const USE_REAL_IMAGES = true;

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden" id="hero">
      {/* Background video/image with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src={USE_REAL_IMAGES ? REAL_IMAGES.hero : "/src/assets/images/hero-bg.svg"}
          alt="Video production background" 
          className="object-cover w-full h-full"
        />
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 z-10 pt-16">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4 border border-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-2 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Limited time masterclass
          </motion.span>
          
          <motion.h1 
            className="font-bold text-4xl md:text-6xl text-white leading-tight mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Create Stunning <span className="text-primary">Video Reels</span> with AI and CapCut
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Master the complete video creation process using cutting-edge AI tools and CapCut editor to produce professional-quality reels in hours, not days.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#register" className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-full text-center transition-all transform hover:scale-105 shadow-lg">
              Register for Masterclass
            </a>
            <a href="#process" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-medium px-8 py-4 rounded-full text-center transition-all flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Explore Curriculum
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute bottom-10 right-10 md:right-32 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full filter blur-2xl animate-pulse"></div>
    </section>
  );
}
