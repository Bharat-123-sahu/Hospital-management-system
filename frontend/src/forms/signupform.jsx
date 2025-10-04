import { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Main component for the signup form
export default function SignupForm() {
  // State for form data
  const [formData, setFormData] = useState({
    user_name: "",
    user_age: "",
    user_gender: "",
    user_phone: "",
    user_email: "",
    user_address: "",
    user_image: "",
    user_conform_password: "",
    user_password: "",
  });

  // State to hold the selected file object
  // const [userImage, setUserImage] = useState(null);
  // State for handling form errors
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Hook for navigation

  // --- 1. VALIDATION FUNCTION ---
  const validateForm = () => {
    const newErrors = {};
    if (!formData.user_name) newErrors.user_name = "Full Name is required";
    if (!formData.user_email) newErrors.user_email = "Email is required";
    if (!formData.user_password)
      newErrors.user_password = "Password is required";
    if (formData.user_password !== formData.user_conform_password) {
      newErrors.user_conform_password = "Passwords do not match";
    }
    // if (!userImage) newErrors.user_image = "Patient image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // // --- 2. FILE CHANGE HANDLER ---
  // const handleFileChange = (e) => {
  //   setUserImage({ ...formData, user_image: e.target.files[0] });
  // };

  // Handles changes for all other text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- 3. CORRECTED SUBMIT HANDLER ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Create a FormData object to send file and text data together
    // const data = new FormData();
    // data.append("user_image", userImage); // Append the file
    // // Append all other form fields
    // for (const key in formData) {
    //   data.append(key, formData[key]);
    // }

    try {
      // Use the correct API endpoint and send the 'data' object
      // Let axios handle the 'Content-Type' header automatically
      await axios.post(`http://localhost:9000/api/user_signup`, formData);

      alert("✅ Patient added successfully! Redirecting to login...");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert(" Error signUp");
      // Log the full error
      // if (err.response && err.response.data && err.response.data.message) {
      //   // Show specific error from the server if available
      //   alert(`❌ Error adding patient: ${err.response.data.message}`);
      // } else {
      //   alert("❌ Error adding patient. Please check the console for details.");
      // }
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Paper
        elevation={6}
        sx={{ p: 4, width: "100%", maxWidth: 600, borderRadius: 3 }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          🏥 Add New Patient
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* --- FILE INPUT --- */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="user_image"
                onChange={handleChange}
                required
                // InputLabelProps={{ shrink: true }}
                label="Patient Image"
                value={formData.user_image}
                error={!!errors.user_image}
                helperText={errors.user_image}
              />
            </Grid>
            {/* Text fields for user details */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
                error={!!errors.user_name}
                helperText={errors.user_name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Age"
                name="user_age"
                value={formData.user_age}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Gender"
                name="user_gender"
                value={formData.user_gender}
                onChange={handleChange}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone"
                name="user_phone"
                value={formData.user_phone}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
                error={!!errors.user_email}
                helperText={errors.user_email}
              />
            </Grid>
            {/* Password and Confirm Password fields */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                label="Password"
                name="user_password"
                value={formData.user_password}
                onChange={handleChange}
                required
                error={!!errors.user_password}
                helperText={errors.user_password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                label="Conform Password"
                name="user_conform_password"
                value={formData.user_conform_password}
                onChange={handleChange}
                required
                error={!!errors.user_conform_password}
                helperText={errors.user_conform_password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Address"
                name="user_address"
                value={formData.user_address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  background: "linear-gradient(90deg, #2196f3, #21cbf3)",
                  borderRadius: 2,
                  fontWeight: "bold",
                }}
              >
                Save Patient
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
