import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <header className="p-3">
      <div className="">
        <div className="flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="bg-slate-500 d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <h4>Routing Example v6</h4>
          </div>
          <ul className="bg-gray-600 nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/meals" className="nav-link px-2 text-white">
                Meals
              </Link>
            </li>
          </ul>
          <div className="text-end">
            <Link
              to="/Scheduling"
              type="button"
              className="btn btn-outline-light me-2"
            >
              Scheduling
            </Link>
            <Link to="/signIn" type="button" className="btn btn-warning">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;