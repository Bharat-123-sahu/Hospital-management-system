// import * as React from "react";
//
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
import axios from "axios";
import { useEffect, useState } from "react";


// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   new createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   new createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   new createData('Eclair', 262, 16.0, 24, 6.0),
//   new createData('Cupcake', 305, 3.7, 67, 4.3),
//    new createData('Gingerbread', 356, 16.0, 49, 3.9),
//
export default function Patientdata() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/Patients")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  },[]);

  return (
    <>
      <TableContainer component={Paper} className="mt-4 mb-4">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell className="bg-primary">ID</TableCell>
              <TableCell className="bg-primary">Patient Name</TableCell>
              <TableCell className="bg-primary">Age</TableCell>
              <TableCell align="center" className="bg-primary">
                Gender
              </TableCell>
              <TableCell align="center" className="bg-primary">
                Phone
              </TableCell>
              <TableCell align="center" className="bg-primary">
                Email
              </TableCell>
              <TableCell align="center" className="bg-primary">
                Address
              </TableCell>
              <TableCell  ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="bg-warning">{row.PatientID}</TableCell>
                <TableCell className="bg-danger">{row.Name}</TableCell>
                <TableCell className="bg-secondary">{row.Age}</TableCell>
                <TableCell
                  className="bg-dark "
                  style={{ color: "white" }}
                  align="center"
                >
                  {row.Gender}
                </TableCell>
                <TableCell className="bg-secondary">{row.Phone}</TableCell>
                <TableCell className="bg-secondary">{row.Email}</TableCell>
                <TableCell className="bg-secondary">{row.Address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
