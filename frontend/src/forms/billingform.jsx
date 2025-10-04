import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Paper,
  MenuItem,
  IconButton,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { AddCircle, RemoveCircle } from "@mui/icons-material";

const BillingForm = () => {
  const [patientData, setPatientData] = useState({
    patientName: "",
    patientId: "",
    billDate: "",
    billTime: "",
  });

  const [items, setItems] = useState([
    { medicine: "", quantity: 1, price: 0, subtotal: 0 },
  ]);

  const gstRate = 18; // % GST

  const handlePatientChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleItemChange = (index, e) => {
    const newItems = [...items];
    newItems[index][e.target.name] = e.target.value;

    // Auto-calc subtotal
    const qty = parseFloat(newItems[index].quantity) || 0;
    const price = parseFloat(newItems[index].price) || 0;
    newItems[index].subtotal = qty * price;

    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { medicine: "", quantity: 1, price: 0, subtotal: 0 }]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  // Totals
  const subtotal = items.reduce((acc, item) => acc + item.subtotal, 0);
  const gstAmount = (subtotal * gstRate) / 100;
  const total = subtotal + gstAmount;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Billing Data:", { patientData, items, subtotal, gstAmount, total });
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
          maxWidth: 900,
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
          sx={{ fontWeight: "bold", color: "#283593" }}
        >
          Billing Form
        </Typography>

        {/* Patient Details */}
        <Box mb={4}>
          <Typography variant="h6" sx={{ mb: 2, color: "#6a1b9a" }}>
            Patient Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Patient Name"
                name="patientName"
                value={patientData.patientName}
                onChange={handlePatientChange}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Patient ID"
                name="patientId"
                value={patientData.patientId}
                onChange={handlePatientChange}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="date"
                label="Bill Date"
                name="billDate"
                InputLabelProps={{ shrink: true }}
                value={patientData.billDate}
                onChange={handlePatientChange}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="time"
                label="Bill Time"
                name="billTime"
                InputLabelProps={{ shrink: true }}
                value={patientData.billTime}
                onChange={handlePatientChange}
                required
              />
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Billing Items */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2, color: "#6a1b9a" }}>
            Billing Items
          </Typography>

          {items.map((item, index) => (
            <Grid
              container
              spacing={2}
              alignItems="center"
              key={index}
              sx={{
                mb: 2,
                p: 2,
                borderRadius: "12px",
                background: "#ffffffaa",
              }}
            >
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Medicine/Service"
                  name="medicine"
                  value={item.medicine}
                  onChange={(e) => handleItemChange(index, e)}
                />
              </Grid>

              <Grid item xs={12} sm={2}>
                <TextField
                  fullWidth
                  type="number"
                  label="Quantity"
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, e)}
                />
              </Grid>

              <Grid item xs={12} sm={2}>
                <TextField
                  fullWidth
                  type="number"
                  label="Price"
                  name="price"
                  value={item.price}
                  onChange={(e) => handleItemChange(index, e)}
                />
              </Grid>

              <Grid item xs={12} sm={2}>
                <TextField
                  fullWidth
                  label="Subtotal"
                  value={item.subtotal.toFixed(2)}
                  disabled
                />
              </Grid>

              <Grid item xs={12} sm={2}>
                <IconButton
                  color="error"
                  onClick={() => removeItem(index)}
                  disabled={items.length === 1}
                >
                  <RemoveCircle />
                </IconButton>
                <IconButton color="primary" onClick={addItem}>
                  <AddCircle />
                </IconButton>
              </Grid>
            </Grid>
          ))}
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Totals */}
        <Box textAlign="right" sx={{ mb: 3 }}>
          <Typography variant="h6">Subtotal: ₹{subtotal.toFixed(2)}</Typography>
          <Typography variant="h6">GST ({gstRate}%): ₹{gstAmount.toFixed(2)}</Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#2e7d32", mt: 1 }}
          >
            Grand Total: ₹{total.toFixed(2)}
          </Typography>
        </Box>

        {/* Submit */}
        <Box textAlign="center">
          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
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
            Generate Bill
          </Button>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default BillingForm;
