
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