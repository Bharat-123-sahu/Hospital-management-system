import Db from "../config/db.js";

// Add medicine
export const addMedicine = (req, res) => {
  const { medicineName, quantity, price, expiryDate } = req.body;

  const sql =
    "INSERT INTO pharmacy (medicineName, quantity, price, expiryDate) VALUES (?, ?, ?, ?)";
  Db.query(sql, [medicineName, quantity, price, expiryDate], (err, result) => {
    if (err) {
      console.error(" Error inserting medicine:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res
      .status(201)
      .json({ message: " Medicine added successfully", id: result.insertId });
  });
};

// Get all medicines
export const getMedicines = (req, res) => {
  Db.query("SELECT * FROM pharmacy ORDER BY createdAt DESC", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
};

// export const deletemedicine=(req,res)=>{
//     const sql=`select * from pharmacy where id=`
// }

export const UpdatePharmacy = (req, res) => {
  const { medicineName, quantity, price, expiryDate } = req.body;

  const sql = `
    UPDATE pharmacy 
    SET medicineName=?, quantity=?, price=?, expiryDate=?
    WHERE id=?
  `;

  Db.query(
    sql,
    [medicineName, quantity, price, expiryDate],
    (err, result) => {
      if (err) {
        console.error("Error updating pharmacy:", err);
        return res.status(500).json({ error: "Backend Error" });
      }
      return res.status(200).json({ success: "Pharmacy updated successfully" });
    }
  );
};

// Delete Appointment
export const DeletePharmacy = (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM pharmacy WHERE id=?`;

  Db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting Pharmacy:", err);
      return res.status(500).json({ error: "Backend Error" });
    }
    return res.status(200).json({ success: "Pharmacy deleted successfully" });
  });
};