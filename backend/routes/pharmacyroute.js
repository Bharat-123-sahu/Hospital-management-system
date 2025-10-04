import express from "express";
import multer from "multer";
import path from "path";
import {
  addMedicine,
  DeletePharmacy,
  getMedicines,
  UpdatePharmacy,
} from "../controllers/pharmacycontroller.js";
import { AddDoctor, GetDoctor } from "../controllers/doctorcontroller.js";
import {
  AddAppoinment,
  GetAppoinmentdata,
} from "../controllers/Appoinmentcontroll.js";
import {
  AddPatient,
  GetPatient,
  // LoginPatient,
} from "../controllers/userlogincontroller.js";

// STEP 1: Multer aur Path ko import karein


// STEP 2: Multer ka Storage Engine setup karein
// Yeh code batata hai ki file kahan aur kis naam se save hogi
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     // Files 'uploads/' folder mein save hongi. Yeh folder aapke project mein hona chahiye.
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     // File ka ek unique naam banate hain taaki same naam ki files overwrite na hon.
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(
//       null,
//       file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
//     );
//   },
// });

// const upload = multer({ storage: storage });

// =======================================================
// Aapka baaki ka code jaisa tha waisa hi hai
// =======================================================

export const Pharmacyrouter = express.Router();

// POST - add medicine
Pharmacyrouter.post("/", addMedicine);
// GET - all medicines
Pharmacyrouter.get("/", getMedicines);
Pharmacyrouter.delete("/", DeletePharmacy);
Pharmacyrouter.patch("/", UpdatePharmacy);

export const DoctorRouter = express.Router();
DoctorRouter.post("/", AddDoctor);
DoctorRouter.get("/", GetDoctor);

export const AppoinmentRouter = express.Router();
AppoinmentRouter.post("/", AddAppoinment);
AppoinmentRouter.get("/", GetAppoinmentdata);

// =======================================================
// Yahan par humne change kiya hai
// =======================================================
export const loginmodule = express.Router();

// STEP 3: Multer ko middleware ke roop mein add karein
// Dekhein kaise `upload.single('user_image')` ko AddPatient se pehle lagaya gaya hai
loginmodule.post("/",AddPatient)
// loginmodule.post("/login", LoginPatient);

loginmodule.get("/", GetPatient);
