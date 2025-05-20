
import React, { useState } from "react";
import axios from "axios";
import { 
  TextField, 
  Button, 
  Snackbar, 
  Alert,
  Paper,
  Typography,
  Box,
  Container, 
  Divider,
  CircularProgress
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { alpha } from "@mui/material/styles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    open: false,
    message: "",
    severity: "success"
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post('https://personal-portfolio-gn3y.onrender.com/api/contact', formData);
      
      setStatus({
        open: true,
        message: response.data.message,
        severity: "success"
      });
      
      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        open: true,
        message: error.response?.data?.message || "Failed to send message",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setStatus({ ...status, open: false });
  };

  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: alpha("#ffffff", 0.9),
      borderRadius: "12px",
      transition: "all 0.3s ease",
      "&:hover": {
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
      },
      "&.Mui-focused": {
        boxShadow: "0 6px 16px rgba(37, 117, 252, 0.2)",
      }
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.1)",
    },
    "& .MuiInputLabel-root": {
      color: "white",
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}
    id="contact">
      <Box component="section" id="contact">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">Get In Touch</h2>
        
        <Paper
          elevation={24}
          sx={{
            maxWidth: "550px",
            mx: "auto",
            background: "linear-gradient(145deg, #1e293b, #111827)",
            borderRadius: "16px",
            overflow: "hidden",
            p: { xs: 3, sm: 5 },
            border: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          <Typography 
            variant="h6" 
            component="h3" 
            sx={{ 
              mb: 4, 
              color: "white", 
              fontWeight: 500,
              textAlign: "center" 
            }}
          >
            Send Me Message
          </Typography>
          
          <Divider sx={{ mb: 4, opacity: 0.2 }} />
          
          <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <PersonOutlineOutlinedIcon sx={{ mr: 1, color: "#2575fc" }} />
                <Typography variant="body2" sx={{ color: "white", fontWeight: 500 }}>
                  Full Name
                </Typography>
              </Box>
              <TextField
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                sx={inputStyles}
              />
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <AlternateEmailOutlinedIcon sx={{ mr: 1, color: "#2575fc" }} />
                <Typography variant="body2" sx={{ color: "white", fontWeight: 500 }}>
                  Email Address
                </Typography>
              </Box>
              <TextField
                type="email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                sx={inputStyles}
              />
            </Box>
            
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <ChatBubbleOutlineOutlinedIcon sx={{ mr: 1, color: "#2575fc" }} />
                <Typography variant="body2" sx={{ color: "white", fontWeight: 500 }}>
                  Your Message
                </Typography>
              </Box>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
                sx={inputStyles}
              />
            </Box>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              startIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
              sx={{
                py: 1.5,
                background: "linear-gradient(90deg, #6a11cb, #2575fc)",
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "1rem",
                boxShadow: "0 10px 20px rgba(106, 17, 203, 0.2)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 10px 25px rgba(106, 17, 203, 0.3)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </Box>
        </Paper>
        
        <Snackbar 
          open={status.open} 
          autoHideDuration={6000} 
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={status.severity} 
            variant="filled"
            sx={{ width: '100%' }}
          >
            {status.message}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default Contact;