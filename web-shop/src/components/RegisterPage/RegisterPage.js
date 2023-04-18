import image from "./resources/register.svg";

import "./RegisterPage.css";

export default function RegisterPage() {
  return (
    <div className="register-container">
      <div className="register-image-container">
        <img src={image} alt="" />
      </div>
      <div className="register-form-container">
        <form>
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
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword2">Confirm Passowrd</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Password"
              name="confirmPassword"
            />
          </div>
          <button type="submit" className="btn btn-primary register-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
