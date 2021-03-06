import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Login.scss";

function Login(props) {
  return (
    <div className="login py-5">
      <div className="container">
        <div className="content">
          <h1>Sign In</h1>
          <form>
            <label>
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
              Sign In
            </button>
          </form>
          <Link
            to="/signup"
            className="text-decoration-none text-start createAccLink"
          >
            <h5 className="createAccText">Create Account</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
