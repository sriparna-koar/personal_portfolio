
// // // import React, { useState } from 'react';
// // // import Image from 'next/image';
// // // import { Typography, Card, CardContent, Button, CardActions, Box } from '@mui/material';
// // // import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// // // import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// // // import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

// // // const projects = [
// // //   {
// // //     title: 'Tour Travel Project',
// // //     description:
// // //       'Record yearly or monthly travel details, view location weather, use a real-time chat box, search for hotels, and book them.',
// // //     image: '/tour.jpg',
// // //     icon: <RocketLaunchOutlinedIcon fontSize="large" style={{ color: '#ffcc00' }} />,
// // //   },
// // //   {
// // //     title: 'RealTimeDocEditor',
// // //     description:
// // //       'Real-time document editor with collaborative editing using Socket.IO and AI suggestions.',
// // //     image: '/documet.jpg',
// // //     icon: <VisibilityOutlinedIcon fontSize="large" style={{ color: '#00ffcc' }} />,
// // //   },
// // //   {
// // //     title: 'FitnessTracking',
// // //     description:
// // //       'Track daily exercises via data visualization, compare workouts, and plan diets.',
// // //     image: '/fitness-tracking.png',
// // //     icon: <InfoOutlinedIcon fontSize="large" style={{ color: '#66ccff' }} />,
// // //   },
// // //   {
// // //     title: 'MedicalAssistant',
// // //     description:
// // //       'AI-powered medical assistant for diagnosis, report summarization, and initial insights.',
// // //     image: '/medical-assistant.png',
// // //     icon: <RocketLaunchOutlinedIcon fontSize="large" style={{ color: '#ff9999' }} />,
// // //   },
// // // ];

// // // const Projects = () => {
// // //   const [hoverIndex, setHoverIndex] = useState(-1);

// // //   return (
// // //     <Box
// // //       sx={{
// // //         background: "url('/dark-background.jpg') no-repeat center center fixed",
// // //         backgroundSize: 'cover',
// // //         minHeight: '100vh',
// // //         py: 6,
// // //         px: 4,
// // //         color: 'white',
// // //       }}
// // //     >
// // //       <Typography
// // //         variant="h3"
// // //         sx={{
// // //           textAlign: 'center',
// // //           textShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
// // //           mb: 6,
// // //           fontSize: { xs: '1.8rem', md: '2.5rem' },
// // //         }}
// // //       >
// // //         Premium Projects
// // //       </Typography>

// // //       <Box
// // //         sx={{
// // //           display: 'grid',
// // //           gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' },
// // //           gap: 4,
// // //         }}
// // //       >
// // //         {projects.map((project, index) => (
// // //           <Card
// // //             key={index}
// // //             onMouseEnter={() => setHoverIndex(index)}
// // //             onMouseLeave={() => setHoverIndex(-1)}
// // //             sx={{
// // //               background: 'linear-gradient(145deg,rgb(0, 0, 0),rgb(0, 0, 0))',
// // //               borderRadius: 4,
// // //               boxShadow:
// // //                 hoverIndex === index
// // //                   ? '0 10px 30px rgba(0, 0, 0, 0.9), 0 4px 8px rgba(255, 255, 255, 0.2)'
// // //                   : '0 5px 15px rgba(0, 0, 0, 0.6)',
// // //               transition: 'transform 0.4s ease, box-shadow 0.4s ease',
// // //               transform: hoverIndex === index ? 'translateY(-10px)' : 'none',
// // //               overflow: 'hidden',
// // //               display: 'flex',
// // //               flexDirection: 'column',
// // //               height: 400,
// // //             }}
// // //           >
// // //             <Box sx={{ position: 'relative', height: '50%' }}>
// // //               <Image
// // //                 src={project.image}
// // //                 alt={project.title}
// // //                 layout="fill"
// // //                 objectFit="cover"
// // //                 style={{
// // //                   filter: 'brightness(0.6)',
// // //                 }}
// // //               />
// // //             </Box>
// // //             <CardContent
// // //               sx={{
// // //                 p: 3,
// // //                 display: 'flex',
// // //                 flexDirection: 'column',
// // //                 justifyContent: 'space-between',
// // //                 flexGrow: 1,
// // //               }}
// // //             >
// // //               <Typography
// // //                 variant="h6"
// // //                 sx={{
// // //                   color: '#fff',
// // //                   mb: 1,
// // //                   fontSize: '1rem',
// // //                   textAlign: 'center',
// // //                   display: 'flex',
// // //                   alignItems: 'center',
// // //                   justifyContent: 'center',
// // //                   gap: 1,
// // //                 }}
// // //               >
// // //                 {project.icon} {project.title}
// // //               </Typography>
// // //               <Typography
// // //                 variant="body2"
// // //                 sx={{
// // //                   color: 'rgba(200, 200, 200, 0.9)',
// // //                   textAlign: 'center',
// // //                 }}
// // //               >
// // //                 {project.description}
// // //               </Typography>
// // //               <CardActions sx={{ justifyContent: 'center', mt: 3 }}>
// // //                 <Button
// // //                   variant="outlined"
// // //                   sx={{
// // //                     borderColor: '#0066ff',
// // //                     color: '#0066ff',
// // //                     borderRadius: 3,
// // //                     px: 3,
// // //                     py: 1,
// // //                     textTransform: 'uppercase',
// // //                     '&:hover': {
// // //                       backgroundColor: 'rgb(0, 0, 0)',
// // //                       borderColor: '#0056e0',
// // //                     },
// // //                   }}
// // //                   endIcon={<InfoOutlinedIcon />}
// // //                 >
// // //                   Learn More
// // //                 </Button>
// // //               </CardActions>
// // //             </CardContent>
// // //           </Card>
// // //         ))}
// // //       </Box>
// // //     </Box>
// // //   );
// // // };

// // // export default Projects;
// // import { useState } from 'react';
// // import { FaRocket, FaRegEye, FaRegLightbulb, FaHeartbeat } from 'react-icons/fa';

// // const projects = [
// //   {
// //     title: 'Tour Travel Project',
// //     description: [
// //       'Developed a comprehensive travel management application using the MERN stack, which streamlined the booking process for various hotels and flights, allowing users to manage their travel arrangements in one place.',
// //       'Implemented a monthly expense tracking feature, enabling users to record and monitor their annual travel expenses and visited locations, which helped them stay on budget.',
// //       'Integrated a verification email system post-booking and incorporated Razor-pay for secure payment options, ensuring a seamless and secure user experience while providing 24/7 customer support via chat.'
// //     ],
// //     icon: <FaRocket />,
// //     link: '#',
// //     technologies: ['React', 'Node.js', 'MongoDB', 'Express']
// //   },
// //   {
// //     title: 'Fitness Tracking',
// //     description: [
// //       'Developed a web application using Flask that allows users to track their daily exercises and visualize their progress, which enhances their fitness journey.',
// //       'Implemented features that enable users to compare their workouts each day, helping them identify trends and improvements in their fitness routines.',
// //       'Integrated advanced AI technology to provide personalized diet plans based on user input, which helps users maintain balanced nutrition aligned with their fitness goals.'
// //     ],
// //     icon: <FaHeartbeat />,
// //     link: '#',
// //     technologies: ['Flask', 'Python', 'AI', 'Data Visualization']
// //   },
// //   {
// //     title: 'Diabetes Detection',
// //     description: [
// //       'Developed a diabetes prediction model utilizing StandardScaler, achieving a test accuracy score of 76% and a training accuracy score of 77%, which established the model\'s reliability in predicting diabetes outcomes.',
// //       'Analyzed key input features such as pregnancies, glucose levels, blood pressure, skin thickness, insulin, BMI, diabetes pedigree function, and age, helping to ensure comprehensive data training for enhanced prediction accuracy.'
// //     ],
// //     icon: <FaRegLightbulb />,
// //     link: '#',
// //     technologies: ['Python', 'Machine Learning', 'Data Analysis']
// //   },
// //   {
// //     title: 'Spotify Backup',
// //     description: [
// //       'Developed a Python Flask application integrates with the Spotify API, allowing users to back up their playlists effectively.',
// //       'Managed user authentication processes, ensuring secure login/logout functionality and safeguarding user data.',
// //       'Streamlined the backup process to download song lists, which helps prevent loss of playlists.'
// //     ],
// //     icon: <FaRegEye />,
// //     link: '#',
// //     technologies: ['Python', 'Flask', 'API Integration', 'OAuth']
// //   }
// // ];

// // const Projects = () => {
// //   const [activeProject, setActiveProject] = useState(null);

// //   return (
// //     <section className="bg-black text-white py-16 px-4 relative">
// //       {/* Background gradient elements */}
// //       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
// //         <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-100 opacity-5 rounded-full blur-3xl"></div>
// //         <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-blue-100 opacity-5 rounded-full blur-3xl"></div>
// //       </div>
      
// //       <div className="container mx-auto max-w-6xl relative z-10">
// //         <div className="flex flex-col items-center mb-16">
// //           <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
// //             <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-300">
// //               Featured Projects
// //             </span>
// //             <div className="h-1 w-20 bg-blue-100 mt-3 mx-auto rounded-full"></div>
// //           </h2>
// //           <p className="text-gray-400 max-w-2xl text-center text-lg">
// //             A collection of my most significant work showcasing my technical expertise and problem-solving abilities
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //           {projects.map((project, index) => (
// //             <div 
// //               key={index} 
// //               className="group relative bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-900/10"
// //               onMouseEnter={() => setActiveProject(index)}
// //               onMouseLeave={() => setActiveProject(null)}
// //             >
// //               <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-100 to-transparent opacity-0 group-hover:opacity-10 rounded-xl blur-sm transition-opacity duration-300"></div>
              
// //               <div className="flex items-center mb-4">
// //                 <div className="p-3 rounded-lg bg-blue-100/10 mr-4">
// //                   <span className="text-blue-100 text-xl">
// //                     {project.icon}
// //                   </span>
// //                 </div>
// //                 <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
// //                   {project.title}
// //                 </h3>
// //               </div>
              
// //               <div className="space-y-2 mb-4">
// //                 {activeProject === index ? (
// //                   <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
// //                     {project.description.map((point, i) => (
// //                       <li key={i}>{point}</li>
// //                     ))}
// //                   </ul>
// //                 ) : (
// //                   <p className="text-gray-400 text-sm line-clamp-3">
// //                     {project.description[0]}
// //                   </p>
// //                 )}
// //               </div>
              
// //               <div className="flex flex-wrap gap-2 mb-4">
// //                 {project.technologies.map((tech, i) => (
// //                   <span 
// //                     key={i} 
// //                     className="text-xs py-1 px-2 bg-blue-100/10 text-blue-100 rounded-full"
// //                   >
// //                     {tech}
// //                   </span>
// //                 ))}
// //               </div>
              
// //               <div className="flex justify-between items-center">
// //                 <a 
// //                   href={project.link} 
// //                   className="text-blue-100 text-sm font-medium group-hover:underline flex items-center"
// //                 >
// //                   View Project <span className="ml-1 text-xs">↗</span>
// //                 </a>
                
// //                 <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
// //                   <button className="bg-blue-100/10 text-blue-100 p-2 rounded-full hover:bg-blue-100/20 transition-colors duration-200">
// //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
// //                     </svg>
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;
// import { useState } from 'react';
// import { FaRocket, FaRegEye, FaRegLightbulb, FaHeartbeat, FaArrowRight, FaGithub } from 'react-icons/fa';

// const projects = [
//   {
//     title: 'Tour Travel Project',
//     description: [
//       'Developed a comprehensive travel management application using the MERN stack, which streamlined the booking process for various hotels and flights, allowing users to manage their travel arrangements in one place.',
//       'Implemented a monthly expense tracking feature, enabling users to record and monitor their annual travel expenses and visited locations, which helped them stay on budget.',
//       'Integrated a verification email system post-booking and incorporated Razor-pay for secure payment options, ensuring a seamless and secure user experience while providing 24/7 customer support via chat.'
//     ],
//     icon: <FaRocket />,
//     link: '#',
//     demo: '#',
//     github: '#',
//     technologies: ['React', 'Node.js', 'MongoDB', 'Express']
//   },
//   {
//     title: 'Fitness Tracking',
//     description: [
//       'Developed a web application using Flask that allows users to track their daily exercises and visualize their progress, which enhances their fitness journey.',
//       'Implemented features that enable users to compare their workouts each day, helping them identify trends and improvements in their fitness routines.',
//       'Integrated advanced AI technology to provide personalized diet plans based on user input, which helps users maintain balanced nutrition aligned with their fitness goals.'
//     ],
//     icon: <FaHeartbeat />,
//     link: '#',
//     demo: '#',
//     github: '#',
//     technologies: ['Flask', 'Python', 'AI', 'Data Visualization']
//   },
//   {
//     title: 'Diabetes Detection',
//     description: [
//       'Developed a diabetes prediction model utilizing StandardScaler, achieving a test accuracy score of 76% and a training accuracy score of 77%, which established the model\'s reliability in predicting diabetes outcomes.',
//       'Analyzed key input features such as pregnancies, glucose levels, blood pressure, skin thickness, insulin, BMI, diabetes pedigree function, and age, helping to ensure comprehensive data training for enhanced prediction accuracy.'
//     ],
//     icon: <FaRegLightbulb />,
//     link: '#',
//     demo: '#',
//     github: '#',
//     technologies: ['Python', 'Machine Learning', 'Data Analysis']
//   },
//   {
//     title: 'Spotify Backup',
//     description: [
//       'Developed a Python Flask application integrates with the Spotify API, allowing users to back up their playlists effectively.',
//       'Managed user authentication processes, ensuring secure login/logout functionality and safeguarding user data.',
//       'Streamlined the backup process to download song lists, which helps prevent loss of playlists.'
//     ],
//     icon: <FaRegEye />,
//     link: '#',
//     demo: '#',
//     github: '#',
//     technologies: ['Python', 'Flask', 'API Integration', 'OAuth']
//   }
// ];

// const Projects = () => {
//   const [activeProject, setActiveProject] = useState(null);

//   return (
//     <section className="py-24 px-4 bg-gradient-to-b from-gray-950 to-black relative">
//       {/* Abstract geometric shapes for visual interest */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
//         <div className="absolute w-64 h-64 rounded-full border border-gray-800 left-10 top-10"></div>
//         <div className="absolute w-96 h-96 rounded-full border border-gray-800 right-20 bottom-20"></div>
//         <div className="absolute w-32 h-32 bg-gray-900 rounded-full blur-3xl top-1/4 left-1/4"></div>
//         <div className="absolute w-64 h-64 bg-gray-900 rounded-full blur-3xl bottom-0 right-0"></div>
//         <div className="absolute h-40 w-1 bg-gradient-to-b from-gray-700 to-transparent top-20 left-1/3"></div>
//         <div className="absolute h-60 w-1 bg-gradient-to-b from-transparent to-gray-700 bottom-40 right-1/3"></div>
//       </div>
      
//       <div className="container mx-auto max-w-6xl relative z-10">
//         <div className="flex flex-col items-center mb-20">
//           <span className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-3">Portfolio</span>
//           <h2 className="text-4xl md:text-5xl font-bold relative mb-8">
//             Featured Projects
//             <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
//           </h2>
//           <p className="text-gray-400 max-w-2xl text-center text-lg font-light">
//             A collection of my most significant work showcasing my technical expertise and problem-solving abilities
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {projects.map((project, index) => (
//             <div 
//               key={index} 
//               className="group relative rounded-2xl overflow-hidden transition-all duration-500"
//               onMouseEnter={() => setActiveProject(index)}
//               onMouseLeave={() => setActiveProject(null)}
//             >
//               {/* Glass morphism background */}
//               <div className="absolute inset-0 backdrop-blur-sm bg-white/5 border border-white/10 z-0"></div>
              
//               {/* Animated gradient border */}
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl"></div>
              
//               <div className="relative z-10 p-8">
//                 <div className="flex items-center mb-6">
//                   <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-inner mr-5 group-hover:scale-110 transition-transform duration-300">
//                     <span className="text-purple-300 text-2xl">
//                       {project.icon}
//                     </span>
//                   </div>
//                   <h3 className="text-2xl font-bold text-white">
//                     {project.title}
//                   </h3>
//                 </div>
                
//                 <div className="space-y-4 mb-6 min-h-32">
//                   {activeProject === index ? (
//                     <ul className="list-none space-y-3 text-gray-300">
//                       {project.description.map((point, i) => (
//                         <li key={i} className="flex items-start">
//                           <span className="text-purple-400 mr-2 mt-1">•</span>
//                           <span>{point}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <p className="text-gray-300 leading-relaxed">
//                       {project.description[0]}
//                     </p>
//                   )}
//                 </div>
                
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.technologies.map((tech, i) => (
//                     <span 
//                       key={i} 
//                       className="text-xs py-1.5 px-3 bg-white/5 backdrop-blur-md text-gray-300 rounded-full border border-white/10 hover:border-purple-500/50 transition-colors duration-300"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <div className="flex items-center justify-between pt-4 border-t border-white/10">
//                   <a 
//                     href={project.github}
//                     className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
//                     title="View Source Code"
//                   >
//                     <FaGithub className="mr-2" />
//                     <span>Code</span>
//                   </a>
                  
//                   <a 
//                     href={project.demo} 
//                     className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
//                     title="View Live Demo"
//                   >
//                     <span>Demo</span>
//                     <FaRegEye className="ml-2" />
//                   </a>
                  
//                   <a 
//                     href={project.link} 
//                     className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
//                   >
//                     View Project
//                     <FaArrowRight className="ml-2 text-sm" />
//                   </a>
//                 </div>
//               </div>
              
//               {/* Animated spotlight effect on hover */}
//               <div className="absolute -inset-px opacity-0 group-hover:opacity-100 duration-700 transition-opacity blur-2xl bg-gradient-to-r from-purple-600/20 via-transparent to-pink-600/20"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { useState } from 'react';
import { FaRocket, FaRegEye, FaRegLightbulb, FaHeartbeat, FaArrowRight, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Tour Travel Project',
    description: [
      'Developed a comprehensive travel management application using the MERN stack, which streamlined the booking process for various hotels and flights, allowing users to manage their travel arrangements in one place.',
      'Implemented a monthly expense tracking feature, enabling users to record and monitor their annual travel expenses and visited locations, which helped them stay on budget.',
      'Integrated a verification email system post-booking and incorporated Razor-pay for secure payment options, ensuring a seamless and secure user experience while providing 24/7 customer support via chat.'
    ],
    icon: <FaRocket />,
    link: 'https://github.com/sriparna-koar/tour_travel',
    demo: 'https://tour-travel-fawn.vercel.app/',
    github: 'https://github.com/sriparna-koar/tour_travel',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    title: 'Fitness Tracking',
    description: [
      'Developed a web application using Flask that allows users to track their daily exercises and visualize their progress, which enhances their fitness journey.',
      'Implemented features that enable users to compare their workouts each day, helping them identify trends and improvements in their fitness routines.',
      'Integrated advanced AI technology to provide personalized diet plans based on user input, which helps users maintain balanced nutrition aligned with their fitness goals.'
    ],
    icon: <FaHeartbeat />,
    link: 'https://github.com/sriparna-koar/fitness_tracking',
    demo: 'https://github.com/sriparna-koar/fitness_tracking',
    github: 'https://github.com/sriparna-koar/fitness_tracking',
    technologies: ['Flask', 'Python', 'AI', 'Data Visualization']
  },
  {
    title: 'Diabetes Detection',
    description: [
      'Developed a diabetes prediction model utilizing StandardScaler, achieving a test accuracy score of 76% and a training accuracy score of 77%, which established the model\'s reliability in predicting diabetes outcomes.',
      'Analyzed key input features such as pregnancies, glucose levels, blood pressure, skin thickness, insulin, BMI, diabetes pedigree function, and age, helping to ensure comprehensive data training for enhanced prediction accuracy.'
    ],
    icon: <FaRegLightbulb />,
    link: 'https://github.com/sriparna-koar/diabetesdetection',
    demo: 'https://github.com/sriparna-koar/diabetesdetection',
    github: 'https://github.com/sriparna-koar/diabetesdetection',
    technologies: ['Python', 'Machine Learning', 'Data Analysis']
  },
  {
    title: 'Spotify Backup',
    description: [
      'Developed a Python Flask application integrates with the Spotify API, allowing users to back up their playlists effectively.',
      'Managed user authentication processes, ensuring secure login/logout functionality and safeguarding user data.',
      'Streamlined the backup process to download song lists, which helps prevent loss of playlists.'
    ],
    icon: <FaRegEye />,
    link: 'https://github.com/sriparna-koar/spotify_backup',
    demo: 'https://github.com/sriparna-koar/spotify_backup',
    github: 'https://github.com/sriparna-koar/spotify_backup',
    technologies: ['Python', 'Flask', 'API Integration', 'OAuth']
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section 
    id="projects"
    className="py-24 px-4 bg-gradient-to-b from-gray-950 to-black relative">
      {/* Abstract geometric shapes for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute w-64 h-64 rounded-full border border-blue-100/20 left-10 top-10"></div>
        <div className="absolute w-96 h-96 rounded-full border border-blue-100/20 right-20 bottom-20"></div>
        <div className="absolute w-32 h-32 bg-blue-100/5 rounded-full blur-3xl top-1/4 left-1/4"></div>
        <div className="absolute w-64 h-64 bg-blue-100/5 rounded-full blur-3xl bottom-0 right-0"></div>
        <div className="absolute h-40 w-1 bg-gradient-to-b from-blue-100/30 to-transparent top-20 left-1/3"></div>
        <div className="absolute h-60 w-1 bg-gradient-to-b from-transparent to-blue-100/30 bottom-40 right-1/3"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center mb-20">
          <span className="text-sm font-semibold tracking-widest uppercase text-blue-100/70 mb-3">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold relative mb-8 text-white">
            Featured Projects
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-100 rounded-full"></span>
          </h2>
          <p className="text-blue-100/70 max-w-2xl text-center text-lg font-light">
            A collection of my most significant work showcasing my technical expertise and problem-solving abilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl overflow-hidden transition-all duration-500"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Glass morphism background */}
              <div className="absolute inset-0 backdrop-blur-sm bg-blue-100/5 border border-blue-100/10 z-0"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 bg-blue-100/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10 p-8">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-xl bg-blue-100/10 backdrop-blur-md shadow-inner mr-5 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-blue-100 text-2xl">
                      {project.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                
                <div className="space-y-4 mb-6 min-h-32">
                  {activeProject === index ? (
                    <ul className="list-none space-y-3 text-blue-100/90">
                      {project.description.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-100 mr-2 mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-blue-100/90 leading-relaxed">
                      {project.description[0]}
                    </p>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs py-1.5 px-3 bg-blue-100/10 backdrop-blur-md text-blue-100 rounded-full border border-blue-100/10 hover:border-blue-100/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-blue-100/10">
                  <a 
                    href={project.github}
                    className="flex items-center text-blue-100/70 hover:text-blue-100 transition-colors duration-300"
                    title="View Source Code"
                  >
                    <FaGithub className="mr-2" />
                    <span>Code</span>
                  </a>
                  
                  <a 
                    href={project.demo} 
                    className="flex items-center text-blue-100/70 hover:text-blue-100 transition-colors duration-300"
                    title="View Live Demo"
                  >
                    <span>Demo</span>
                    <FaRegEye className="ml-2" />
                  </a>
                  
                  <a 
                    href={project.link} 
                    className="flex items-center px-4 py-2 rounded-lg bg-blue-100/20 text-blue-100 font-medium transform transition-all duration-300 hover:bg-blue-100/30 hover:scale-105 hover:shadow-lg hover:shadow-blue-100/10"
                  >
                    View Project
                    <FaArrowRight className="ml-2 text-sm" />
                  </a>
                </div>
              </div>
              
              {/* Animated spotlight effect on hover */}
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 duration-700 transition-opacity blur-2xl bg-blue-100/10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;