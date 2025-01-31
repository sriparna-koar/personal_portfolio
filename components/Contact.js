
// import { useState } from "react";
// import { TextField, Button } from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";
// import PersonIcon from "@mui/icons-material/Person";
// import EmailIcon from "@mui/icons-material/Email";
// import MessageIcon from "@mui/icons-material/Message";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <section id="contact" className="container mx-auto my-20 px-4">
//       <h2 className="text-4xl font-bold text-center mb-10 text-white">Get In Touch</h2>
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-lg mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-8 shadow-2xl rounded-lg"
//       >
        // <div className="mb-6">
        //   <div className="flex items-center gap-2 mb-2 text-white">
        //     <PersonIcon className="text-blue-400" />
        //     <label className="font-semibold">Name</label>
        //   </div>
        //   <TextField
        //     variant="outlined"
        //     fullWidth
        //     name="name"
        //     value={formData.name}
        //     onChange={handleChange}
        //     placeholder="Enter your name"
        //     InputProps={{
        //       style: { backgroundColor: "#ffffff", borderRadius: "8px" },
        //     }}
        //   />
        // </div>
        // <div className="mb-6">
        //   <div className="flex items-center gap-2 mb-2 text-white">
        //     <EmailIcon className="text-blue-400" />
        //     <label className="font-semibold">Email</label>
        //   </div>
        //   <TextField
        //     type="email"
        //     variant="outlined"
        //     fullWidth
        //     name="email"
        //     value={formData.email}
        //     onChange={handleChange}
        //     placeholder="Enter your email"
        //     InputProps={{
        //       style: { backgroundColor: "#ffffff", borderRadius: "8px" },
        //     }}
        //   />
        // </div>
        // <div className="mb-6">
        //   <div className="flex items-center gap-2 mb-2 text-white">
        //     <MessageIcon className="text-blue-400" />
        //     <label className="font-semibold">Message</label>
        //   </div>
        //   <TextField
        //     variant="outlined"
        //     fullWidth
        //     multiline
        //     rows={4}
        //     name="message"
        //     value={formData.message}
        //     onChange={handleChange}
        //     placeholder="Enter your message"
        //     InputProps={{
        //       style: { backgroundColor: "#ffffff", borderRadius: "8px" },
        //     }}
        //   />
        // </div>
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           color="primary"
//           endIcon={<SendIcon />}
//           className="text-white font-bold py-2 px-4 rounded-md"
//           style={{
//             backgroundImage: "linear-gradient(to right, #6a11cb, #2575fc)",
//             borderRadius: "8px",
//           }}
//         >
//           Send Message
//         </Button>
//       </form>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Snackbar, Alert } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      
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
    }
  };

  const handleCloseSnackbar = () => {
    setStatus({ ...status, open: false });
  };

  return (
    <section id="contact" className="container mx-auto my-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">Get In Touch</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-8 shadow-2xl rounded-lg"
      >
        {/* [Previous TextField components remain the same] */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2 text-white">
            <PersonIcon className="text-blue-400" />
            <label className="font-semibold">Name</label>
          </div>
          <TextField
            variant="outlined"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            InputProps={{
              style: { backgroundColor: "#ffffff", borderRadius: "8px" },
            }}
          />
        </div>
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2 text-white">
            <EmailIcon className="text-blue-400" />
            <label className="font-semibold">Email</label>
          </div>
          <TextField
            type="email"
            variant="outlined"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            InputProps={{
              style: { backgroundColor: "#ffffff", borderRadius: "8px" },
            }}
          />
        </div>
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2 text-white">
            <MessageIcon className="text-blue-400" />
            <label className="font-semibold">Message</label>
          </div>
          <TextField
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            InputProps={{
              style: { backgroundColor: "#ffffff", borderRadius: "8px" },
            }}
          />
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          className="text-white font-bold py-2 px-4 rounded-md"
          style={{
            backgroundImage: "linear-gradient(to right, #6a11cb, #2575fc)",
            borderRadius: "8px",
          }}
        >
          Send Message
        </Button>
      </form>
      
      <Snackbar 
        open={status.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={status.severity} 
          sx={{ width: '100%' }}
        >
          {status.message}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contact;