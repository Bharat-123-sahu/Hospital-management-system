import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Paper,
  MenuItem,
} from "@mui/material";
import { motion } from "framer-motion";

const StaffForm = () => {
  const [formData, setFormData] = useState({
    staffName: "",
    role: "",
    department: "",
    email: "",
    phone: "",
    joiningDate: "",
    address: "",
  });

  const roles = ["Doctor", "Nurse", "Technician", "Receptionist", "Admin"];
  const departments = ["Cardiology", "Neurology", "Pathology", "Orthopedics", "General"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Staff Form Data:", formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 750,
          margin: "auto",
          p: 4,
          borderRadius: "20px",
          background: "linear-gradient(135deg, #f3e5f5 0%, #e3f2fd 100%)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", color: "#6a1b9a" }}
        >
          Staff Registration Form
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Staff Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Staff Name"
                name="staffName"
                value={formData.staffName}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>

            {/* Role */}
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                {roles.map((role, index) => (
                  <MenuItem key={index} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Department */}
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                {departments.map((dept, index) => (
                  <MenuItem key={index} value={dept}>
                    {dept}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Email */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Phone */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="tel"
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Joining Date */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="date"
                name="joiningDate"
                value={formData.joiningDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                label="Joining Date"
                required
              />
            </Grid>

            {/* Address */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Box textAlign="center" mt={4}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                px: 6,
                py: 1.5,
                fontSize: "16px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #8e24aa, #3949ab)",
                "&:hover": {
                  background: "linear-gradient(135deg, #6a1b9a, #283593)",
                },
              }}
            >
              Register Staff
            </Button>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default StaffForm;
