import React, { useState } from "react";
import "../SignUP/style.css";
import { Navigate } from "react-router";
import axios from "axios";

const SignUp = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, SetEmail] = useState("");
  const [name, setName] = useState("");

  const SignUPUrl = "http://localhost:8080/idp/create-user";

  const Emailpattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  async function OnSubmit(async) {
    const params = JSON.stringify({
      username: email,
      name: name,
      phNo: mobileNumber,
    });

    if (!mobileNumber.length === 10) {
      alert("Phone Number Validation failed");
    } else if (!Emailpattern.test(email)) {
      alert("Email validation failed");
    } else {
      axios
        .post(SignUPUrl, params, {
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          alert("Username Already Taken");
        });
      return <Navigate to="/" replace={true} />;
    }
  }

  return (
    <div>
      <section class="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">
                      <div class="text-center">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/7/7b/IDFC_First_Bank_logo.jpg"
                          style={{ width: 185 }}
                          alt="logo"
                        />
                        <h4 class="mt-1 mb-5 pb-1">
                          We are The Invincible Team
                        </h4>
                      </div>

                      <form>
                        <p>Please login to your account</p>

                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                          <label class="form-label" for="form2Example11">
                            Username
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            class="form-control"
                          />
                          <label class="form-label" for="form2Example22">
                            Password
                          </label>
                        </div>

                        <div class="text-center pt-1 mb-5 pb-1">
                          <button
                            class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="submit"
                          >
                            Log in
                          </button>
                          {/* <a class="text-muted" href="#!">
                            Forgot password?
                          </a> */}
                        </div>

                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Don't have an account?</p>
                          <button type="button" class="btn btn-outline-danger">
                            Create new
                          </button>
                        </div>
                      </form>
                    </div>

                    <form id="registrationForm">
                      <div class="mb-3">
                        <label for="name" class="form-label">
                          Name:
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          name="name"
                          required
                          onChange={(event) => {
                            setName(event.target.value);
                          }}
                        />
                      </div>
                      <div class="mb-3">
                        <label for="mobile" class="form-label">
                          Mobile Number:
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="mobile"
                          name="mobile"
                          pattern="[0-9]{10}"
                          required
                          onChange={(event) => {
                            setMobileNumber(event.target.value);
                          }}
                        />
                      </div>

                      <div class="mb-3">
                        <label for="email" class="form-label">
                          Email/Username
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          name="email"
                          required
                          onChange={(event) => {
                            SetEmail(event.target.value);
                          }}
                        />
                      </div>

                      {/* <div class="mb-3">
                        <label for="password" class="form-label">
                          Password:
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          name="password"
                          required
                          onChange={(event) => {
                            setpassword(event.target.value);
                          }}
                        />
                      </div>

                      <div class="mb-3">
                        <label for="confirmPassword" class="form-label">
                          Confirm Password:
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="confirmPassword"
                          name="confirmPassword"
                          required
                          onChange={(event) => {
                            setConfirmPassword(event.target.value);
                          }}
                        />
                      </div> */}
                      <button
                        type="button"
                        class="btn btn-success"
                        onClick={OnSubmit}
                      >
                        Register
                      </button>
                    </form>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 class="mb-4">We are more than just a company</h4>
                      <p class="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
