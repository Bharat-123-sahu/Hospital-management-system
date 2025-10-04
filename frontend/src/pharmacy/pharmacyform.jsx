import { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Box,
} from "@mui/material";

export default function PharmacyForm() {
  const [formData, setFormData] = useState({
    medicineName: "",
    quantity: "",
    price: "",
    expiryDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/api/pharmacy", formData);
      alert("✅ Medicine added successfully");
      setFormData({ medicineName: "", quantity: "", price: "", expiryDate: "" });
    } catch (error) {
      console.error(error);
      alert("❌ Error adding medicine");
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Paper
        elevation={8}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 600,
          borderRadius: 4,
          background: "linear-gradient(145deg, #f5f7fa, #e6ecf5)",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#1976d2",
            textShadow: "0px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          💊 Pharmacy Inventory
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Medicine Name */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Medicine Name"
                name="medicineName"
                value={formData.medicineName}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>

            {/* Quantity */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>

            {/* Price */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Price (₹)"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>

            {/* Expiry Date */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="date"
                label="Expiry Date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
                variant="outlined"
              />
            </Grid>

            {/* Submit */}
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  mt: 1,
                  background: "linear-gradient(90deg, #42a5f5, #1e88e5)",
                  borderRadius: 2,
                  fontWeight: "bold",
                  textTransform: "none",
                  py: 1.3,
                }}
              >
                Save Medicine
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
