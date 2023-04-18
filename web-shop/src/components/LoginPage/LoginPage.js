import { useContext } from "react";

import image from "./resources/login.svg";
import "./LoginPage.css";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";

export default function LoginPage() {
  const { errorMessage, onLoginSubmit } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    onLoginSubmit
  );

  return (
    <div className="login-container">
      <div className="login-form-container">
        <form onSubmit={onSubmit}>
          <h1>Login</h1>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
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
            <label htmlFor="exampleInputPassword1">Password</label>
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
          {errorMessage && (
            <div class="alert alert-danger alert-dismissible " role="alert">
              {errorMessage}
            </div>
          )}
          <button type="submit" className="btn btn-primary login-button">
            Submit
          </button>
        </form>
      </div>
      <div className="login-image-container">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
