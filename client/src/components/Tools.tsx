import { motion } from "framer-motion";
import { AI_TOOLS } from "@/lib/constants";

export default function Tools() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20" id="tools">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm uppercase font-semibold tracking-wider text-secondary">Featured Tools</span>
          <h2 className="font-bold text-3xl md:text-4xl mt-2 mb-6">
            Master Cutting-Edge <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI Video Tools</span>
          </h2>
          <p className="text-gray-600 text-lg">Our masterclass teaches you how to leverage the most powerful AI tools for video creation available today</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {AI_TOOLS.map((tool, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all"
              variants={item}
            >
              <div className={`h-48 bg-gradient-to-r ${tool.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-3/4 rounded-lg shadow-lg overflow-hidden opacity-90 group-hover:opacity-100 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img 
                      src={`/client/src/assets/images/tool-${tool.name === "CapCut" ? "capcut" : 
                            tool.name === "Pika Labs" ? "pika" : 
                            tool.name === "Eleven Labs" ? "eleven-labs" : 
                            tool.name === "KlingAI" ? "klingai" : 
                            tool.name === "Sora" ? "sora" : 
                            "hailuo"}.svg`}
                      alt={tool.name} 
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{tool.name}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-100 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
