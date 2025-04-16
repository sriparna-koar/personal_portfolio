// components/ExperienceSection.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section 
    id="experience"
    className=" text-gray-100 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <h2 className="text-3xl font-bold mb-8 text-blue-100 relative">
            <span className="inline-block">Experience</span>
            <span className="absolute bottom-0 left-0 h-1 w-24 rounded-full"></span>
          </h2>
          
          <motion.div 
            className="rounded-lg p-6 shadow-xl mb-8 border-l-4 border-blue-500 hover:shadow-blue-900/20 transition-all duration-300"
            variants={itemVariants}
          >
            <div className="flex flex-wrap justify-between items-start">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold text-white">Full Stack Developer Intern</h3>
                <h4 className="text-lg font-medium text-blue-300 mt-1">Bigmac Consultancy</h4>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center text-blue-200 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">May 2024 - March 2025</span>
                </div>
                <div className="flex items-center text-blue-200">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">Remote</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-900 text-blue-100">
                    <Briefcase size={14} />
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-gray-300 leading-relaxed">
                    Led the development and maintenance of responsive web applications using front-end technologies like HTML, CSS, JavaScript, React, Node, Express, which significantly enhanced on both web and mobile platforms.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-900 text-blue-100">
                    <Briefcase size={14} />
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-gray-300 leading-relaxed">
                    Integrated Restful APIs and back-end services with socket.io and Razor-pay for payment processing, incorporating advanced AI techniques with the Tiny Face model for fraud detection.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-900 text-blue-100">
                    <Briefcase size={14} />
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-gray-300 leading-relaxed">
                    Conducted regular code reviews and enforced best practices ensuring high-quality code and performance across all layers of the application stack, which contributed to smoother operations and increased user trust in the application.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-700 text-blue-100 rounded-full text-xs font-medium">React</span>
              <span className="px-3 py-1 bg-gray-700 text-blue-100 rounded-full text-xs font-medium">Node.js</span>
              <span className="px-3 py-1 bg-gray-700 text-blue-100 rounded-full text-xs font-medium">Express</span>
              <span className="px-3 py-1 bg-gray-700 text-blue-100 rounded-full text-xs font-medium">JavaScript</span>
              <span className="px-3 py-1 bg-gray-700 text-blue-100 rounded-full text-xs font-medium">API Integration</span>
              <span className="px-3 py-1 bg-gray-700 text-blue-100 rounded-full text-xs font-medium">Socket.io</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;