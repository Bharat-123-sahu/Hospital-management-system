import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Footer from "../includes/footer";

export default function About() {
  return (
    <>
      <Typography
        variant="h3"
        align="center"
        sx={{
          mt: 8,
          mb: 6,
          fontWeight: 700,
          color: "#1976d2",
          textShadow: "2px 2px 12px rgba(0,0,0,0.25)",
        }}
      >
        About Us
      </Typography>

      <Box sx={{ flexGrow: 1, px: { xs: 2, md: 8 } }}>
        <Grid container spacing={5} alignItems="stretch">
          {/* Left Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%", // full width of grid column
                height: "100%", // full height of grid column
                minHeight: "200px", // fix min height
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
                position: "relative",
                "&:hover img": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <img
                src="https://img.freepik.com/free-vector/hospital-building-with-medical-staff_23-2148889442.jpg?w=2000"
                alt="About Us"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.7s ease",
                }}
              />
            </Box>
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // vertical center
                pl: { md: 3 },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: "20px", md: "24px" },
                  color: "#1565c0",
                }}
              >
                Pioneering Healthcare in Madhya Pradesh
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  textAlign: "justify",
                  fontFamily: "Merriweather, serif",
                  fontSize: { xs: "16px", md: "18px" },
                  mb: 2,
                  lineHeight: 1.7,
                  color: "#333",
                }}
              >
                CARE CHL Hospitals, Indore, a 200-bedded hospital is the first
                corporate Hospital in Madhya Pradesh. Being a multi-speciality
                hospital, we provide services in over 30 medical specialities:
                Cardiology, Cardiac Surgery, Urology, Neurology,
                Gastroenterology, Cancer Care, Laparoscopic and General Surgery,
                Obstetrics and Gynaecology, Transplants (Kidney, Liver, Bone
                Marrow), Cosmetic Surgery, TAVI, MISD (Minimally Invasive
                Surgical Techniques), and more.
              </Typography>

              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mt: 2, mb: 1, color: "#1976d2" }}
              >
                Milestones:
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  textAlign: "justify",
                  fontFamily: "Merriweather, serif",
                  fontSize: { xs: "16px", md: "18px" },
                  mb: 2,
                  lineHeight: 1.7,
                  color: "#555",
                }}
                component="div"
              >
                <ul>
                  <li>
                    Centre of Excellence for Cardiac Sciences – first fully
                    equipped centre in Madhya Pradesh.
                  </li>
                  <li>
                    Surgical Cancer department – only department in central
                    India performing HIPEC Surgery.
                  </li>
                  <li>
                    Radiology department – pioneer in quality imaging for over
                    two decades.
                  </li>
                  <li>
                    Only Echo lab in central India performing 3D transthoracic &
                    transoesophageal Echo.
                  </li>
                </ul>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  textAlign: "justify",
                  fontFamily: "Merriweather, serif",
                  fontSize: { xs: "16px", md: "18px" },
                  lineHeight: 1.7,
                  color: "#555",
                }}
                component="div"
              >
                First in Madhya Pradesh to perform:
                <ul>
                  <li>Coronary Bypass Surgeries</li>
                  <li>Coronary Angioplasty</li>
                  <li>
                    Catheter-based interventions – record-high procedures in
                    central India.
                  </li>
                </ul>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  );
}
