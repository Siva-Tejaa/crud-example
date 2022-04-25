import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

const EditUser = () => {
  const { id } = useParams();

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
    axios.put(`http://localhost:3000/profile/${id}`, userdata);
    alert("Your Form has been Updated Successfully");
    redirect("/allusers");
  };

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    const result = await axios.get(`http://localhost:3000/profile/${id}`);
    setUserdata(result.data);
    // console.log(result.data);
  };

  return (
    <>
      <div className="big-card">
        <h2>Application Form</h2>
        <h5>
          <u>Edit User</u>
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
          <input type="submit" value="Update User" />
        </form>
      </div>
    </>
  );
};

export default EditUser;
