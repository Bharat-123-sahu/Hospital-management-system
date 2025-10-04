import Db from "../config/db.js";

export const Createdatabase = () => {
  Db.query("SHOW DATABASES", (err, results) => {
    if (err) {
      console.error("❌ Error showing databases:", err.message);
      return;
    }

    const exists = results.some((db) => db.Database === "manage-ecommerce");

    if (exists) {
      console.log("✅ Database 'manage-ecommerce' already exists");
    } else {
      Db.query("CREATE DATABASE `manage-ecommerce`", (err2) => {
        if (err2) {
          console.error("❌ Error creating database:", err2.message);
        } else {
          console.log("🎉 Database 'manage-ecommerce' created successfully");

          // Switch to the new database
          Db.query("USE `manage-ecommerce`", (err3) => {
            if (err3) {
              console.error("❌ Error switching database:", err3.message);
              return;
            }

            // Create tables
            // Db.query(`
            //   CREATE TABLE Patients (
            //     PatientID INT AUTO_INCREMENT PRIMARY KEY,
            //     Name VARCHAR(100) NOT NULL,
            //     Age INT,
            //     Gender ENUM('Male','Female','Other'),
            //     Phone VARCHAR(15),
            //     Email VARCHAR(100),
            //     Address VARCHAR(255),
            //     CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            //   )
            // `);

            Db.query(
              `CREATE TABLE IF NOT EXISTS admin_login (
          id INT AUTO_INCREMENT PRIMARY KEY,
          email VARCHAR(100) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`
            );

            Db.query(
              `CREATE TABLE IF NOT EXISTS user_login (
          user_id INT AUTO_INCREMENT PRIMARY KEY,
          user_name VARCHAR(50) NOT NULL,
          user_email VARCHAR(100) NOT NULL UNIQUE,
          user_age VARCHAR(50) NOT NULL,
          user_gender VARCHAR(50) NOT NULL,
          user_phone INT NOT NULL UNIQUE,
          user_address VARCHAR(100) NOT NULL,
          user_password VARCHAR(100) NOT NULL,
          user_conform_password VARCHAR(100) NOT NULL,
          user_image VARCHAR(255) ,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`
            );

            Db.query(`
              CREATE TABLE Doctors (
                DoctorID INT AUTO_INCREMENT PRIMARY KEY,
                Name VARCHAR(100) NOT NULL,
                Specialization VARCHAR(100),
                Phone VARCHAR(15),
                Email VARCHAR(100),
                Qualificatioin VARCHAR(50),
                Position VARCHAR(100),
                Hospital VARCHAR(100)
                Image VARCHAR(255),
                CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
              )
            `);

            Db.query(`
              CREATE TABLE Appointments (
                AppointmentID INT AUTO_INCREMENT PRIMARY KEY,
                PatientID INT,
                DoctorID INT,
                AppointmentDate DATE,
                AppointmentTime TIME,
                Status ENUM('Scheduled','Completed','Cancelled') DEFAULT 'Scheduled',
                CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),
                FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID)
              )
            `);

            Db.query(`
              CREATE TABLE Billing (
                BillID INT AUTO_INCREMENT PRIMARY KEY,
                PatientID INT,
                Amount DECIMAL(10,2),
                PaymentStatus ENUM('Paid','Pending','Cancelled') DEFAULT 'Pending',
                BillDate DATE,
                CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (PatientID) REFERENCES Patients(PatientID)
              )
            `);

            Db.query(`
             CREATE TABLE pharmacy (
                   id INT AUTO_INCREMENT PRIMARY KEY,
                    medicineName VARCHAR(255) NOT NULL,
                  quantity INT NOT NULL,
                 price DECIMAL(10,2) NOT NULL,
                  expiryDate DATE NOT NULL,
                 createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
            `);

            Db.query(`
              CREATE TABLE Laboratory (
                TestID INT AUTO_INCREMENT PRIMARY KEY,
                PatientID INT,
                TestName VARCHAR(100),
                Result VARCHAR(255),
                TestDate DATE,
                CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (PatientID) REFERENCES Patients(PatientID)
              )
            `);

            Db.query(`
              CREATE TABLE Staff (
                StaffID INT AUTO_INCREMENT PRIMARY KEY,
                Name VARCHAR(100),
                Role VARCHAR(50),
                Department VARCHAR(50),
                Phone VARCHAR(15),
                Email VARCHAR(100),
                CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
              )
            `);
            Db.query(`CREATE TABLE BillingDetails (
                BillingDetailID INT AUTO_INCREMENT PRIMARY KEY,
                BillID INT,
                MedicineID INT,
                Quantity INT,
                Price DECIMAL(10,2),
                FOREIGN KEY (BillID) REFERENCES Billing(BillID),
                FOREIGN KEY (MedicineID) REFERENCES Pharmacy(MedicineID)
             )
                
           `);

            console.log("🎉 All tables created successfully!");
          });
        }
      });
    }
  });
};
