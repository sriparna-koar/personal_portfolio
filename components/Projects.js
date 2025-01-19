
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { Typography, Card, CardContent } from '@mui/material';

// const projects = [
//   {
//     title: 'Tour Travel Project',
//     description:
//       'Built using MERN where users can record their yearly or monthly travel details, view desired location weather, use a real-time chat box, search for hotels, and book them.',
//     image: '/tour-travel.png',
//   },
//   {
//     title: 'RealTimeDocEditor',
//     description:
//       'Real-time document editor using MERN where users can create, edit documents in real time using Socket.IO, and get AI suggestions.',
//     image: '/realtime-doc.png',
//   },
//   {
//     title: 'FitnessTracking',
//     description:
//       'Built using Flask where users can track their daily exercises via data visualization, compare workouts, and plan diets.',
//     image: '/fitness-tracking.png',
//   },
//   {
//     title: 'MedicalAssistant',
//     description:
//       'Medical assistant using AI for diagnosis, report summarization, and initial insights before consulting a doctor.',
//     image: '/medical-assistant.png',
//   },
// ];

// const Projects = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div
//       style={{
//         background: 'linear-gradient(135deg, rgb(5, 5, 5), rgb(0, 0, 0))',
//         minHeight: '100vh',
//         padding: '2rem',
//         color: 'white',
//         overflowX: 'hidden',
//       }}
//     >
//       <Typography
//         variant="h2"
//         style={{
//           textAlign: 'center',
//           textShadow: '0 0 20px rgba(46, 0, 15, 0.8)',
//           marginBottom: '2rem',
//         }}
//       >
//         Projects
//       </Typography>
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: '3rem',
//         }}
//       >
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               maxWidth: '800px',
//               textAlign: 'center',
//               position: 'relative',
//             }}
//           >
//             <Image
//               src={project.image}
//               alt={project.title}
//               width={600}
//               height={300}
//               style={{
//                 borderRadius: '8px',
//                 boxShadow: '0 8px 20px rgba(0, 0, 0, 0.7)',
//               }}
//             />
//             <div
//               style={{
//                 width: '2px',
//                 height: '100px',
//                 backgroundColor: scrollPosition > 50 ? 'black' : 'red',
//                 margin: '1rem 0',
//                 transition: 'background-color 0.5s ease',
//               }}
//             ></div>
//             <Card
//               style={{
//                 backgroundColor: 'rgba(20, 20, 20, 0.9)',
//                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
//                 borderRadius: '10px',
//                 border: '1px solid rgba(255, 255, 255, 0.1)',
//                 padding: '1rem',
//                 width: '100%',
//               }}
//             >
//               <CardContent>
//                 <Typography
//                   variant="h5"
//                   style={{
//                     textShadow: '0 0 20px rgba(46, 0, 15, 0.8)',
//                     marginBottom: '0.5rem',
//                   }}
//                 >
//                   {project.title}
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   style={{ color: 'rgba(200, 200, 200, 0.9)' }}
//                 >
//                   {project.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Typography, Card, CardContent, Button } from '@mui/material';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

// const projects = [
//   {
//     title: 'Tour Travel Project',
//     description:
//       'Record yearly or monthly travel details, view location weather, use a real-time chat box, search for hotels, and book them.',
//     image: '/tour.jpg',
//     icon: <RocketLaunchOutlinedIcon fontSize="large" style={{ color: '#ffcc00' }} />,
//   },
//   {
//     title: 'RealTimeDocEditor',
//     description:
//       'Real-time document editor with collaborative editing using Socket.IO and AI suggestions.',
//     image: '/documet.jpg',
//     icon: <VisibilityOutlinedIcon fontSize="large" style={{ color: '#00ffcc' }} />,
//   },
//   {
//     title: 'FitnessTracking',
//     description:
//       'Track daily exercises via data visualization, compare workouts, and plan diets.',
//     image: '/fitness-tracking.png',
//     icon: <InfoOutlinedIcon fontSize="large" style={{ color: '#66ccff' }} />,
//   },
//   {
//     title: 'MedicalAssistant',
//     description:
//       'AI-powered medical assistant for diagnosis, report summarization, and initial insights.',
//     image: '/medical-assistant.png',
//     icon: <RocketLaunchOutlinedIcon fontSize="large" style={{ color: '#ff9999' }} />,
//   },
// ];

// const Projects = () => {
//   const [hoverIndex, setHoverIndex] = useState(-1);

//   return (
//     <div
//       style={{
//         background: "url('/dark-background.jpg') no-repeat center center fixed",
//         backgroundSize: 'cover',
//         minHeight: '100vh',
//         padding: '3rem 2rem',
//         color: 'white',
//       }}
//     >
//       <Typography
//         variant="h3"
//         style={{
//           textAlign: 'center',
//           textShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
//           marginBottom: '2rem',
//           fontSize: '2rem',
//         }}
//       >
//         Premium Projects
//       </Typography>

//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//           gap: '1.5rem',
//         }}
//       >
//         {projects.map((project, index) => (
//           <Card
//             key={index}
//             onMouseEnter={() => setHoverIndex(index)}
//             onMouseLeave={() => setHoverIndex(-1)}
//             style={{
//               background: 'linear-gradient(145deg, #1e1e1e, #292929)',
//               borderRadius: '12px',
//               boxShadow:
//                 hoverIndex === index
//                   ? '0 10px 20px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(255, 255, 255, 0.2)'
//                   : '0 5px 10px rgba(0, 0, 0, 0.5)',
//               transition: 'all 0.4s ease',
//               overflow: 'hidden',
//               display: 'flex',
//               flexDirection: 'column',
//               height: '400px',
//             }}
//           >
//             <Image
//               src={project.image}
//               alt={project.title}
//               layout="responsive"
//               width={350}
//               height={200}
//               objectFit="cover"
//               style={{
//                 filter: 'brightness(0.75)',
//               }}
//             />
//             <CardContent
//               style={{
//                 padding: '1rem',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 flexGrow: 1,
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 style={{
//                   color: '#fff',
//                   marginBottom: '0.5rem',
//                   fontSize: '1rem',
//                   textAlign: 'center',
//                 }}
//               >
//                 {project.icon} {project.title}
//               </Typography>
//               <Typography
//                 variant="body2"
//                 style={{
//                   color: 'rgba(200, 200, 200, 0.9)',
//                   flexGrow: 1,
//                   textAlign: 'center',
//                 }}
//               >
//                 {project.description}
//               </Typography>
//               <div style={{ textAlign: 'center', marginTop: '1rem' }}>
//                 <Button
//                   variant="outlined"
//                   style={{
//                     borderColor: '#0066ff',
//                     color: '#0066ff',
//                     borderRadius: '8px',
//                     padding: '0.5rem 1.5rem',
//                     textTransform: 'uppercase',
//                   }}
//                   endIcon={<InfoOutlinedIcon />}
//                 >
//                   Learn More
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;
import React, { useState } from 'react';
import Image from 'next/image';
import { Typography, Card, CardContent, Button } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

const projects = [
  {
    title: 'Tour Travel Project',
    description:
      'Record yearly or monthly travel details, view location weather, use a real-time chat box, search for hotels, and book them.',
    image: '/tour.jpg',
    icon: <RocketLaunchOutlinedIcon fontSize="large" style={{ color: '#ffcc00' }} />,
  },
  {
    title: 'RealTimeDocEditor',
    description:
      'Real-time document editor with collaborative editing using Socket.IO and AI suggestions.',
    image: '/documet.jpg',
    icon: <VisibilityOutlinedIcon fontSize="large" style={{ color: '#00ffcc' }} />,
  },
  {
    title: 'FitnessTracking',
    description:
      'Track daily exercises via data visualization, compare workouts, and plan diets.',
    image: '/fitness-tracking.png',
    icon: <InfoOutlinedIcon fontSize="large" style={{ color: '#66ccff' }} />,
  },
  {
    title: 'MedicalAssistant',
    description:
      'AI-powered medical assistant for diagnosis, report summarization, and initial insights.',
    image: '/medical-assistant.png',
    icon: <RocketLaunchOutlinedIcon fontSize="large" style={{ color: '#ff9999' }} />,
  },
];

const Projects = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <div
      style={{
        background: "url('/dark-background.jpg') no-repeat center center fixed",
        backgroundSize: 'cover',
        minHeight: '100vh',
        padding: '3rem 2rem',
        color: 'white',
      }}
    >
      <Typography
        variant="h3"
        style={{
          textAlign: 'center',
          textShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
          marginBottom: '2rem',
          fontSize: '2rem',
        }}
      >
        Premium Projects
      </Typography>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
            style={{
              background: 'linear-gradient(145deg, #1e1e1e, #292929)',
              borderRadius: '12px',
              boxShadow:
                hoverIndex === index
                  ? '0 10px 20px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(255, 255, 255, 0.2)'
                  : '0 5px 10px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.4s ease',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: '400px',
            }}
          >
            <div style={{ height: '50%', position: 'relative' }}>
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                style={{
                  filter: 'brightness(0.75)',
                }}
              />
            </div>
            <CardContent
              style={{
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
              }}
            >
              <Typography
                variant="h6"
                style={{
                  color: '#fff',
                  marginBottom: '0.5rem',
                  fontSize: '1rem',
                  textAlign: 'center',
                }}
              >
                {project.icon} {project.title}
              </Typography>
              <Typography
                variant="body2"
                style={{
                  color: 'rgba(200, 200, 200, 0.9)',
                  flexGrow: 1,
                  textAlign: 'center',
                }}
              >
                {project.description}
              </Typography>
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <Button
                  variant="outlined"
                  style={{
                    borderColor: '#0066ff',
                    color: '#0066ff',
                    borderRadius: '8px',
                    padding: '0.5rem 1.5rem',
                    textTransform: 'uppercase',
                  }}
                  endIcon={<InfoOutlinedIcon />}
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
