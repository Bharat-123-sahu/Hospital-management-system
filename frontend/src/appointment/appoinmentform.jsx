import { useState } from "react";
import axios from "axios"
import { useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from "@mui/material";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    PatientID: "",
    DoctorID: "",
    AppointmentDate: "",
    AppointmentTime: "",
    Status: "Scheduled"
  });
  const [docdata, setDocdata] = useState([]);
   const [petdata, setpetdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/Patients")
      .then((res) => setpetdata(res.data))
      .catch((err) => console.error(err));
  },[]);
  
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/doctors")
      .then((res) => setDocdata(res.data))
      .catch((err) => console.error(err));
  },[]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/api/appointments", formData);
      alert("✅ Appointment added successfully");
      setFormData({
        PatientID: "",
        DoctorID: "",
        AppointmentDate: "",
        AppointmentTime: "",
        Status: "Scheduled"
      });
    } catch (error) {
      console.error(error);
      alert("❌ Error adding appointment");
    }
   
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Paper
        elevation={6}
        sx={{ p: 4, width: "100%", maxWidth: 650, borderRadius: 3 }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          📅 Schedule Appointment
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Patient Select */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Patient</InputLabel>
                <Select
                  name="PatientID"
                  value={formData.PatientID}
                  onChange={handleChange}
                >
                   {petdata.map((row)=>(
                    <MenuItem value={row.PatientID}>{row.Name}</MenuItem>
                   ))}
                  
                 
                </Select>
              </FormControl>
            </Grid>

            {/* Doctor Select */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Doctor</InputLabel>
                <Select
                  name="DoctorID"
                  value={formData.DoctorID}
                  onChange={handleChange}
                >
                  {
                    docdata.map((row)=>(
                       <MenuItem value={row.DoctorID}>{row.Name} ({row.Specialization})</MenuItem>
                    ))
                  }
                  
                </Select>
              </FormControl>
            </Grid>

            {/* Date */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="date"
                label="Appointment Date"
                name="AppointmentDate"
                value={formData.AppointmentDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>

            {/* Time */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="time"
                label="Appointment Time"
                name="AppointmentTime"
                value={formData.AppointmentTime}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>

            {/* Status */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  name="Status"
                  value={formData.Status}
                  onChange={handleChange}
                >
                  <MenuItem value="Scheduled">Scheduled</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                  <MenuItem value="Cancelled">Cancelled</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Submit */}
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  background: "linear-gradient(90deg, #1976d2, #42a5f5)",
                  borderRadius: 2,
                  fontWeight: "bold"
                }}
              >
                Save Appointment
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
