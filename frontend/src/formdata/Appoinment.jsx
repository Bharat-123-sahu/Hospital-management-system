// import Box from '@mui/material/Box';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// export const Appoinment=()=>{

//     return(
//         <>
//          <Box sx={{ '& > :not(style)': { m: 1 } }}>
//       <FormControl variant="standard">
//         <InputLabel htmlFor="input-with-icon-adornment">
//           With a start adornment
//         </InputLabel>
//         <Input
//           id="input-with-icon-adornment"
//           startAdornment={
//             <InputAdornment position="start">
//               <AccountCircle />
//             </InputAdornment>
//           }
//         />
//       </FormControl>
//       <TextField
//         id="input-with-icon-textfield"
//         label="TextField"
//         slotProps={{
//           input: {
//             startAdornment: (
//               <InputAdornment position="start">
//                 <AccountCircle />
//               </InputAdornment>
//             ),
//           },
//         }}
//         variant="standard"
//       />
//       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//         <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
//         <TextField id="input-with-sx" label="With sx" variant="standard" />
//       </Box>
//     </Box>

//         </>
//     )
// }
import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  Chip,
  Stack,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

// Mock doctors data (replace with API calls in real app)
const MOCK_DOCTORS = [
  {
    id: "d1",
    name: "Dr. Asha Verma",
    speciality: "Cardiologist",
    experience: 12,
    avatar: "https://i.pravatar.cc/150?img=1",
    fees: 800,
    slots: ["09:00", "09:30", "10:30", "11:00", "16:00"],
  },
  {
    id: "d2",
    name: "Dr. Rohit Sharma",
    speciality: "Orthopedist",
    experience: 8,
    avatar: "https://i.pravatar.cc/150?img=2",
    fees: 600,
    slots: ["10:00", "10:30", "11:30", "14:00", "15:00"],
  },
  {
    id: "d3",
    name: "Dr. Meera Singh",
    speciality: "Pediatrician",
    experience: 6,
    avatar: "https://i.pravatar.cc/150?img=3",
    fees: 500,
    slots: ["09:15", "10:15", "12:00", "13:30", "17:00"],
  },
];

export default function Appointment() {
  const [doctors, setDoctors] = useState(MOCK_DOCTORS);
  const [query, setQuery] = useState("");
  const [specialityFilter, setSpecialityFilter] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [snack, setSnack] = useState({ open: false, message: "", severity: "success" });

  useEffect(() => {
    // In a real app, fetch doctors from server
    // setDoctors(await fetch("/api/doctors"))
  }, []);

  const specialities = Array.from(new Set(doctors.map((d) => d.speciality)));

  const filtered = doctors.filter((d) => {
    const matchesQuery =
      query.trim() === "" ||
      d.name.toLowerCase().includes(query.toLowerCase()) ||
      d.speciality.toLowerCase().includes(query.toLowerCase());
    const matchesSpec = specialityFilter === "" || d.speciality === specialityFilter;
    return matchesQuery && matchesSpec;
  });

  function openBooking(doctor) {
    setSelectedDoctor(doctor);
    setSelectedDate("");
    setSelectedSlot("");
    setPatientName("");
    setPhone("");
    setOpenDialog(true);
  }

  function closeBooking() {
    setOpenDialog(false);
    setSelectedDoctor(null);
  }

  function confirmBooking() {
    if (!patientName || !phone || !selectedDate || !selectedSlot) {
      setSnack({ open: true, message: "Please fill all fields.", severity: "error" });
      return;
    }

    // Mock submit: in a real app, POST to server
    const appointment = {
      id: `appt_${Date.now()}`,
      doctorId: selectedDoctor.id,
      doctorName: selectedDoctor.name,
      patientName,
      phone,
      date: selectedDate,
      slot: selectedSlot,
    };

    console.log("Saving appointment ->", appointment);

    setSnack({ open: true, message: "Appointment booked successfully!", severity: "success" });
    closeBooking();
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Book an Appointment
      </Typography>

      <Card sx={{ mb: 2, p: 2 }} elevation={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search doctor or speciality..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              InputProps={{ startAdornment: <SearchIcon sx={{ mr: 1 }} /> }}
            />
          </Grid>

          <Grid item xs={8} sm={4} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel id="spec-label">Speciality</InputLabel>
              <Select
                labelId="spec-label"
                value={specialityFilter}
                label="Speciality"
                onChange={(e) => setSpecialityFilter(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                {specialities.map((s) => (
                  <MenuItem key={s} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4} sm={2} md={3}>
            <Button
              variant="contained"
              fullWidth
              startIcon={<EventAvailableIcon />}
              onClick={() => {
                setQuery("");
                setSpecialityFilter("");
              }}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Card>

      <Grid container spacing={2}>
        {filtered.map((d) => (
          <Grid key={d.id} item xs={12} sm={6} md={4}>
            <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar src={d.avatar} sx={{ width: 64, height: 64 }} />
                  <Box>
                    <Typography variant="h6">{d.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {d.speciality} • {d.experience} yrs
                    </Typography>
                    <Typography variant="body2">Fees: ₹{d.fees}</Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: "wrap" }}>
                      {d.slots.slice(0, 4).map((s) => (
                        <Chip key={s} label={s} size="small" />
                      ))}
                      {d.slots.length > 4 && <Chip label={`+${d.slots.length - 4}`} size="small" />}
                    </Stack>
                  </Box>
                </Box>
              </CardContent>
              <CardActions>
                <Button variant="outlined" size="small" onClick={() => openBooking(d)}>
                  Book
                </Button>
                <Button size="small">View Profile</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}

        {filtered.length === 0 && (
          <Grid item xs={12}>
            <Card sx={{ p: 2 }}>
              <Typography>No doctors found for your search.</Typography>
            </Card>
          </Grid>
        )}
      </Grid>

      {/* Booking dialog */}
      <Dialog open={openDialog} onClose={closeBooking} maxWidth="sm" fullWidth>
        <DialogTitle>Book Appointment{selectedDoctor ? ` — ${selectedDoctor.name}` : ""}</DialogTitle>
        <DialogContent>
          {selectedDoctor && (
            <Box sx={{ display: "flex", gap: 2, mb: 2, alignItems: "center" }}>
              <Avatar src={selectedDoctor.avatar} />
              <Box>
                <Typography variant="subtitle1">{selectedDoctor.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedDoctor.speciality} • Fees ₹{selectedDoctor.fees}
                </Typography>
              </Box>
            </Box>
          )}

          <TextField
            label="Patient Name"
            fullWidth
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            label="Phone"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
            sx={{ mb: 2 }}
            inputProps={{ maxLength: 10 }}
          />

          <TextField
            label="Choose Date"
            type="date"
            fullWidth
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true }}
          />

          <FormControl fullWidth size="small">
            <InputLabel id="slot-label">Available Slots</InputLabel>
            <Select
              labelId="slot-label"
              value={selectedSlot}
              label="Available Slots"
              onChange={(e) => setSelectedSlot(e.target.value)}
            >
              {selectedDoctor && selectedDoctor.slots.map((s) => (
                <MenuItem key={s} value={s}>
                  {s}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Note: This is a demo booking UI. Integrate with backend to check real-time slot availability and persist appointments.
            </Typography>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={closeBooking}>Cancel</Button>
          <Button variant="contained" onClick={confirmBooking}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snack.open}
        autoHideDuration={3000}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={() => setSnack((s) => ({ ...s, open: false }))} severity={snack.severity} sx={{ width: "100%" }}>
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}