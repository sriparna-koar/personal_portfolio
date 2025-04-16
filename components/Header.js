
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Box, useScrollTrigger } from '@mui/material';
import { Home, Work, ContactMail, AccountCircle, School, Build } from '@mui/icons-material';
import Image from 'next/image';
const Header = () => {
  const elevateOnScroll = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const navLinks = [
    { label: 'Home', icon: <Home />, href: '#home' },
    // { label: 'Portfolio', icon: <Work />, href: '#portfolio' },
    { label: 'Skills', icon: <AccountCircle />, href: '#skills' },
    { label: 'Projects', icon:  <Work />, href: '#projects' },
    { label: 'Education', icon: <School />, href: '#education' },
    { label: 'Contact', icon: <ContactMail />, href: '#contact' },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={elevateOnScroll ? 12 : 4}
      sx={{
        background: `linear-gradient(90deg, rgba(0,0,0,0.9), rgba(34,34,34,0.9))`,
        backdropFilter: 'blur(10px)',
        zIndex: 1300,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
        {/* Premium Animated Logo */}
        <Box display="flex" alignItems="center" gap={2}>
          <svg
            className="w-16 h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M50 20 Q65 10 50 50 T50 80"
              stroke="#ff4081"
              strokeWidth="3"
              fill="none"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-width"
                values="3;5;3"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            <text
              x="50"
              y="55"
              textAnchor="middle"
              fontSize="12"
              fill="#ff4081"
              fontFamily="monospace"
            >
              S
              <animate
                attributeName="opacity"
                values="0.3;1;0.3"
                dur="2s"
                repeatCount="indefinite"
              />
            </text>
          </svg>
          <Box display="flex" alignItems="center" gap={2}>
  {/* <Image 
    src="/picture.png" 
    alt="Logo" 
    width={50} 
    height={50} 
    style={{ objectFit: 'contain' }} 
  /> */}
</Box>
          {/* <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              fontSize: '1.2rem',
              color: '#ff4081',
              textShadow: '0 0 15px rgba(255, 64, 129, 0.8)',
            }}
          >
            My Brand
          </Typography> */}
        </Box>

        {/* Navigation Links */}
        <Box display="flex" gap={3}>
          {navLinks.map(({ label, icon, href }) => (
            <Link key={label} href={href} passHref>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  textDecoration: 'none',
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
                }}
              >
                {icon}
                {label}
              </Box>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
