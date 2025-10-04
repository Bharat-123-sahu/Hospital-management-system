import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@mui/material";

export default function ShowPharmacy() {
  const [doctors, setDoctors] = useState([]);

  // Fetch data from backend when component loads
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/pharmacy")
      .then((res) => setDoctors(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      
      <h2>Pharmacy list</h2>
      <TableContainer component={Paper} className="mt-4 mb-4">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell className="bg-primary">ID</TableCell>
              <TableCell className="bg-primary">Medicine Name</TableCell>
              <TableCell className="bg-primary">Quentity</TableCell>
              <TableCell className="bg-primary">Price</TableCell>
              <TableCell className="bg-primary">Expiredate</TableCell>
              {/* <TableCell align="center" className="bg-primary">Email</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {doctors.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="bg-warning">{row.id}</TableCell>
                <TableCell className="bg-danger">{row.medicineName}</TableCell>
                <TableCell className="bg-secondary">{row.quantity}</TableCell>
                <TableCell className="bg-secondary">{row.price}</TableCell>
                <TableCell className="bg-secondary">{row.expiryDate}</TableCell>
                {/* <TableCell className="bg-dark " style={{color:"white"}} align="center">{row.email}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
