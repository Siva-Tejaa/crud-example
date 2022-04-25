import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navibar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <img
            src="https://picsum.photos/200/300"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          &nbsp;
          <h2>
            <Navbar.Brand href="">CRUD</Navbar.Brand>
          </h2>
          <Nav className="me-auto">
            <Link to="/adduser">Add User </Link>&nbsp;
            <Link to="/edituser">Edit User </Link>&nbsp;
            <Link to="/allusers">Show All Users </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default Navibar;
