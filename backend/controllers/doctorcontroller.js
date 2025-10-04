import Db from "../config/db.js";

export const AddDoctor = (req, res) => {
  const {
    Image,
    Name,
    Specialization,
    Phone,
    Email,
    Qualificatioin,
    Hospital,
    Position,
  } = req.body;
  const sql = `INSERT INTO Doctors (Name,Specialization,Phone,Email,Qualificatioin,Hospital,Position,Image) values (?,?,?,?,?,?,?,?)`;
  Db.query(
    sql,
    [Name, Specialization, Phone, Email, Qualificatioin, Hospital, Position,Image],
    (err, result) => {
      if (err) {
        console.log("error inserting medicine", err);
        return res.status(500).json({ error: "Database Error " });
      } else {
        return res.status(200).json({
          message: "Data added successfully,id: result.insertId",
          id: result.insertId,
        });
      }
    }
  );
};

export const GetDoctor = (req, res) => {
  Db.query(`SELECT * FROM Doctors `, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "no data shows" });
    } else {
      return res.json(result);
    }
  });
};
export const Updatedoctor = (req, res) => {
  const { Name,Specialization,Phone,Email,Qualificatioin,Hospital,Position,Image} = req.body;

  const sql = `
    UPDATE Doctors 
   SET Name=?,Specialization=?,Phone=?,Email=?,Qualificatioin=?,Hospital=?,Position=?,Image=?
    WHERE DoctorID=?
  `;

  Db.query(
    sql,
    [Name,Specialization,Phone,Email,Qualificatioin,Hospital,Position,Image],
    (err, result) => {
      if (err) {
        console.error("Error updating Doctors:", err);
        return res.status(500).json({ error: "Backend Error" });
      }
      return res.status(200).json({ success: "Doctors updated successfully" });
    }
  );
};

// Delete Appointment
export const Deletedoctor = (req, res) => {
  const { DoctorID } = req.params;

  const sql = `DELETE FROM Doctors WHERE DoctorID=?`;

  Db.query(sql, [DoctorID], (err, result) => {
    if (err) {
      console.error("Error deleting doctor:", err);
      return res.status(500).json({ error: "Backend Error" });
    }
    return res.status(200).json({ success: "Doctors deleted successfully" });
  });
};