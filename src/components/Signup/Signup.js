import React from "react";
import { Link } from "react-router-dom";

function Signup(props) {
  return (
    <div className="login py-5">
      <div className="container">
        <div className="content">
          <h1>Sign Up</h1>
          <form>
            <label>
              {" "}
              First Name
              <input />
            </label>
            <label className="mt-5">
              {" "}
              Last Name
              <input />
            </label>
            <label className="mt-5">
              {" "}
              Email
              <input />
            </label>
            <label className="mt-5">
              {" "}
              Password
              <input type="password" />
            </label>
            <button type="submit" className="btn mt-5">
              Sign Up
            </button>
          </form>
          <Link
            to="/login"
            className="text-decoration-none text-start createAccLink"
          >
            <h5 className="createAccText">Already Registered? Login</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
