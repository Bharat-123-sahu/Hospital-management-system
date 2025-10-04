import React, { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

// Note: I'm assuming this file is named 'doctorscars.jsx' or similar, 
// and the DoctorCard component you want to use in the Dashboard is DoctCard.

// ----------------------------------------------------
// 1. Doctor Card Collection Component (The Wrapper)
// ----------------------------------------------------

export const CircleCardCollection = () => {
  const [doctors, setDoctors] = useState([]);
  
  // Fetch doctors from backend
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/doctors")
      .then((res) => {
        setDoctors(res.data);
      })
      .catch((err) => {
        console.error("Error fetching doctors:", err);
      });
  }, []);

  return (
    // 🚨 RESPONSIVE FIXES: 
    // 1. Removed fixed width: width:"1100px". Now it takes full available width.
    // 2. Using Bootstrap flex utilities for responsive wrapping.
    <div
      className="d-flex flex-wrap" // d-flex and flex-wrap ensures cards wrap onto new lines
      style={{
        padding: "10px",
        // margin/padding can be managed with Bootstrap classes like mx-2, px-2
        // If you need a border, use Bootstrap border class or keep inline style:
        // borderLeft: "1px solid", 
      }}
    >
        {doctors.length > 0 ? (
          doctors.map((doc) => (
            // Applying Bootstrap responsive column classes to each card wrapper
            // col-12: Full width on mobile
            // col-sm-6: 2 cards per row on small screens (tablets)
            // col-md-4: 3 cards per row on medium screens
            // col-lg-3: 4 cards per row on large screens
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2" key={doc.DoctorID}>
              <DoctCard 
                Image={doc.Image}
                Name={doc.Name} 
                Position={doc.Position}
                Qualificatioin={doc.Qualificatioin}
                Specialization={doc.Specialization}
                Hospital={doc.Hospital}
              />
            </div>
          ))
        ) : (
          <Typography align="center" sx={{ mt: 3 }} className="w-100">
            No Doctors Found
          </Typography>
        )}
      
    </div>
  );
};

// ----------------------------------------------------
// 2. Individual Doctor Card Component
// ----------------------------------------------------

export const DoctCard = ({ 
    Image,
    Name,
    Specialization,
    Phone,
    Email,
    Qualificatioin,
    Hospital,
    Position
}) => {
  const nevigate = useNavigate();
  const handlenevigate = () => {
    nevigate("/appointmentform");
  };

  return (
    <>
      <Card
        sx={{
          // 🚨 RESPONSIVE FIXES:
          // 1. Removed fixed width: width: "317px". Now it takes 100% of its parent column.
          width: "100%", 
          // 2. Set minHeight instead of fixed height for content flexibility
          minHeight: "520px",
          
          margin: "0", // Removed margin here, use padding on the parent wrapper div
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          background: "linear-gradient(135deg, #ffffff 0%, #f9f9ff 100%)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
          },
        }}
      >
        {/* Doctor Image */}
        <CardMedia
          image={Image}
          sx={{
            borderRadius: "50%",
            height: "120px",
            width: "120px",
            marginBottom: "16px",
            border: "4px solid #1976d2",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        />

        {/* Name */}
        <CardHeader
          title={Name}
          sx={{ color: "#1976d2", textAlign: "center", padding: "0" }}
          titleTypographyProps={{ variant: "h6", fontWeight: "bold" }}
        />

        {/* Content */}
        <CardContent sx={{ textAlign: "center", mt: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, color: "gray" }}>
            {Position}
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, color: "#333" }}>
            Speciality
          </Typography>
          {/* Ensure long specialization text can wrap */}
          <Typography variant="body2">{Specialization}</Typography>

          <Typography variant="h6" sx={{ mt: 2, color: "#333" }}>
            Qualification
          </Typography>
          <Typography variant="body2">{Qualificatioin}</Typography>

          <Typography variant="h6" sx={{ mt: 2, color: "#333" }}>
            Hospital
          </Typography>
          <Typography variant="body2">{Hospital}</Typography>
        </CardContent>

        {/* Button */}
        <Button
          variant="contained"
          onClick={handlenevigate}
          sx={{
            mt: "auto", // Pushes the button to the bottom
            py: 1.5,
            px: 3,
            borderRadius: "12px",
            width: "90%", // Use a slightly smaller width than 100% for inner padding look
            mx: 2, // Added horizontal margin
            mb: 2, // Added bottom margin
            fontSize: "15px",
            fontWeight: "bold",
            textTransform: "none",
            background: "linear-gradient(90deg, #1976d2, #42a5f5)",
            boxShadow: "0 6px 15px rgba(25,118,210,0.4)",
            "&:hover": {
              background: "linear-gradient(90deg, #1565c0, #1e88e5)",
              boxShadow: "0 8px 18px rgba(25,118,210,0.6)",
            },
          }}
        >
          Book an Appointment
        </Button>
      </Card>
    </>
  );
};