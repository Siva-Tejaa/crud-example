import React, { useState } from "react";
import "../App.css";
import { Form, Row, Col, Button } from "react-bootstrap";

const AddUser = () => {
  const initialvalues = {
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
    address: "",

    pincode: "",
  };

  const [userdata, setUserdata] = useState(initialvalues);

  const {
    firstname,
    lastname,
    email,
    mobile,
    password,
    confirmpassword,
    address,

    pincode,
  } = initialvalues;

  const changeHandler = (e) => {
    setUserdata({ ...initialvalues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userdata);
    alert("Your Form has been Submitted Successfully");
  };

  return (
    <>
      <div className="big-card">
        <h2>Application Form</h2>
        <h5>
          <u>Add Users</u>
        </h5>

        <Form className="form-tab" onSubmit={submitHandler}>
          <Row className="mb-3">
            <Col>
              <Form.Control
                placeholder="First Name"
                type="text"
                name="firstname"
                value={firstname}
                onChange={changeHandler}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Last Name"
                type="text"
                name="lastname"
                value={lastname}
                onChange={changeHandler}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGroupEmail">
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNumber">
              <Form.Control
                type="number"
                placeholder="Mobile Number"
                name="mobile"
                value={mobile}
                onChange={changeHandler}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridconfirmPassword">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmpassword"
                value={confirmpassword}
                onChange={changeHandler}
              />
            </Form.Group>
          </Row>
          {/* <Row className="mb-3">
            <div class="GenderOptions">
              <div class="floatBlock" >
                <label htmlFor="Male">
                  {" "}
                  <input
                    name="gender"
                    type="radio"
                    value=Male
                  />{" "}
                  Male{" "}
                </label>
              </div>
              <div className="floatBlock">
                <label htmlFor="Female">
                  {" "}
                  <input
                    name="gender"
                    type="radio"
                    value=Female
                    
                  />{" "}
                  Female{" "}
                </label>
              </div>
              <div className="floatBlock">
                <label htmlFor="Others">
                  {" "}
                  <input
                    name="gender"
                    type="radio"
                    value=Others
                  />{" "}
                  Others{" "}
                </label>
              </div>
            </div>
          </Row> */}
          <Row className="mb-3">
            <textarea
              id="address"
              name="address"
              rows="3"
              cols="50"
              placeholder="Your Address"
              value={address}
              onChange={changeHandler}
            />
          </Row>
          <Row className="mb-3">
            {/* <Col>
              <Form.Select
                id="country-select"
                name="state"
                value={state}
                onChange={changeHandler}
              >
                <option value="" disabled defaultValue>
                  Choose State
                </option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">
                  Dadar and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </Form.Select>
            </Col> */}

            <Col>
              <Form.Control
                type="number"
                placeholder="PinCode"
                name="pincode"
                value={pincode}
                onChange={changeHandler}
              />
            </Col>
          </Row>
          <Row>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" type="submit">
                Submit
              </Button>
            </div>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default AddUser;
