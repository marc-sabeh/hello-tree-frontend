import { useState, useEffect } from "react";
import SignUpPublic from "./SignUpPublic";
import SignUpServiceProvider from "./SignUpServiceProvider";
import SignUpFunder from "./SignUpFunder";
import { Link } from "react-router-dom";

const SignUp = props => {
  const [radioPublic, setRadioPublic] = useState(false);
  const [radioServiceProvider, setRadioServiceProvider] = useState(false);
  const [radioFunder, setRadioFunder] = useState(false);

  const publicFunc = () => {
    setRadioPublic(true);
    setRadioServiceProvider(false);
    setRadioFunder(false);
  };

  const Service = () => {
    setRadioPublic(false);
    setRadioServiceProvider(true);
    setRadioFunder(false);
  };

  const funder = () => {
    setRadioPublic(false);
    setRadioServiceProvider(false);
    setRadioFunder(true);
  };

  useEffect(() => {
    publicFunc();
  }, []);

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
                <Link to="/SignIn">
                  <button className="btn-signin_topup">Sign In</button>
                </Link>
                <button className="btn-signup_topup">Sign Up</button>
              </div>

              <div>
                What type of user are you?
                <br />
                <div>
                  <input
                    type="radio"
                    defaultChecked
                    value="public"
                    name="register"
                    id=""
                    onChange={publicFunc}
                  />{" "}
                  Public
                  <input
                    type="radio"
                    value="serviceprovider"
                    className="ms-5"
                    name="register"
                    onChange={Service}
                  />{" "}
                  Service Provider
                  <input
                    type="radio"
                    value="funder"
                    className="ms-5"
                    name="register"
                    id=""
                    onChange={funder}
                  />{" "}
                  Funder
                </div>
              </div>
              <div className={radioPublic ? "" : "d-none"}>
                <SignUpPublic history={props.history}></SignUpPublic>
              </div>
              <div className={radioServiceProvider ? "" : "d-none"}>
                <SignUpServiceProvider history={props.history}></SignUpServiceProvider>
              </div>
              <div className={radioFunder ? "" : "d-none"}>
                <SignUpFunder history={props.history}></SignUpFunder>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
