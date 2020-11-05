import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">Profile Data to Add and View Information</h5>
          <p className="card-title">Home Action</p>
          <div className="btset">
            
              <Link to="/singup">
                <button className="btn btn-info btset">Singup</button>
              </Link>
              <Link to="/showdata">
                <button className="btn btn-info btset">Show Data</button>
              </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
