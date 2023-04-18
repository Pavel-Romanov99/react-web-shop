import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Navigation() {
  const { user, onLogout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {user && (
          <Link className="button-link" to={"/"} style={{ color: "black" }}>
            Welcome back to Genius-clothing, {user.email}
          </Link>
        )}
        {!user && (
          <Link className="button-link" to={"/"} style={{ color: "black" }}>
            Nutritional Labs
          </Link>
        )}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!user && (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"./login"}
                >
                  Login
                </Link>
              </li>
            )}

            {!user && (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"./register"}
                >
                  Register
                </Link>
              </li>
            )}

            {user && (
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={onLogout}
                >
                  Logout
                </a>
              </li>
            )}

            {user && (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/cart"}
                >
                  Cart
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"./clothing"}
              >
                Clothing
              </Link>
            </li>
            {user && user.email === "admin@abv.bg" && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admin
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/create/clothing"}>
                      Create Clothing
                    </Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
