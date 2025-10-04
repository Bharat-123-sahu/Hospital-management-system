import express from "express";
import Db from "./config/db.js";
import { Createdatabase } from "./models/loginmodel.js";
import cors from "cors";
import {
  Pharmacyrouter,
  DoctorRouter,
  AppoinmentRouter,
  loginmodule,
} from "./routes/pharmacyroute.js";

const app = express();
app.use(express.json());
app.use(cors());

Db.connect((err) => {
  if (err) {
    console.error("Not connected to database:", err.message);
  } else {
    console.log(" Database connected");
    Createdatabase(); // Run only if connection success
  }
});
//  app.get('/api/pharmacy',(req,res)=>{
//   try {
//     const [rows] = Db.query("SELECT * FROM pharmacy");
//     res.json(rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Database error" });
//   }
// })
app.use("/api/pharmacy", Pharmacyrouter);
app.use("/api/doctors", DoctorRouter);
app.use("/api/appointments", AppoinmentRouter);
app.use("/api/user_signup", loginmodule);

app.get("/", (req, res) => {
  res.send("welcome to the e-commerce website");
});

app.listen(9000, () => {
  console.log("🚀 Server is running on port 9000");
});
