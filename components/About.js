
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Typography, Container, Grid, Box } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import BrushIcon from '@mui/icons-material/Brush';

const About = () => {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, rgb(5, 5, 5), rgb(0, 0, 0))',
        color: '#fff',
        padding: '6rem 0',
        overflow: 'hidden',
      }}
    >
      {/* Three.js Background Effects */}
      <Canvas style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>

      {/* Glowing Background Effect */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(5px)',
          zIndex: 0,
          animation: 'glow 20s infinite alternate',
        }}
      ></Box>

      {/* Section Content */}
      <Container maxWidth="lg" style={{ position: 'relative', zIndex: 10 }}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          style={{
            fontWeight: 700,
            // fontWeight: 'bold',
            marginBottom: '2.5rem',
            fontSize: '2.5rem',
            textShadow: '0 0 20px rgba(46, 0, 15, 0.8)',
            letterSpacing: '2px',
          }}
        >
          About Me
        </Typography>

        <Typography
          variant="body1"
          align="center"
          style={{
            // color: '#b3b3b3',
            marginBottom: '4rem',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          I am a passionate developer specializing in creating interactive and visually stunning web applications using modern technologies like React, Next.js, and Tailwind CSS. My projects blend creativity and functionality to deliver immersive digital experiences.
        </Typography>

        {/* Icon-Based Feature Section */}
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {[
            {
              icon: <CodeIcon />,
              title: 'Front-End Development',
              description: 'Expertise in building responsive and dynamic user interfaces.',
              gradient: 'radial-gradient(circle, rgb(48, 0, 16), #1c1c1c)',
            },
            {
              icon: <WebIcon />,
              title: 'Web Design',
              description: 'Crafting visually appealing and user-friendly web designs.',
              gradient: 'radial-gradient(circle, rgb(48, 0, 16), #1c1c1c)',
            },
            {
              icon: <BrushIcon />,
              title: 'Creative Solutions',
              description: 'Innovative solutions tailored to unique challenges.',
              gradient: 'radial-gradient(circle, rgb(48, 0, 16), #1c1c1c)',
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <div style={{ textAlign: 'center', position: 'relative' }}>
                <div
                  style={{
                    display: 'inline-block',
                    padding: '1rem',
                    borderRadius: '50%',
                    background: item.gradient,
                    boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      boxShadow: '0 0 50px rgba(255, 255, 255, 0.4)',
                    },
                  }}
                >
                  {item.icon}
                </div>
                <Typography
                  variant="h6"
                  style={{
                    marginTop: '1.5rem',
                    color: '#fff',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" style={{ color: '#b3b3b3', marginTop: '0.5rem' }}>
                  {item.description}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>

        {/* Connecting Line */}
        <div
          style={{
            marginTop: '4rem',
            width: '100%',
            height: '2px',
            background: 'linear-gradient(90deg, #ff4081, transparent)',
          }}
        ></div>
      </Container>
    </section>
  );
};

export default About;
