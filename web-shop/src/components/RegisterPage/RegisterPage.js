import image from "./resources/register.svg";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";

import "./RegisterPage.css";

export default function RegisterPage() {
  const { onRegisterSubmit, errorMessage } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(
    {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onRegisterSubmit
  );

  return (
    <div className="register-container">
      <div className="register-image-container">
        <img src={image} alt="" />
      </div>
      <div className="register-form-container">
        <form onSubmit={onSubmit}>
          <h1>Register</h1>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={values.email}
              onChange={onChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword2">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={onChange}
            />
          </div>
          {errorMessage && (
            <div class="alert alert-danger alert-dismissible " role="alert">
              {errorMessage}
            </div>
          )}
          <p>
            Already have a profile? Log in <Link to={"/login"}>here</Link>
          </p>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
