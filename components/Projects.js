
import React, { useState } from 'react';
import Image from 'next/image';
import { Typography, Card, CardContent, Button, CardActions, Box } from '@mui/material';
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
    <Box
      sx={{
        background: "url('/dark-background.jpg') no-repeat center center fixed",
        backgroundSize: 'cover',
        minHeight: '100vh',
        py: 6,
        px: 4,
        color: 'white',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          textShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
          mb: 6,
          fontSize: { xs: '1.8rem', md: '2.5rem' },
        }}
      >
        Premium Projects
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' },
          gap: 4,
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
            sx={{
              background: 'linear-gradient(145deg,rgb(0, 0, 0),rgb(0, 0, 0))',
              borderRadius: 4,
              boxShadow:
                hoverIndex === index
                  ? '0 10px 30px rgba(0, 0, 0, 0.9), 0 4px 8px rgba(255, 255, 255, 0.2)'
                  : '0 5px 15px rgba(0, 0, 0, 0.6)',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              transform: hoverIndex === index ? 'translateY(-10px)' : 'none',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: 400,
            }}
          >
            <Box sx={{ position: 'relative', height: '50%' }}>
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                style={{
                  filter: 'brightness(0.6)',
                }}
              />
            </Box>
            <CardContent
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#fff',
                  mb: 1,
                  fontSize: '1rem',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                {project.icon} {project.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(200, 200, 200, 0.9)',
                  textAlign: 'center',
                }}
              >
                {project.description}
              </Typography>
              <CardActions sx={{ justifyContent: 'center', mt: 3 }}>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#0066ff',
                    color: '#0066ff',
                    borderRadius: 3,
                    px: 3,
                    py: 1,
                    textTransform: 'uppercase',
                    '&:hover': {
                      backgroundColor: 'rgb(0, 0, 0)',
                      borderColor: '#0056e0',
                    },
                  }}
                  endIcon={<InfoOutlinedIcon />}
                >
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
