import React, { useState } from "react";
import "../Home/Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
// import Image from '../images/Group 5.png's

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [validationError, setValidationError] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      formValues.name === "" ||
      formValues.lastName === "" ||
      formValues.email === "" ||
      formValues.password === ""
    ) {
      setValidationError(true);
    } else {
      // Handle form submission or further processing
      setValidationError(false);
      // Reset form values if needed
      setFormValues({
        name: "",
        lastName: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div>
      <section className="home-section">
        <div className="items-wrapper">
          <div className="info">
            <h1>Learn to code by watching others</h1>
            <p>
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.{" "}
            </p>
          </div>
          <div className="form-wrapepr">
            <div className="plan">
              <p>
                <span>Try it free 7 days</span> then $20/mo. thereafter
              </p>
            </div>
            <div className="form">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  className={
                    validationError && formValues.name === "" ? "error" : ""
                  }
                />
                {validationError && formValues.name === "" && (
                  <div className="error-wrapper">
                    <p className="error-message">First Name cannot be empty</p>
                    <FontAwesomeIcon
                      className="err-icon"
                      icon={faCircleExclamation}
                    />
                  </div>
                )}
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  className={
                    validationError && formValues.lastName === "" ? "error" : ""
                  }
                />
                {validationError && formValues.lastName === "" && (
                  <div className="error-wrapper">
                    <p className="error-message">First Name cannot be empty</p>
                    <FontAwesomeIcon
                      className="err-icon"
                      icon={faCircleExclamation}
                    />
                  </div>
                )}
              </div>
              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className={
                    validationError && formValues.email === "" ? "error" : ""
                  }
                />
                {validationError && formValues.email === "" && (
                  <div className="error-wrapper">
                    <p className="error-message">First Name cannot be empty</p>
                    <FontAwesomeIcon
                      className="err-icon"
                      icon={faCircleExclamation}
                    />
                  </div>
                )}
              </div>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleInputChange}
                  className={
                    validationError && formValues.password === "" ? "error" : ""
                  }
                />
                {validationError && formValues.password === "" && (
                  <div className="error-wrapper">
                    <p className="error-message">First Name cannot be empty</p>
                    <FontAwesomeIcon
                      className="err-icon"
                      icon={faCircleExclamation}
                    />
                  </div>
                )}
                <div className="eye" onClick={toggleShowPassword}>
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </div>
              </div>

              <button onClick={handleSubmit}>CLAIM YOUR FREE TRIAL</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
