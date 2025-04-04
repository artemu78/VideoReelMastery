import { motion } from "framer-motion";

const benefitCards = [
  {
    icon: "bolt",
    title: "Time-Saving Workflow",
    description: "Create professional video content in hours instead of days with our streamlined AI-powered process.",
    color: "primary"
  },
  {
    icon: "wand-magic-sparkles",
    title: "Cutting-Edge AI Tools",
    description: "Master the latest AI video generation technologies that are revolutionizing content creation.",
    color: "secondary"
  },
  {
    icon: "users",
    title: "Complete Skill Package",
    description: "From script writing to final production, learn every aspect of modern video creation.",
    color: "accent"
  }
];

const stats = [
  { number: "6+", text: "Advanced AI Tools", color: "primary" },
  { number: "10x", text: "Faster Production", color: "secondary" },
  { number: "100%", text: "Beginner Friendly", color: "accent" },
  { number: "∞", text: "Creative Possibilities", color: "" }
];

export default function About() {
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
    <section className="py-20" id="about">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm uppercase font-semibold tracking-wider text-secondary">Why Choose This Masterclass</span>
          <h2 className="font-bold text-3xl md:text-4xl mt-2 mb-6">
            Transform Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Video Creation Skills</span>
          </h2>
          <p className="text-gray-600 text-lg">Learn the complete AI-powered video production workflow from script to final edit, saving countless hours while creating professional content.</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {benefitCards.map((card, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:scale-105 hover:shadow-xl"
              variants={item}
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-${card.color}/10 text-${card.color} mb-6`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {card.icon === "bolt" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  )}
                  {card.icon === "wand-magic-sparkles" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  )}
                  {card.icon === "users" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  )}
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="p-6 rounded-lg bg-gray-50"
              variants={item}
            >
              <h3 className={`font-bold text-4xl mb-2 ${stat.color ? `text-${stat.color}` : 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'}`}>
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
