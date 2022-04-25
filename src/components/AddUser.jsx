import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const AddUser = () => {
  const initialvalues = {
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
  };

  const redirect = useNavigate();

  const [userdata, setUserdata] = useState(initialvalues);

  const { firstname, lastname, email, mobile } = userdata;

  const changeHandler = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/profile", userdata);
    alert("Your Form has been Submitted Successfully");
    setUserdata(initialvalues);
    redirect("/allusers");
  };

  return (
    <>
      <div className="big-card">
        <h2>Application Form</h2>
        <h5>
          <u>Add Users</u>
        </h5>

        <form onSubmit={submitHandler}>
          <input
            placeholder="First Name"
            type="text"
            name="firstname"
            value={firstname}
            onChange={changeHandler}
          />

          <input
            placeholder="Last Name"
            type="text"
            name="lastname"
            value={lastname}
            onChange={changeHandler}
          />

          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={changeHandler}
          />

          <input
            type="number"
            placeholder="Mobile Number"
            name="mobile"
            value={mobile}
            onChange={changeHandler}
          />
          <input type="submit" value="add user" />
        </form>
      </div>
    </>
  );
};

export default AddUser;
