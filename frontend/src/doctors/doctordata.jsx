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
import { useState , useEffect} from "react";
export default function Doctor() {
   const [doctors, setDoctors] = useState([]);

  // Fetch data from backend when component loads
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/doctors")
      .then((res) => setDoctors(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <TableContainer component={Paper} className="mt-4 mb-4">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell className="bg-primary">ID</TableCell>
              <TableCell className="bg-primary">Doctor Name</TableCell>
              <TableCell className="bg-primary">Specilization</TableCell>
              <TableCell className="bg-primary">Qualification</TableCell>
              <TableCell className="bg-primary">Hospital</TableCell>
              <TableCell className="bg-primary">Position</TableCell>
              <TableCell align="center" className="bg-primary">
                phone
              </TableCell>
              <TableCell align="center" className="bg-primary">
                Email
              </TableCell>
              <TableCell align="center" className="bg-primary">
                Image
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctors.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="bg-warning">{row.DoctorID}</TableCell>
                <TableCell className="bg-danger">{row.Name}</TableCell>
                <TableCell className="bg-secondary">{row.Specialization}</TableCell>
                <TableCell className="bg-warning">{row.Qualificatioin}</TableCell>
                <TableCell className="bg-primary">{row.Hospital}</TableCell>
                <TableCell className="bg-danger">{row.Position}</TableCell>
                <TableCell className="bg-warning">{row.Phone}</TableCell>
                <TableCell
                  className="bg-dark "
                  style={{ color: "white" }}
                  align="center"
                >
                  {row.Email}
                </TableCell>
                <TableCell className="bg-warning">{row.Image}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
