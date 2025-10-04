// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import Dashboard from "./dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import "./App.css";
import Patientdata from "./patients/patientsdata";
import About from "./aboutsection/about";
import Circledoccard from "./doctors/circledoctorcard";
// import Anudeep from "./anudeepdata";
import { Controll, Loginform } from "./anudeepdata";
import Navbar from "./includes/navbar";
import Secondnavbar from "./includes/secondnavbar";
import Appoinment from "./formdata/Appoinment";
import ViewAppointment from "./formdata/viewappoinment";
import LoginForm from "./Login";
import { useState } from "react";
import { ProtectRoute } from "./protectRoutes";
import AppointmentForm from "./appointment/appoinmentform";
import BillingForm from "./forms/billingform";
import DoctorForm from "./doctors/doctorsform";
import LaboratoryForm from "./forms/laboratoryform";

import PharmacyForm from "./pharmacy/pharmacyform";
import StaffForm from "./forms/staffform";
import ShowPharmacy from "./pharmacy/showpharmacy";
import Doctor from "./doctors/doctordata";
import Appoinmentdata from "./appointment/appoinmentdata";
import SignupForm from "./forms/signupform";

// import Patientdata from "./patients/patientsdata";

// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [login, setLogin] = useState({});

  return (
    <BrowserRouter>
      <Navbar />
      <Secondnavbar />

      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<LoginForm />} />

        {/* Protected Routes */}
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/patients"
          element={
            <ProtectRoute>
              <Patientdata />
            </ProtectRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectRoute>
              <About />
            </ProtectRoute>
          }
        />
        <Route
          path="/alldoctor"
          element={
            <ProtectRoute>
              <Circledoccard />
            </ProtectRoute>
          }
        />
        {/* <Route
          path="/appoinment"
          element={
            <ProtectRoute>
              <Appoinment />
            </ProtectRoute>
          }
        /> */}
        <Route
          path="/viewappoinment"
          element={
            <ProtectRoute>
              <ViewAppointment />
            </ProtectRoute>
          }
        />
        <Route path="/bookappointment" element={<AppointmentForm />} />
        <Route path="/billingform" element={<BillingForm />} />
        <Route path="/doctorform" element={<DoctorForm />} />
        <Route path="/laboratoryform" element={<LaboratoryForm />} />
        <Route path="/signupform" element={<SignupForm />} />
        <Route path="/viewPatients" element={<Patientdata />} />
        <Route path="/pharmacyform" element={<PharmacyForm />} />
        <Route path="/staffform" element={<StaffForm />} />
        <Route path="/showspharmacy" element={<ShowPharmacy />} />
        <Route path="/showdoctor" element={<Doctor />} />
        <Route path="/showappoinmentdata" element={<Appoinmentdata />} />
      </Routes>
    </BrowserRouter>

    // < Controll/>

    // <>
    //  <Dashboard/>
    // <Patientdata/>
    // </>
  );
}

export default App;
