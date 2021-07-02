import React, { useState } from "react";
import axios from "axios";
import { useUserSession } from "../context/AuthContext";

const SignUp = (props) => {
  const { logIn } = useUserSession();
  const [inputField, setInputField] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
    password_confirmation: "",
  });
  const [token, setToken] = useState("");

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const submitButton = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/auth/registerPublic", inputField)
      .then((data) => {
        console.log(data.data.token);
        setToken(data.data.token);
        logIn(data.data.user, data.data.token);
        props.history.push("/");
      })
      .catch((error) => {
        console.log("login error", error);
      });
  };

  return (
    <div>
      <form
        className="my-4"
        style={{ color: "#757575" }}
        onSubmit={submitButton}
      >
        {/* Name */}
        <div className="md-form">
          <input
            type="text"
            className="col-10 form-input-new"
            name="name"
            placeholder="Enter your Name"
            value={inputField.name}
            onChange={inputsHandler}
          />
        </div>
        <br />
        {/* Email */}
        <div className="md-form">
          <input
            type="email"
            className="col-10 form-input-new"
            name="email"
            placeholder="Enter your Email"
            value={inputField.email}
            onChange={inputsHandler}
          />
        </div>
        <br />
        {/* Phone Number */}
        <div className="md-form">
          <input
            type="text"
            className="col-10 form-input-new"
            name="phone_number"
            placeholder="Enter your Phone Number"
            value={inputField.phone_number}
            onChange={inputsHandler}
          />
        </div>
        <br />
        {/* Password */}
        <div className="md-form">
          <input
            type="password"
            className="col-10 form-input-new"
            name="password"
            placeholder="Enter your Password"
            value={inputField.password}
            onChange={inputsHandler}
          />
        </div>
        <br />
        {/* Password Confirmation */}
        <div className="md-form">
          <input
            type="password"
            className="col-10 form-input-new"
            name="password_confirmation"
            placeholder="Enter your Password Confirmation"
            value={inputField.password_confirmation}
            onChange={inputsHandler}
          />
        </div>
        <div className="accept-terms">
          <input type="checkbox" className="me-2" name="" id="" />
          I have read and accept the terms and conditions
        </div>
        {/* Sign in button */}
        <button
          className="col-10 btn-signin my-4"
          type="submit"
          onSubmit={submitButton}
        >
          Sign Up
          <i className="fas fa-arrow-right icon-arrow-right"></i>
        </button>
      </form>
      {/* Form */}
    </div>
  );
};

export default SignUp;
