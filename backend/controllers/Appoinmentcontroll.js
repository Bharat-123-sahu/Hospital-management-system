import Db from "../config/db.js";

// Add Appointment
export const AddAppoinment = (req, res) => {
  const { PatientID, DoctorID, AppointmentDate, AppointmentTime, Status } = req.body;

  const sql = `
    INSERT INTO appointments (PatientID, DoctorID, AppointmentDate, AppointmentTime, Status) 
    VALUES (?, ?, ?, ?, ?)
  `;

  Db.query(sql, [PatientID, DoctorID, AppointmentDate, AppointmentTime, Status], (err, result) => {
    if (err) {
      console.error("Error inserting appointment:", err);
      return res.status(500).json({ error: "Backend Error" });
    }
    return res.status(200).json({
      success: "Appointment added successfully",
      insertId: result.insertId,
    });
  });
};

// Get Appointments
export const GetAppoinmentdata = (req, res) => {
  Db.query(`SELECT * FROM appointments`, (err, result) => {
    if (err) {
      console.error("Error fetching appointments:", err);
      return res.status(500).json({ message: "Error getting data" });
    }
    return res.json(result);
  });
};
// Update Appointment
export const UpdateAppoinment = (req, res) => {
  const { AppointmentID, PatientID, DoctorID, AppointmentDate, AppointmentTime, Status } = req.body;

  const sql = `
    UPDATE appointments 
    SET PatientID=?, DoctorID=?, AppointmentDate=?, AppointmentTime=?, Status=? 
    WHERE AppointmentID=?
  `;

  Db.query(
    sql,
    [PatientID, DoctorID, AppointmentDate, AppointmentTime, Status, AppointmentID],
    (err, result) => {
      if (err) {
        console.error("Error updating appointment:", err);
        return res.status(500).json({ error: "Backend Error" });
      }
      return res.status(200).json({ success: "Appointment updated successfully" });
    }
  );
};

// Delete Appointment
export const DeleteAppoinment = (req, res) => {
  const { AppointmentID } = req.params;

  const sql = `DELETE FROM appointments WHERE AppointmentID=?`;

  Db.query(sql, [AppointmentID], (err, result) => {
    if (err) {
      console.error("Error deleting appointment:", err);
      return res.status(500).json({ error: "Backend Error" });
    }
    return res.status(200).json({ success: "Appointment deleted successfully" });
  });
};