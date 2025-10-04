// show data ow the doctors table form may
import { Tab } from "@mui/material";
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
import { useState, useEffect } from "react";
export default function Appoinmentdata() {
  const [appoinment, setAppoinment] = useState([]);

  // Fetch data from backend when component loads
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/appointments")
      .then((res) => setAppoinment(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <TableContainer component={Paper} className="mt-4 mb-4">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell className="bg-primary">ID</TableCell>
              <TableCell className="bg-primary">Patient Name</TableCell>
              <TableCell className="bg-primary">Doctor Name</TableCell>
              <TableCell className="bg-primary">Appoinment data</TableCell>
              <TableCell className="bg-primary">Appoinment time</TableCell>
              <TableCell className="bg-primary">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appoinment.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="bg-warning">
                  {row.AppointmentID}
                </TableCell>
                <TableCell className="bg-danger">{row.PatientID}</TableCell>
                <TableCell className="bg-secondary">{row.DoctorID}</TableCell>
                <TableCell className="bg-warning">
                  {row.AppointmentDate}
                </TableCell>
                <TableCell className="bg-primary">
                  {row.AppointmentTime}
                </TableCell>
                <TableCell className="bg-danger">{row.Status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
