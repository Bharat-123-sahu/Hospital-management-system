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

const LaboratoryForm = () => {
  const [formData, setFormData] = useState({
    testName: "",
    patientId: "",
    doctorId: "",
    testDate: "",
    result: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Laboratory Form Data:", formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 700,
          margin: "auto",
          p: 4,
          borderRadius: "20px",
          background:
            "linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", color: "#1976d2" }}
        >
          Laboratory Form
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Test Name"
                name="testName"
                value={formData.testName}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Patient ID"
                name="patientId"
                value={formData.patientId}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Doctor ID"
                name="doctorId"
                value={formData.doctorId}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="date"
                name="testDate"
                value={formData.testDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                label="Test Date"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Result"
                name="result"
                value={formData.result}
                onChange={handleChange}
              >
                <MenuItem value="Positive">Positive</MenuItem>
                <MenuItem value="Negative">Negative</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Remarks"
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Box textAlign="center" mt={4}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                px: 5,
                py: 1.5,
                fontSize: "16px",
                borderRadius: "12px",
                background:
                  "linear-gradient(135deg, #42a5f5, #7e57c2)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #1e88e5, #5e35b1)",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default LaboratoryForm;
