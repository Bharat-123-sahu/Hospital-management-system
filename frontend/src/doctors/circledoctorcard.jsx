import React from "react";
import Footer from "../includes/footer";
import { CircleCardCollection } from "./circlecardcloolection";
// import "./circledoctorcard.css"; // Assuming custom styles for 'sidenav' are here
import { Card, CardContent, Typography } from "@mui/material";

export default function Circledoccard() {
  return (
    <>
      {/* 1. Main Container - Use 'container-fluid' but remove unnecessary inline styles */}
      <div className="container-fluid p-0">
        
        {/* Hero Image - Made fluid using Bootstrap class */}
        <div className="heroimg">
          <img
            src="https://www.carehospitals.com/indore/assets/images/banners/doctorlist-banner.webp"
            alt="Doctor Banner"
            // Use 'img-fluid' for responsive image sizing
            className="img-fluid" 
            style={{ display: "block" }} 
          />
        </div>

        {/* Horizontal Line */}
        <hr className="hero-divider my-4" /> {/* Added vertical margin (my-4) */}

        {/* 2. Main Layout Area (Sidebar + Doctor Cards) */}
        <div className="container"> {/* Use 'container' for centered, responsive max-width */}
          <div className="row">

            {/* 3. Sidebar - Responsive Sizing */}
            {/* d-none d-lg-block: Hide on small/medium screens, show only on large screens and up.
              col-lg-3: Takes 3/12 columns on large screens. 
              col-12: Takes full width on small screens (but it's hidden, so this won't matter).
            */}
            <div className="col-12 col-lg-3 d-none d-lg-block">
              <div className="sidenav">
                <h2>Best doctors</h2>
                <a href="#home" className="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
              </div>
            </div>
            
            {/* 4. Main Content Area (Doctor Cards) - Responsive Sizing and Fixes */}
            {/* col-12: Takes full width on all screen sizes.
              col-lg-9: Takes 9/12 columns on large screens (when sidebar is visible).
              ps-lg-4: Adds padding-left on large screens to separate from the sidebar.
            */}
            <div className="col-12 col-lg-9">
              {/* Removed: style={{position:"relative",left:"60px", borderLeft:"1px"}} 
                  Fixed positioning is non-responsive and causes overflow. 
              */}
              <CircleCardCollection/>
            </div>
          </div>
          
          <hr className="mt-5" color="red"/>
        </div>
      </div>
      
      <Footer />
    </>
  );
}