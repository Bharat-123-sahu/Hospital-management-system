import React, { useEffect, useState } from "react";
import Doctor from "./doctors/doctordata";
import Navbar from "./includes/navbar";
import Footer from "./includes/footer";
import Cards from "./cardscontainer/cards";
import Patientdata from "./patients/patientsdata";
import { display } from "@mui/system";
import { Typography } from "@mui/material";
import Hero from "./includes/herosection";
import About from "./aboutsection/about";
import { Doctorscards } from "./doctors/doctorscars";
import { Latestcard } from "./cardscontainer/latestblogcard";
import Secondnavbar from "./includes/secondnavbar";
import { useParams } from "react-router-dom";
import axios from "axios";

function Dashboard() {
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

  const blue = "#1976d2";
  const skyblue = "#03a9f4";
  // const [renderdata, setRenderdata] = useState(false);

  // const onhandlechange=()=>{
  //     setRenderdata(true)
  // }
  return (
    <>
      <header>
        <Hero />
      </header>
      <section className=" bg-light">
        <div
          className="container-fluid py-4 mt-4"
          style={{ backgroundColor: "#ece6de" }}
        >
          <div className="row g-4">
          

            {/* Fours cards  about   */}
            <Cards
              tital={" Doctors Appoinment"}
              number={"9303017705"}
              bgcolor={blue}
              appoinment={
                <i
                  style={{ fontSize: "60px" }}
                  className="fa-solid fa-calendar-check"
                ></i>
              }
            />

            {/*  Available Beds  */}
            <Cards
              tital={"speacility treatment"}
              data={
                "Experience the best-in-class medical treatments with over 30+ specialities."
              }
              bgcolor={skyblue}
              appoinment={
                <i
                  style={{ fontSize: "60px" }}
                  className="fa-solid fa-truck-medical"
                ></i>
              }
            />

            {/*  Lab Reports Pending  */}
            <Cards
              tital={"Find a doctor"}
              data={
                "Experience the best-in-class medical treatments with over 30+ specialities."
              }
              bgcolor={blue}
              appoinment={
                <i
                  style={{ fontSize: "60px" }}
                  className="fa-solid fa-user-doctor"
                ></i>
              }
            />

            {/*  Billing Today  */}
            <Cards
              tital={"Healt checkup package"}
              data={
                "Experience the best-in-class medical treatments with over 30+ specialities."
              }
              bgcolor={skyblue}
              appoinment={
                <i
                  style={{ fontSize: "60px" }}
                  className="fa-solid fa-money-bill-transfer"
                ></i>
              }
            />

            {/*  Medicines Low in Stock  
            <Cards tital={"Medicines"} number={number} />

             Staff On Duty  
            <Cards tital={"staff"} number={number} />*/}
          </div>
        </div>
      </section>

      <Typography variant="h3" align="center" sx={{ mt: 5, fontWeight: "700" }}>
        Our Doctors
      </Typography>


      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        {doctors.length > 0 ? (
          doctors.map((doc) => (
            <Doctorscards
              Image={doc.Image}
              key={doc.DoctorID}
              Name={doc.Name}
              Specialization={doc.Specilization}
              Phone={doc.Phone}
              Email={doc.Email}
              // img=""
            />
          ))
        ) : (
          <Typography align="center" sx={{ mt: 3 }}>
            No Doctors Found
          </Typography>
        )}
      </div>

      <Typography variant="h3" align="center" sx={{ mt: 5, fontWeight: "700" }}>
        Latest Blog
      </Typography>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <Latestcard
          title="Five tips for healthy eyes"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem provident expedita assumenda molestiae culpa quo porro ab quos laboriosam at blanditiis cum quas, amet hic vero labore placeat doloremque perspiciatis.
    Dolorum saepe molestiae officiis adipisci illo nemo beatae voluptates commodi a sit cupiditate natus ab tenetur, quos nihil? Molestiae vel sit optio aut quaerat impedit, recusandae dolorum mollitia dolor reprehenderit?
    Quos tempore quibusdam numquam dolore molestiae ex rerum vel magnam soluta quod deleniti corrupti expedita, vero iste unde dolorem corporis iure? Dolorem vel, dolores ipsa amet excepturi est corporis nostrum."
          img="https://www.carehospitals.com/indore/assets/images/blogs/five-tips-for-healthy-eyes.webp"
        />
        <Latestcard
          title="Common tests for Diagnosis of a Heart Disease"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem provident expedita assumenda molestiae culpa quo porro ab quos laboriosam at blanditiis cum quas, amet hic vero labore placeat doloremque perspiciatis.
    Dolorum saepe molestiae officiis adipisci illo nemo beatae voluptates commodi a sit cupiditate natus ab tenetur, quos nihil? Molestiae vel sit optio aut quaerat impedit, recusandae dolorum mollitia dolor reprehenderit?
    Quos tempore quibusdam numquam dolore molestiae ex rerum vel magnam soluta quod deleniti corrupti expedita, vero iste unde dolorem corporis iure? Dolorem vel, dolores ipsa amet excepturi est corporis nostrum."
          img="https://www.carehospitals.com/indore/assets/images/blogs/five-tips-for-healthy-eyes.webp"
        />
        <Latestcard
          title="Keeping Fit While on the Go/Travelling"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem provident expedita assumenda molestiae culpa quo porro ab quos laboriosam at blanditiis cum quas, amet hic vero labore placeat doloremque perspiciatis.
    Dolorum saepe molestiae officiis adipisci illo nemo beatae voluptates commodi a sit cupiditate natus ab tenetur, quos nihil? Molestiae vel sit optio aut quaerat impedit, recusandae dolorum mollitia dolor reprehenderit?
    Quos tempore quibusdam numquam dolore molestiae ex rerum vel magnam soluta quod deleniti corrupti expedita, vero iste unde dolorem corporis iure? Dolorem vel, dolores ipsa amet excepturi est corporis nostrum."
          img="https://www.carehospitals.com/indore/assets/images/blogs/five-tips-for-healthy-eyes.webp"
        />
        <Latestcard
          title="Keeping Fit While on the Go/Travelling"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem provident expedita assumenda molestiae culpa quo porro ab quos laboriosam at blanditiis cum quas, amet hic vero labore placeat doloremque perspiciatis.
    Dolorum saepe molestiae officiis adipisci illo nemo beatae voluptates commodi a sit cupiditate natus ab tenetur, quos nihil? Molestiae vel sit optio aut quaerat impedit, recusandae dolorum mollitia dolor reprehenderit?
    Quos tempore quibusdam numquam dolore molestiae ex rerum vel magnam soluta quod deleniti corrupti expedita, vero iste unde dolorem corporis iure? Dolorem vel, dolores ipsa amet excepturi est corporis nostrum."
          img="https://www.carehospitals.com/indore/assets/images/blogs/five-tips-for-healthy-eyes.webp"
        />
        <Latestcard
          title="Keeping Fit While on the Go/Travelling"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem provident expedita assumenda molestiae culpa quo porro ab quos laboriosam at blanditiis cum quas, amet hic vero labore placeat doloremque perspiciatis.
    Dolorum saepe molestiae officiis adipisci illo nemo beatae voluptates commodi a sit cupiditate natus ab tenetur, quos nihil? Molestiae vel sit optio aut quaerat impedit, recusandae dolorum mollitia dolor reprehenderit?
    Quos tempore quibusdam numquam dolore molestiae ex rerum vel magnam soluta quod deleniti corrupti expedita, vero iste unde dolorem corporis iure? Dolorem vel, dolores ipsa amet excepturi est corporis nostrum."
          img="https://www.carehospitals.com/indore/assets/images/blogs/five-tips-for-healthy-eyes.webp"
        />
        <Latestcard
          title="Keeping Fit While on the Go/Travelling"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem provident expedita assumenda molestiae culpa quo porro ab quos laboriosam at blanditiis cum quas, amet hic vero labore placeat doloremque perspiciatis.
    Dolorum saepe molestiae officiis adipisci illo nemo beatae voluptates commodi a sit cupiditate natus ab tenetur, quos nihil? Molestiae vel sit optio aut quaerat impedit, recusandae dolorum mollitia dolor reprehenderit?
    Quos tempore quibusdam numquam dolore molestiae ex rerum vel magnam soluta quod deleniti corrupti expedita, vero iste unde dolorem corporis iure? Dolorem vel, dolores ipsa amet excepturi est corporis nostrum."
          img="https://www.carehospitals.com/indore/assets/images/blogs/five-tips-for-healthy-eyes.webp"
        />
      </div>
      <Typography variant="h3" sx={{ mt: 5, mb: 5, alignContent: "justify" }}>
        Narayan Hospitals - Best Hospital in Heart
      </Typography>
      <Typography variant="h6" sx={{ mt: 3, mb: 5, alignContent: "left" }}>
        CARE CHL Hospitals is regarded as one of the best hospitals in Indore
        that offers treatment for a wide range of conditions. The hospital
        offers the most advanced treatment and diagnostic services in all major
        specialities, including Cardiology, Orthopaedics, Gastroenterology,
        Cancer, Paediatrics, Obstetrics and Gynaecology, Pulmonology,
        Transplants, Neurology, and others. Our hospital is equipped with highly
        advanced technology, world-class infrastructure, and state-of-the-art
        facilities that provide world-class patient experience and the finest
        treatment outcomes
        <br />
        CARE CHL is one of the top hospitals in Indore that offers top-notch
        care to patients. Our hospital boasts the best team of highly qualified
        doctors with years of experience in managing and treating patients with
        normal to complex conditions. To provide a multidisciplinary approach
        and overall care to the patients our doctors work in collaboration with
        other speciality experts. Also, the dedicated nursing staff at our
        facility is always available to assist the patients during the recovery
        phase of their treatments.
        <br />
        Being the best multi-speciality hospital in Indore, we have consistently
        delivered best-in-class clinical outcomes by offering superior quality,
        including in-patient, out-patient, and 24*7 emergency care services and
        ultra-modern health facilities using vast medical expertise and advanced
        healthcare technologies and equipment. With high-end infrastructure, we
        provide the latest diagnostic techniques, such as Cath Lab with IVUS,
        OCT, FFR, 24x7 ultra-modern radiology services with CT Scan, MRI scan,
        USG, Mammography, Digital X-Ray, advanced USG guided Gastroscopes,
        Endoscopy, and many more.
        <br />
        CARE CHL Hospitals, Indore is the best hospital in Indore where doctors,
        surgeons, nursing staff and medical team are available 24x7 to attend
        any kind of emergencies. Our ultra-modern facilities like advanced ICUs,
        OTs, and highly advanced ventilators ensure that the patient gets the
        right treatment at the right time. We are the most preferred hospital in
        Indore, that delivers the best care to all patients with the most
        reasonable costs while keeping the highest treatment standards. We are
        committed to providing unmatched quality healthcare to every individual
        we serve.
      </Typography>

      <Footer />
    </>
  );
}

export default Dashboard;
