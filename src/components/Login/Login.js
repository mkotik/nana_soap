import React from "react";
import "../../styles/Login.scss";

function Login(props) {
  return (
    <div className="login py-5">
      <div className="container">
        <div className="content">
          <h1>Login</h1>
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
          <h5 className="createAccText">Create Account</h5>
        </div>
      </div>
    </div>
  );
}

export default Login;
