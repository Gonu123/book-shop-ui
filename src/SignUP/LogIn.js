import React, { useState } from "react";
import "../SignUP/style.css";
import { Link } from "react-router-dom";
const LogIn = () => {
  const passwordRegex =
    /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-])(?=.*\d)(?=.*[A-Z]).{8,16}$/;
  const Emailpattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  

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
                            id="exampleInput"
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
                            onChange={(event) => {
                              setPassword(event.target.value);
                            }}
                          />
                          <span
                            class="input-group-addon"
                            role="button"
                            title="veiw password"
                            id="passBtn"
                          >
                            {/* <i className="bi bi-eye-slash"></i> : */}
                            <i className="bi bi-eye"></i>
                          </span>
                          <label class="form-label" for="form2Example22">
                            Password
                          </label>
                        </div>
                        <div class="text-center pt-1 mb-5 pb-1">
                          <button
                            class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="submit"
                            onClick={() => {
                              if (!passwordRegex.test(password)) {
                                alert("Password or Email Incorrect");
                              } else if (!Emailpattern.test(email)) {
                                alert("Email Incorrect");
                              } 
                            }}
                          >
                            Log in
                          </button>
                        </div>
                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Don't have an account?</p>
                          <button type="button" class="btn btn-outline-danger">
                            <Link to="SignUp" style={{ color: "black" }}>
                              Create new
                            </Link>
                          </button>
                        </div>
                      </form>
                    </div>
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

export default LogIn;
