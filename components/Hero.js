
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  CodeSquare, 
  PenTool, 
  Database, 
  Braces,
  Cpu, 
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
  Layers,
  Code,
  Sparkles,
  Zap,
  Figma,
  Brain,
  LineChart,
  Workflow,
  Mail,
  Briefcase,
  ArrowRight,
  BarChart2,
  Terminal,
  FileCode,
  Server
} from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
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
  }, []);

  const skills = [
    { icon: <Brain className="w-6 h-6" />, name: "Machine Learning" },
    { icon: <Database className="w-6 h-6" />, name: "MongoDB" },
    { icon: <CodeSquare className="w-6 h-6" />, name: "AI" },
    { icon: <Terminal className="w-6 h-6" />, name: "Deep Learning" },
    { icon: <BarChart2 className="w-6 h-6" />, name: "Python" },
    { icon: <Server className="w-6 h-6" />, name: "Full Stack Developer" }
  ];

  return (
    <div 
      id="home"
      ref={sectionRef} 
      className="min-h-screen text-white overflow-hidden relative"
      style={{
        background: 'linear-gradient(135deg, rgb(0, 0, 0), rgba(0, 0, 0, 0))',
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Enhanced geometric background pattern */}
      <motion.div className="absolute inset-0 overflow-hidden opacity-20" style={{ y: backgroundY }}>
        {isLoaded && [...Array(100)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              background: 'transparent',
              border: `1px solid rgba(100, ${Math.floor(Math.random() * 150) + 100}, ${Math.floor(Math.random() * 250)}, ${Math.random() * 0.1 + 0.05})`,
              borderRadius: Math.random() > 0.7 ? '50%' : '0%',
              transform: `rotate(${Math.random() * 360}deg)`
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, Math.random() * 180],
              scale: [1, Math.random() * 0.5 + 0.8, 1]
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced gradient overlays */}
      {/* <div className="absolute inset-0 bg-gradient-radial from-indigo-900/10 via-transparent to-transparent opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div> */}

      {/* Digital circuit line pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 10px 10px, rgba(0, 1, 2, 0.6) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }}></div>

      {/* Main content with scroll animations */}
      <motion.div 
        className="container mx-auto px-4 md:px-8 pt-24 pb-16 relative z-10 max-w-6xl"
        style={{ y: textY, opacity: opacityHeader }}
      >
        {/* Name with animated highlight */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-4xl font-bold mb-3"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
                className="inline-block mr-4"
              >
                <Sparkles className="w-6 h-6 text-blue-400" />
              </motion.span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-purple-100">
                Sriparna Koar
              </span>
            </motion.div>

            {/* Animated gradient underline */}
            <motion.div 
              className="h-1 w-48 mx-auto rounded-full my-6 relative overflow-hidden"
              style={{ background: 'rgba(0, 0, 0, 0.41)' }}
            >
              <motion.div 
                className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Professional titles with animated icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl mb-8 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.span 
              className="text-blue-100 flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Brain className="w-4 h-4 mr-2" />
              ML Engineer
            </motion.span>
            <span className="text-gray-500">•</span>
            <motion.span 
              className="text-blue-100 flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Code className="w-4 h-4 mr-2" />
              Developer
            </motion.span>
            <span className="text-gray-500">•</span>
            <motion.span 
              className="text-blue-100 flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-4 h-4 mr-2" />
              AI Researcher
            </motion.span>
          </motion.div>
          
          {/* Enhanced description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-blue-50/90 leading-relaxed"
          >
            Pioneering intelligent solutions at the intersection of machine learning, software engineering, and data science. Turning complex AI challenges into elegant, production-ready systems that deliver real-world impact.
          </motion.p>
          
          {/* Skill chips - new addition */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-3 mt-8 max-w-3xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(100, 200, 255, 0.4)",
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(30, 40, 80, 0.4)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(100, 150, 255, 0.2)'
                }}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
          {/* Enhanced social links with glass morphism effect */}
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 1.6 }}
  className="flex space-x-5 mt-10"
>
  {[
    { icon: <Github className="w-5 h-5" />, label: "GitHub", url: "https://github.com/sriparna-koar", color: "rgba(255, 255, 255, 0.8)" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", url: "https://www.linkedin.com/in/sriparna-koar-2a4415289/", color: "rgba(255, 255, 255, 0.8)" },
    { icon: <FileCode className="w-5 h-5" />, label: "LeetCode", url: "https://leetcode.com/u/SriparnaKoar/", color: "rgba(255, 255, 255, 0.8)" }
  ].map((social, index) => (
    <motion.a
      key={social.label}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ 
        scale: 1.15,
        boxShadow: `0 0 20px ${social.color}`,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
      className="w-12 h-12 rounded-full flex items-center justify-center text-white"
      style={{
        background: 'rgba(20, 30, 60, 0.4)',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${social.color}`
      }}
      aria-label={social.label}
    >
      {social.icon}
    </motion.a>
  ))}
</motion.div>
          {/* Enhanced social links with glass morphism effect */}
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex space-x-5 mt-10"
          >
            {[
              { icon: <Github className="w-5 h-5" />, label: "GitHub", color: "rgba(255, 255, 255, 0.8)" },
              { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", color: "rgba(255, 255, 255, 0.8)" },
              { icon: <Twitter className="w-5 h-5" />, label: "Twitter", color: "rgba(255, 255, 255, 0.8)" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href="#"
                whileHover={{ 
                  scale: 1.15,
                  boxShadow: `0 0 20px ${social.color}`,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                style={{
                  background: 'rgba(20, 30, 60, 0.4)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${social.color}`
                }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div> */}
        </div>

        {/* Interactive decorative elements */}
        <motion.div
          className="absolute top-1/4 right-16 w-48 h-48"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            className="absolute w-full h-full rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(193, 212, 255, 0.8) 0%, rgba(100,150,255,0) 70%)'
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 left-16 w-64 h-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <motion.div
            className="absolute w-full h-full rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, rgba(214, 200, 255, 0.8) 0%, rgba(140,100,255,0) 70%)'
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.25, 0.1]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
        </motion.div>

        {/* Neural network visualization (abstract) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-5">
          {isLoaded && [...Array(20)].map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className="absolute w-2 h-2 rounded-full bg-blue-400"
              style={{
                top: `${30 + Math.random() * 40}%`,
                left: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2
              }}
            />
          ))}
          {isLoaded && [...Array(30)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute bg-blue-400/30"
              style={{
                height: '1px',
                width: `${30 + Math.random() * 150}px`,
                top: `${30 + Math.random() * 40}%`,
                left: `${20 + Math.random() * 50}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Enhanced CTA buttons with custom hover effects */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(100, 150, 255, 0.6)",
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-md text-white font-medium flex items-center justify-center gap-2 shadow-lg group"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 15, 63, 0.8), rgba(100, 80, 255, 0.5))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(150, 180, 255, 0.3)',
            }}
          >
            <Briefcase className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>View ML Projects</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            >
              <ArrowRight className="w-4 h-4 ml-1" />
            </motion.div>
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(130, 80, 255, 0.6)",
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-md text-white font-medium flex items-center justify-center gap-2 group"
            style={{
              background: 'rgba(30, 40, 80, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(130, 100, 255, 0.3)',
            }}
          >
            <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Connect With Me</span>
          </motion.button>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <span className="text-blue-300 text-sm mb-2">Scroll Down</span>
          <motion.div 
            className="w-6 h-10 border-2 border-blue-300/50 rounded-full flex justify-center p-1"
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-blue-300 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-100/40 via-purple-100/40 to-blue-200/40"></div>
    </div>
  );
};

export default HeroSection;