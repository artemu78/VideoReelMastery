import { motion } from "framer-motion";

export default function RegisterForm() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/90 to-secondary/90 text-white" id="register">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm uppercase font-semibold tracking-wider text-white/80">Join The Masterclass</span>
          <h2 className="font-bold text-3xl md:text-4xl mt-2 mb-6">
            Register for Our <span className="text-white">AI Video Reels</span> Masterclass
          </h2>
          <p className="text-white/90 text-lg">Fill out the form below to secure your spot in the upcoming masterclass session</p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8 md:p-12">
            <h3 className="font-bold text-2xl text-foreground mb-6">Registration Form</h3>
            
            <div className="flex justify-center w-full">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSffw7zg5ajK4pegTn_ZYG6Xs_VDdJ7xfG9CY5NcfqJ8xoDwgQ/viewform?embedded=true" 
                width="100%" 
                height="700" 
                style={{border: "none"}}
                title="CapCut AI Video Masterclass Registration"
              >
                Loading...
              </iframe>
            </div>
            
            <div className="mt-8 text-center text-gray-600">
              <p className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Your information is securely processed by Google Forms
              </p>
              <p>Need help? <a href="#" className="text-primary font-medium">Contact our support team</a></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
