
// import { Box, Typography, Button, Container } from '@mui/material';
// import { LaptopMac, School, Code, RocketLaunch } from '@mui/icons-material';
// import Typical from 'react-typical';

// const Hero = () => {
//   const nameText = "Hello, I'm Sriparna Koar";
//   const animatedText = [
//     "A passionate Fullstack Developer with creative thinking.",
//     "Loves creating sleek designs and efficient software.",
//     "Making products the best and most efficient!"
//   ];

//   return (
//     <Box
//       component="section"
//       sx={{
//         position: 'relative',
//         height: '70vh',
//         color: 'white',
//         background: `linear-gradient(135deg,rgb(5, 5, 5),rgb(0, 0, 0))`,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         overflow: 'hidden',
//         boxShadow: '0 0 20px rgba(28, 0, 8, 0.78)',
//         borderRadius: '20px',
//         margin: '40px auto',

//       }}
//     >
//       <Container maxWidth="sm" sx={{ textAlign: 'center', zIndex: 2, p: 4 }}>
//         {/* Name Text */}
//         <Typography
//           variant="h2"
//           sx={{
//             fontWeight: 700,
//             fontSize: '2.5rem',
//             mb: 2,
//             textShadow: '0 0 10px rgba(82, 2, 29, 0.86)',
//           }}
//         >
//           {nameText}
//         </Typography>

//         {/* Animated Subtext */}
//         <Typography
//           variant="h5"
//           sx={{
//             mb: 3,
//             fontStyle: 'italic',
//             color: '#ff4070',
//           }}
//         >
//           <Typical steps={animatedText.flatMap((text) => [text, 3000])} loop={Infinity} wrapper="span" />
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{
//             fontSize: '1.2rem',
//             color: '#CCCCCC',
//             mb: 10,
//             px: 2,
//           }}
//         >
//           Motivated Computer Science and Engineering Student eager to secure an internship position to further enhance
//           skills, leverage academic knowledge, and contribute to real-world projects.
//         </Typography>
//         {/* Action Button */}
//         <Button
//           variant="contained"
//           sx={{
//             px: 5,
//             py: 1.5,
//             fontSize: '1rem',
//             fontWeight: 600,
//             textTransform: 'none',
//             color: '#FFFFFF',
//             background: 'linear-gradient(90deg,rgba(27, 27, 27, 0.92),rgb(39, 0, 8))',
//             boxShadow: '0px 4px 15px rgba(32, 1, 11, 0.6)',
//             '&:hover': {
          
//               boxShadow: '0px 6px 20px rgba(54, 0, 18, 0.55)',
//             },
//           }}
//           href="#portfolio"
//         >
//           View My Work
//         </Button>
//       </Container>

//       {/* Icon Section */}
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: 20,
//           display: 'flex',
//           justifyContent: 'center',
//           gap: 2,
//           animation: 'bounceIcons 2s infinite alternate',
//           '@keyframes bounceIcons': {
//             '0%': { transform: 'translateY(0)' },
//             '100%': { transform: 'translateY(-10px)' },
//           },
//         }}
//       >
//         <LaptopMac sx={{ fontSize: 30, color: '#ff4070' }} />
//         <School sx={{ fontSize: 30, color: '#ff4070' }} />
//         <Code sx={{ fontSize: 30, color: '#ff4070' }} />
//         <RocketLaunch sx={{ fontSize: 30, color: '#ff4070' }} />
//       </Box>
//     </Box>
//   );
// };

// export default Hero;
// import { Box, Typography, Button, Container } from '@mui/material';
// import { LaptopMac, School, Code, RocketLaunch } from '@mui/icons-material';
// import Typical from 'react-typical';

// const Hero = () => {
//   const nameText = "Hello, I'm Sriparna Koar";
//   const animatedText = [
//     "A passionate Fullstack Developer with creative thinking.",
//     "Loves creating sleek designs and efficient software.",
//     "Making products the best and most efficient!"
//   ];

//   return (
//     <Box
//       component="section"
//       sx={{
//         position: 'relative',
//         height: '70vh',
//         color: 'white',
//         background: 'linear-gradient(135deg, rgb(5, 5, 5), rgb(0, 0, 0))',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         overflow: 'hidden',
//         boxShadow: '0 0 25px rgba(0, 0, 0, 0.8)',
//         borderRadius: '20px',
//         margin: '40px auto',
//       }}
//     >
//       <Container maxWidth="sm" sx={{ textAlign: 'center', zIndex: 2, p: 4 }}>
//         {/* Name Text */}
//         <Typography
//           variant="h2"
//           sx={{
//             fontWeight: 700,
//             fontSize: '2.8rem',
//             mb: 2,
//             textShadow: '0 0 15px rgba(255, 255, 255, 0.7)',
//           }}
//         >
//           {nameText}
//         </Typography>

//         {/* Animated Subtext */}
//         <Typography
//           variant="h5"
//           sx={{
//             mb: 3,
//             fontStyle: 'italic',
//             color: '#ff4b82',
//             textShadow: '0 0 10px rgba(255, 75, 130, 0.7)',
//           }}
//         >
//           <Typical steps={animatedText.flatMap((text) => [text, 3000])} loop={Infinity} wrapper="span" />
//         </Typography>

//         <Typography
//           variant="body1"
//           sx={{
//             fontSize: '1.2rem',
//             color: '#DDDDDD',
//             mb: 8,
//             px: 2,
//           }}
//         >
//           Motivated Computer Science and Engineering Student eager to secure an internship position to further enhance
//           skills, leverage academic knowledge, and contribute to real-world projects.
//         </Typography>

//         {/* Action Button */}
//         <Button
//           variant="contained"
//           sx={{
//             px: 5,
//             py: 1.5,
//             fontSize: '1rem',
//             fontWeight: 600,
//             textTransform: 'none',
//             color: '#FFFFFF',
//             background: 'linear-gradient(90deg, rgba(27, 27, 27, 0.92), rgb(39, 0, 8))',
//             boxShadow: '0px 6px 18px rgba(54, 0, 18, 0.6)',
//             transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//             '&:hover': {
//               transform: 'translateY(-3px)',
//               boxShadow: '0px 8px 24px rgba(255, 75, 130, 0.6)',
//             },
//           }}
//           href="#portfolio"
//         >
//           View My Work
//         </Button>
//       </Container>

//       {/* Icon Section */}
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: 20,
//           display: 'flex',
//           justifyContent: 'center',
//           gap: 3,
//           animation: 'floatIcons 3s infinite ease-in-out',
//           '@keyframes floatIcons': {
//             '0%, 100%': { transform: 'translateY(0)' },
//             '50%': { transform: 'translateY(-8px)' },
//           },
//         }}
//       >
//         {[LaptopMac, School, Code, RocketLaunch].map((Icon, index) => (
//           <Icon key={index} sx={{ fontSize: 36, color: '#ff4b82', transition: 'color 0.3s', '&:hover': { color: '#FFFFFF' } }} />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import dynamic from "next/dynamic";

const TextTransition = dynamic(() => import("react-text-transition"), { ssr: false });

const animatedText = [
  "A passionate Fullstack Developer with creative thinking.",
  "Loves creating sleek designs and efficient software.",
  "Making products the best and most efficient!",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((prevIndex) => (prevIndex + 1) % animatedText.length),
      3000
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Typography
      variant="h5"
      sx={{
        mb: 3,
        fontStyle: "italic",
        color: "#ff4b82",
        textShadow: "0 0 10px rgba(255, 75, 130, 0.7)",
      }}
    >
      <TextTransition springConfig={{ stiffness: 170, damping: 26 }}>
        {animatedText[index]}
      </TextTransition>
    </Typography>
  );
};

export default Hero;
