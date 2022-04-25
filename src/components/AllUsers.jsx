import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Link } from "react-router-dom";
const AllUsers = () => {
  const [alldata, setAlldata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/profile")
      .then((response) => setAlldata(response.data));
  }, []);

  const delHandler = (id) => {
    if (window.confirm("Are u sure to want to delete")) {
      axios.delete(`http://localhost:3000/profile/${id}`);
      axios
        .get("http://localhost:3000/profile")
        .then((response) => setAlldata(response.data));
      window.location.reload(false);
    }
  };

  return (
    <div>
      Iam from All Users Component
      <p>hello india</p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Mobile</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alldata.map((data) => (
              <TableRow key={data.id}>
                <TableCell align="right">{data.id}</TableCell>
                <TableCell align="right">{data.firstname}</TableCell>
                <TableCell align="right">{data.lastname}</TableCell>
                <TableCell align="right">{data.email}</TableCell>
                <TableCell align="right">{data.mobile}</TableCell>
                <TableCell align="right">
                  <button>
                    <Link to={`/edituser/${data.id}`}>Edit</Link>
                  </button>
                </TableCell>
                <TableCell align="right">
                  <button onClick={() => delHandler(data.id)}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllUsers;
