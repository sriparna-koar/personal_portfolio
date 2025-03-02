
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  CodeSquare, 
  PenTool, 
  Database, 
  Braces,
  Cpu, 
  ChevronDown,
  Globe,
  Mail,
  Briefcase,
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Layers,
  Code,
  Terminal,
  Sparkles,
  BookOpen,
  Cloud,
  Zap,
  Server,
  Figma,
  Monitor,
  Star
} from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeGreeting, setActiveGreeting] = useState(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Transform values for parallax effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacityHeader = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
    
    // Set up interval for greeting rotation
    const intervalId = setInterval(() => {
      setActiveGreeting(prev => (prev + 1) % languages.length);
    }, 2000);
    
    return () => clearInterval(intervalId);
  }, []);

  const languages = [
    { language: 'English', greeting: 'Hello', region: 'UK' },
    { language: 'Bengali', greeting: 'নমস্কার', region: 'India' },
    { language: 'Hindi', greeting: 'नमस्ते', region: 'India' },
    { language: 'Spanish', greeting: 'Hola', region: 'Spain' },
    { language: 'Japanese', greeting: 'こんにちは', region: 'Japan' },
    { language: 'French', greeting: 'Bonjour', region: 'France' },
    { language: 'Australian', greeting: 'G\'day', region: 'Australia' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70
      }
    },
  };

  const greetingVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 }
  };

  // Button style with provided hover effect
  const buttonStyle = {
    color: 'white',
    fontWeight: 'bold',
    px: 2,
    py: 1,
    borderRadius: 1,
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: '0 0 20px rgba(255, 64, 129, 0.6)',
    },
  };

  return (
    <div 
      ref={sectionRef} 
      className="min-h-screen text-white overflow-hidden relative"
      style={{
        background: 'linear-gradient(90deg, rgba(0,0,0,0.9), rgba(34,34,34,0.9))',
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Particle background with parallax effect */}
      <motion.div className="absolute inset-0 overflow-hidden opacity-20" style={{ y: backgroundY }}>
        {isLoaded && [...Array(80)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              background: `rgba(255, ${Math.floor(Math.random() * 200)}, ${Math.floor(Math.random() * 150)}, 0.8)`
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-800/10 to-transparent opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>

      {/* Main content with scroll animations */}
      <motion.div 
        className="container mx-auto px-4 pt-24 pb-16 relative z-10 max-w-6xl"
        style={{ y: textY, opacity: opacityHeader }}
      >
        {/* Name and language side by side section */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Left side: Name with same size text */}
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl font-bold text-white flex items-center justify-center"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
              >
                <Sparkles className="w-8 h-8 mr-3 inline-block text-white" />
              </motion.span>
              Sriparna Koar
            </motion.h1>

            {/* Right side: Animated greeting with same text size */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-16 flex items-center"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGreeting}
                  variants={greetingVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="flex items-center text-5xl font-bold"
                >
                  <div className="text-white flex items-center">
             
                    {languages[activeGreeting].greeting}
                    {/* <span className="text-sm ml-2 text-white opacity-70">
                      ({languages[activeGreeting].language})
                    </span> */}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Innovative glowing divider */}
          <motion.div 
            className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent my-6 relative"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              width: ["8rem", "12rem", "8rem"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white blur-sm"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>

          {/* Professional titles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-white mb-8 flex items-center justify-center space-x-3"
          >
            <span className="text-white flex items-center">
              <Code className="w-5 h-5 mr-1" />Developer
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-white flex items-center">
              <Figma className="w-5 h-5 mr-1" />Designer
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-white flex items-center">
              <Zap className="w-5 h-5 mr-1" />Innovator
            </span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="max-w-xl mx-auto text-white text-lg"
          >
            Transforming complex problems into elegant digital solutions through code, creativity, and continuous innovation.
          </motion.p>
          
          {/* Enhanced social links with glass morphism effect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex space-x-4 mt-8"
          >
            {[
              { icon: <Github className="w-5 h-5" />, label: "GitHub" },
              { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
              { icon: <Twitter className="w-5 h-5" />, label: "Twitter" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href="#"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(255, 64, 129, 0.6)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Interactive decorative elements */}
        <motion.div
          className="absolute top-1/4 right-16 w-32 h-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            className="absolute w-full h-full rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, rgba(255,64,129,0.8) 0%, rgba(255,64,129,0) 70%)'
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 left-16 w-48 h-48"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <motion.div
            className="absolute w-full h-full rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.25, 0.1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
        </motion.div>

        {/* Enhanced CTA buttons with provided hover styling */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row justify-center gap-6 mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 20px rgba(255, 64, 129, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-md text-white font-bold flex items-center justify-center gap-2 shadow-md group"
            style={{
              background: 'rgba(224, 0, 75, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
          >
            <Briefcase className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>View Portfolio</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            >
              <ChevronRight className="w-4 h-4 ml-1" />
            </motion.div>
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 20px rgba(255, 64, 129, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-md text-white font-bold flex items-center justify-center gap-2 group"
            style={{
              background: 'rgba(30, 30, 30, 0.6)',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
          >
            <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Contact Me</span>
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Innovative bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
    </div>
  );
};

export default HeroSection;