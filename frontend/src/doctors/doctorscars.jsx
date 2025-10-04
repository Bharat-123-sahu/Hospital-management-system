// ye dashbaord ke square card component hay
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

export const Doctorscards = ({ Image,Name, Specialization, Phone, Email }) => {
  return (
    <>
      <Card
        sx={{
          width:300,
          height: 370,
          position: "relative",
          left: 150,
          margin: 3,
          display: "inline-block",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
          transition: "all 0.4s ease",
          "&:hover": {
            transform: "translateY(-10px) scale(1.02)",
            boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
          },
        }}
      >
        {/* Image Section */}
        <CardMedia
        component="img"
          sx={{
            width:"100%",
            height: 210,
            objectFit:"fill",
            transition: "transform 0.5s ease",
            "&:hover": { transform: "scale(1.1)" },
          }}
          image={Image}

          title={Name}
        />

        {/* Content Section */}
        <CardContent sx={{ textAlign: "center", p: 2 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontWeight: "bold",
              color: "#1976d2",
              textShadow: "0px 2px 6px rgba(0,0,0,0.2)",
            }}
          >
            {Name}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontWeight: 500,
              mb: 1,
            }}
          >
            {Specialization}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "gray",
              fontStyle: "italic",
            }}
          >
            {Phone}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "gray",
              fontStyle: "italic",
            }}
          >
            {Email}
          </Typography>
        </CardContent>

        {/* Button Section */}
        <CardActions sx={{ p: 0 }}>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              borderRadius: "0 0 20px 20px",
              py: 1.5,
              fontWeight: "bold",
              background: "linear-gradient(90deg, #1976d2, #42a5f5)",
              boxShadow: "0 6px 15px rgba(25,118,210,0.4)",
              textTransform: "none",
              fontSize: "16px",
              "&:hover": {
                background: "linear-gradient(90deg, #1565c0, #1e88e5)",
                boxShadow: "0 8px 20px rgba(25,118,210,0.6)",
              },
            }}
          >
            View More
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
