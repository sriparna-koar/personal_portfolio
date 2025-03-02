
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { Typography, Container, Grid, Box } from '@mui/material';
// import CodeIcon from '@mui/icons-material/Code';
// import WebIcon from '@mui/icons-material/Web';
// import BrushIcon from '@mui/icons-material/Brush';

// const About = () => {
//   return (
//     <section
//       id="about"
//       style={{
//         position: 'relative',
//         background: 'linear-gradient(135deg, rgb(5, 5, 5), rgb(0, 0, 0))',
//         color: '#fff',
//         padding: '6rem 0',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Three.js Background Effects */}
//       <Canvas style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
//         <OrbitControls enableZoom={false} enableRotate={false} />
//       </Canvas>

//       {/* Glowing Background Effect */}
//       <Box
//         sx={{
//           position: 'absolute',
//           inset: 0,
//           bgcolor: 'rgba(0, 0, 0, 0.5)',
//           backdropFilter: 'blur(5px)',
//           zIndex: 0,
//           animation: 'glow 20s infinite alternate',
//         }}
//       ></Box>

//       {/* Section Content */}
//       <Container maxWidth="lg" style={{ position: 'relative', zIndex: 10 }}>
//         <Typography
//           variant="h2"
//           align="center"
//           gutterBottom
//           style={{
//             fontWeight: 700,
//             // fontWeight: 'bold',
//             marginBottom: '2.5rem',
//             fontSize: '2.5rem',
//             textShadow: '0 0 20px rgba(46, 0, 15, 0.8)',
//             letterSpacing: '2px',
//           }}
//         >
//           About Me
//         </Typography>

//         <Typography
//           variant="body1"
//           align="center"
//           style={{
//             // color: '#b3b3b3',
//             marginBottom: '4rem',
//             maxWidth: '800px',
//             margin: '0 auto',
//           }}
//         >
//           I am a passionate developer specializing in creating interactive and visually stunning web applications using modern technologies like React, Next.js, and Tailwind CSS. My projects blend creativity and functionality to deliver immersive digital experiences.
//         </Typography>

//         {/* Icon-Based Feature Section */}
//         <Grid container spacing={4} justifyContent="center" alignItems="center">
//           {[
//             {
//               icon: <CodeIcon />,
//               title: 'Front-End Development',
//               description: 'Expertise in building responsive and dynamic user interfaces.',
//               gradient: 'radial-gradient(circle, rgb(48, 0, 16), #1c1c1c)',
//             },
//             {
//               icon: <WebIcon />,
//               title: 'Web Design',
//               description: 'Crafting visually appealing and user-friendly web designs.',
//               gradient: 'radial-gradient(circle, rgb(48, 0, 16), #1c1c1c)',
//             },
//             {
//               icon: <BrushIcon />,
//               title: 'Creative Solutions',
//               description: 'Innovative solutions tailored to unique challenges.',
//               gradient: 'radial-gradient(circle, rgb(48, 0, 16), #1c1c1c)',
//             },
//           ].map((item, index) => (
//             <Grid item xs={12} sm={4} key={index}>
//               <div style={{ textAlign: 'center', position: 'relative' }}>
//                 <div
//                   style={{
//                     display: 'inline-block',
//                     padding: '1rem',
//                     borderRadius: '50%',
//                     background: item.gradient,
//                     boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)',
//                     transition: 'transform 0.3s',
//                     '&:hover': {
//                       transform: 'scale(1.1)',
//                       boxShadow: '0 0 50px rgba(255, 255, 255, 0.4)',
//                     },
//                   }}
//                 >
//                   {item.icon}
//                 </div>
//                 <Typography
//                   variant="h6"
//                   style={{
//                     marginTop: '1.5rem',
//                     color: '#fff',
//                     fontWeight: 'bold',
//                     textTransform: 'uppercase',
//                   }}
//                 >
//                   {item.title}
//                 </Typography>
//                 <Typography variant="body2" style={{ color: '#b3b3b3', marginTop: '0.5rem' }}>
//                   {item.description}
//                 </Typography>
//               </div>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Connecting Line */}
//         <div
//           style={{
//             marginTop: '4rem',
//             width: '100%',
//             height: '2px',
//             background: 'linear-gradient(90deg, #ff4081, transparent)',
//           }}
//         ></div>
//       </Container>
//     </section>
//   );
// };

// export default About;
import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Typography, Container, Grid, Box, Chip, Stack } from '@mui/material';
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
      icon: <CodeIcon style={{ fontSize: 32 }} />,
      title: 'Front-End Development',
      description: 'Building responsive interfaces with modern frameworks.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      gradient: 'radial-gradient(circle, rgba(48, 0, 16, 0.9), #1c1c1c)',
    },
    {
      icon: <StorageIcon style={{ fontSize: 32 }} />,
      title: 'Back-End Development',
      description: 'Creating robust server-side applications and APIs.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'GraphQL'],
      gradient: 'radial-gradient(circle, rgba(0, 48, 16, 0.9), #1c1c1c)',
    },
    {
      icon: <DataObjectIcon style={{ fontSize: 32 }} />,
      title: 'Python Development',
      description: 'Building efficient solutions with Python frameworks.',
      technologies: ['Django', 'Flask', 'FastAPI', 'Pandas'],
      gradient: 'radial-gradient(circle, rgba(48, 16, 0, 0.9), #1c1c1c)',
    },
    {
      icon: <PsychologyIcon style={{ fontSize: 32 }} />,
      title: 'Machine Learning',
      description: 'Developing intelligent systems using ML algorithms.',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP'],
      gradient: 'radial-gradient(circle, rgba(0, 16, 48, 0.9), #1c1c1c)',
    },
    {
      icon: <WebIcon style={{ fontSize: 32 }} />,
      title: 'Web Design',
      description: 'Crafting visually appealing interfaces and experiences.',
      technologies: ['UI/UX', 'Figma', 'Adobe XD', 'CSS Animation'],
      gradient: 'radial-gradient(circle, rgba(48, 0, 48, 0.9), #1c1c1c)',
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
        minHeight: '85vh',
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

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(8px)',
          zIndex: 0,
          background: 'radial-gradient(circle at center, rgba(20, 0, 30, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(255, 64, 129, 0.08) 0%, transparent 60%)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 70% 60%, rgba(64, 80, 255, 0.08) 0%, transparent 60%)',
          }
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
              fontWeight: 800,
              marginBottom: '1.5rem',
              fontSize: '2.6rem',
              letterSpacing: '2px',
              color: '#ffffff',
              textShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
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
                bottom: '-3px',
                left: '25%',
                width: '50%',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, #ff4081, #3f51b5, transparent)',
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
              marginBottom: '2.5rem',
              maxWidth: '650px',
              margin: '0 auto 2.5rem auto',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              color: '#ffffff',
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
          <Grid container spacing={2.5} justifyContent="center" alignItems="stretch">
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={skillsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut", 
                    delay: 0.08 * index 
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)'
                  }}
                  style={{ 
                    height: '100%',
                    background: skill.gradient,
                    borderRadius: '10px',
                    padding: '1.5rem 1.4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  {/* Glowing accent */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '3px',
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                    }}
                  />
                  
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      background: 'rgba(0, 0, 0, 0.2)',
                      padding: '1rem',
                      marginBottom: '1rem',
                      boxShadow: '0 0 15px rgba(255, 255, 255, 0.07)',
                    }}
                  >
                    {skill.icon}
                  </Box>
                  
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: 700,
                      marginBottom: '0.6rem',
                      color: '#fff',
                      fontSize: '1.1rem',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {skill.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      marginBottom: '1rem',
                      flexGrow: 1,
                      fontSize: '0.85rem',
                    }}
                  >
                    {skill.description}
                  </Typography>
                  
                  <Stack 
                    direction="row" 
                    spacing={1} 
                    flexWrap="wrap"
                    justifyContent="center"
                    gap={0.8}
                  >
                    {skill.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        style={{
                          background: 'rgba(255, 255, 255, 0.08)',
                          color: 'rgba(255, 255, 255, 0.9)',
                          borderRadius: '4px',
                          fontSize: '0.68rem',
                          height: '22px',
                          marginBottom: '0.4rem',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                      />
                    ))}
                  </Stack>
                  
                  {/* Corner accent */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), transparent)',
                      clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                    }}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Animated Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={skillsVisible ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
          style={{
            marginTop: '3.5rem',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #ff4081, #3f51b5, transparent)',
          }}
        />
      </Container>
    </section>
  );
};

export default About;