import Db from "../config/db.js";

// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
export const AddPatient = (req, res) => {
  const {
    user_name,
    user_age,
    user_gender,
    user_phone,
    user_email,
    user_address,
    user_image,
    user_conform_password,
    user_password,
  } = req.body;
  const sql = `INSERT INTO user_login(user_name,
    user_age,
    user_gender,
    user_phone,
    user_email,
    user_address,
    user_image,
    user_conform_password,
    user_password) VALUES (?,?,?,?,?,?,?,?,?)`;
  Db.query(
    sql,
    [
      user_name,
      user_age,
      user_gender,
      user_phone,
      user_email,
      user_address,
      user_image,
      user_conform_password,
      user_password,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Backend Error" });
      } else {
        return res
          .status(200)
          .json({ success: "data edit successfully", Id: result.Id });
      }
    }
  );
};
export const GetPatient = (req, res) => {
  Db.query(`SELECT * FROM user_login`, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "error getting data" });
    } else {
      return res.json(result);
    }
  });
};
export const UpdatePatients = (req, res) => {
  const {
    user_name,
    user_age,
    user_gender,
    user_phone,
    user_email,
    user_address,
    user_image,
    user_conform_password,
    user_password,
  } = req.body;

  const sql = `
    UPDATE user_login 
    SET user_name=?,user_age=?,user_gender=?,user_phone=?,user_email=?,user_address=?,user_image,user_conform_password=?,user_password=?
    WHERE user_id=?
  `;

  Db.query(
    sql,
    [
      user_name,
      user_age,
      user_gender,
      user_phone,
      user_email,
      user_address,
      user_image,
      user_conform_password,
      user_password,
    ],
    (err, result) => {
      if (err) {
        console.error("Error updating logindetail:", err);
        return res.status(500).json({ error: "Backend Error" });
      }
      return res
        .status(200)
        .json({ success: "logindetail  updated successfully" });
    }
  );
};

// Delete Appointment
export const DeletePatients = (req, res) => {
  const { user_id } = req.params;

  const sql = `DELETE FROM user_login WHERE user_id=?`;

  Db.query(sql, [user_id], (err, result) => {
    if (err) {
      console.error("Error deleting login detail:", err);
      return res.status(500).json({ error: "Backend Error" });
    }
    return res
      .status(200)
      .json({ success: "login detail deleted successfully" });
  });
};
// ============================================================================================
// export const LoginPatient = async (req, res) => {
//   try {
//     const { user_email, user_password } = req.body;

//     // 1. Check karein ki email aur password bheje gaye hain ya nahi
//     if (!user_email || !user_password) {
//       return res.status(400).json({ message: "Email and password are required." });
//     }

//     // 2. Database mein email dhoondhein
//     const sql = "SELECT * FROM user_login WHERE user_email = ?";
//     Db.query(sql, [user_email], async (err, results) => {
//       if (err) {
//         return res.status(500).json({ message: "Database error", error: err });
//       }

//       // 3. Agar user nahi milta hai
//       if (results.length === 0) {
//         return res.status(404).json({ message: "User not found." });
//       }

//       const user = results[0];
//       const hashedPassword = user.user_password; // Database se hashed password nikalein

//       // 4. Password compare karein
//       const isMatch = await bcrypt.compare(user_password, hashedPassword);

//       // 5. Agar password match nahi hota hai
//       if (!isMatch) {
//         return res.status(401).json({ message: "Invalid email or password." });
//       }

//       // 6. Agar password match ho jaata hai - Token banayein
//       const payload = {
//         id: user.user_id, // user ki id
//         email: user.user_email,
//       };

//       // Apne project mein .env file banakar usmein ek SECRET KEY rakhein
//       // Jaise: JWT_SECRET = 'mysecretkey123'
//       const token = jwt.sign(payload, process.env.JWT_SECRET || "my-default-secret-key", {
//         expiresIn: "1h", // Token 1 ghante mein expire ho jaayega
//       });

//       // User object se password hata kar response bhejein
//       delete user.user_password;

//       res.status(200).json({
//         message: "Login successful",
//         token: token,
//         user: user,
//       });
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
