import React from "react";
import Navibar from "./Navibar";
import { Routes, Route } from "react-router-dom";

import AddUser from "./AddUser";
import EditUser from "./EditUser";
import AllUsers from "./AllUsers";

const Home = () => {
  return (
    <div>
      <Navibar />
      <Routes>
        <Route path="/adduser" exact element={<AddUser />} />
        <Route path="/edituser" exact element={<EditUser />} />
        <Route path="/edituser/:id" exact element={<EditUser />} />
        <Route path="/allusers" exact element={<AllUsers />} />
      </Routes>
    </div>
  );
};

export default Home;
