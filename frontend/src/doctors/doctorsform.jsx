// ye doctors ka form hay jaha doctor ka data add hoga 
import { useState } from "react";
import axios from "axios";
import { TextField, Button, Grid, Paper, Typography, Box } from "@mui/material";

export default function DoctorForm() {
  const [formData, setFormData] = useState({
    Image:"",
    Name: "",
    Specialization: "",
    Phone: "",
    Email: "",
    Qualificatioin:"",
    Hospital:"",
    Position:"",
  });
  const [data,setData]=useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/api/doctors", formData);
      alert(" Doctor added successfully");
      setData([...data,formData])
      setFormData({Image:"", Name: "", Specialization: "", Phone: "", Email: "" ,Position:"",Qualificatioin:"",Hospital:""});
      
    } catch (error) {
      console.error(error);
      alert(" Error adding doctor");
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
          👨‍⚕️ Add New Doctor
        </Typography>
        <form onSubmit={handleSubmit}>
          
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image"
                name= "Image"
                value={formData.Image}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Specialization"
                name= "Specialization"
                value={formData.Specialization}
                onChange={handleChange}
                required
              />
            </Grid>


            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone"
                name="Phone"
                value={formData.Phone}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="text"
                label="Qualification"
                name="Qualificatioin"
                value={formData.Qualificatioin}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="text"
                label="Position"
                name="Position"
                value={formData.Position}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="text"
                label="Hospital"
                name="Hospital"
                value={formData.Hospital}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  background: "linear-gradient(90deg, #673ab7, #9c27b0)",
                  borderRadius: 2,
                  fontWeight: "bold",
                }}
              >
                Save Doctor
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
