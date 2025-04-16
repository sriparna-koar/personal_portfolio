
import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Typography, Container, Grid, Box } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { motion } from 'framer-motion';

// Animated background particle component
const ParticleField = () => {
  const particlesRef = useRef();
  
  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Stars
      ref={particlesRef}
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
};

const About = () => {
  // Revised skills array with backend development
  const skills = [
    {
      icon: <CodeIcon style={{ fontSize: 28 }} />,
      title: 'Front-End Development',
      description: 'Building responsive interfaces with modern frameworks.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    },
    {
      icon: <StorageIcon style={{ fontSize: 28 }} />,
      title: 'Back-End Development',
      description: 'Creating robust server-side applications and APIs.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'GraphQL'],
    },
    {
      icon: <DataObjectIcon style={{ fontSize: 28 }} />,
      title: 'Python Development',
      description: 'Building efficient solutions with Python frameworks.',
      technologies: ['Django', 'Flask', 'FastAPI', 'Pandas'],
    },
    {
      icon: <PsychologyIcon style={{ fontSize: 28 }} />,
      title: 'Machine Learning',
      description: 'Developing intelligent systems using ML algorithms.',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP'],
    },
    {
      icon: <WebIcon style={{ fontSize: 28 }} />,
      title: 'Web Design',
      description: 'Crafting visually appealing interfaces and experiences.',
      technologies: ['UI/UX', 'Figma', 'Adobe XD', 'CSS Animation'],
    },
  ];

  // Intersection Observer for scroll animations
  const useOnScreen = (options) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = React.useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting);
      }, options);
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref, options]);
    
    return [ref, isVisible];
  };

  const [headerRef, headerVisible] = useOnScreen({ threshold: 0.1 });
  const [descRef, descVisible] = useOnScreen({ threshold: 0.1 });
  const [skillsRef, skillsVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, rgb(5, 5, 5), rgb(0, 0, 0))',
        color: '#fff',
        padding: '5rem 0',
        overflow: 'hidden',
        minHeight: '70vh',
      }}
    >
      {/* Three.js Background */}
      <Canvas 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          pointerEvents: 'none' 
        }}
        camera={{ position: [0, 0, 5], fov: 60 }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.2} />
        <ParticleField />
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>

      {/* Subtle Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 0,
          background: 'radial-gradient(circle at center, rgba(10, 10, 20, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      />

      {/* Section Content */}
      <Container maxWidth="lg" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 25 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Typography
            variant="h2"
            align="center"
            style={{
              fontWeight: 700,
              marginBottom: '1.5rem',
              fontSize: '2.4rem',
              letterSpacing: '1px',
              color: '#ffffff',
              position: 'relative',
              display: 'inline-block',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            About Me
            <Box
              component="span"
              sx={{
                position: 'absolute',
                bottom: '-5px',
                left: '10%',
                width: '80%',
                height: '1px',
                background: 'rgba(255, 255, 255, 0.2)',
              }}
            />
          </Typography>
        </motion.div>

        <motion.div
          ref={descRef}
          initial={{ opacity: 0, y: 25 }}
          animate={descVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <Typography
            variant="body1"
            align="center"
            style={{
              marginBottom: '3rem',
              maxWidth: '650px',
              margin: '0 auto 3rem auto',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              color: '#e0e0e0',
            }}
          >
            I&apos;m a versatile full-stack developer with expertise in machine learning and web development.
            I specialize in creating intelligent applications that combine modern frontend
            frameworks with powerful backends to transform complex data into intuitive user experiences.
          </Typography>
        </motion.div>

        {/* Skills Grid with Animation */}
        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0 }}
          animate={skillsVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Grid container spacing={3} justifyContent="center" alignItems="stretch">
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={skillsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut", 
                    delay: 0.08 * index 
                  }}
                  whileHover={{ 
                    translateY: -5,
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
                  }}
                  style={{ 
                    height: '100%',
                    background: 'rgba(20, 30, 40, 0.2)',
                    borderRadius: '8px',
                    padding: '1.75rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(60, 80, 100, 0.08)',
                  }}
                >
                  {/* Subtle top border */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '1px',
                      background: 'rgba(100, 120, 255, 0.1)',
                    }}
                  />
                  
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.45rem',
                      color: 'rgba(140, 170, 255, 0.9)',
                    }}
                  >
                    {skill.icon}
                  </Box>
                  
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: 600,
                      marginBottom: '0.75rem',
                      color: '#fff',
                      fontSize: '1.15rem',
                      letterSpacing: '0.3px',
                    }}
                  >
                    {skill.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    style={{ 
                      color: 'rgba(220, 225, 235, 0.75)',
                      marginBottom: '1.9rem',
                      flexGrow: 1,
                      fontSize: '1.0rem',
                      lineHeight: '1.5',
                    }}
                  >
                    {skill.description}
                  </Typography>
                  
                  <Box
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                    }}
                  >
                    {skill.technologies.map((tech, techIndex) => (
                      <Box
                        key={techIndex}
                        style={{
                          background: 'rgba(70, 90, 130, 0.12)',
                          color: 'rgba(180, 200, 255, 0.9)',
                          borderRadius: '4px',
                          fontSize: '0.7rem',
                          padding: '2px 8px',
                          marginBottom: '0.25rem',
                          border: '1px solid rgba(100, 120, 180, 0.1)',
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Subtle Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={skillsVisible ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
          style={{
            marginTop: '3.5rem',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(100, 130, 255, 0.15), transparent)',
          }}
        />
      </Container>
    </section>
  );
};

export default About;