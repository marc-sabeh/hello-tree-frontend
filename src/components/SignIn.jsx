import React, { useState } from "react";
import axios from "axios";
import { useUserSession } from "../context/AuthContext";
import { Link } from "react-router-dom";

const SignIn = (props) => {
  const { logIn } = useUserSession();
  const [inputField, setInputField] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState("");

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const submitButton = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/auth/login", inputField)
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
      <div className="row  d-flex justify-content-center align-items-center">
        <div className="form d-flex justify-content-between">
          <div className="image col-8">
            <img className="image-background" src="/Left.png" />
          </div>

          <div className="card col-4">
            {/*Card content*/}
            <div className="card-body px-lg-5">
              <div className="btn-group m-5">
                <button className="btn-signin_top">Sign In</button>
                <Link to="/SignUp">
                  <button className="btn-signup_top">Sign Up</button>
                </Link>
              </div>
              {/* Form */}
              <form
                className="text-center"
                style={{ color: "#757575" }}
                onSubmit={submitButton}
              >
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
                <a className="forgot-pass" href="">I forgot my password</a>
                {/* Sign in button */}
                <button
                  className="col-10 btn-signin my-4"
                  type="submit"
                  onSubmit={submitButton}
                >
                  Sign in
                  <i className="fas fa-arrow-right icon-arrow-right"></i>
                </button>

                <div className="or-text">Or Sign In using</div>
                <button
                  className="col-10 btn-facebook my-4"
                >
                  <i className="fab fa-facebook-f me-3"></i>  
                   Facebook
                </button>

                <button
                  className="col-10 btn-google "
                >
                  <i className="fab fa-google me-3"></i>  
                   Google
                </button>
              </form>
              {/* Form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
