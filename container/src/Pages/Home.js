import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link active">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Contact us</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <h5 class="card-title">Profile Data to Add and View Information</h5>
          <p class="card-title">Home Action</p>
          <div className="btset">
            
              <Link to="/singup">
                <button class="btn btn-info btset">Singup</button>
              </Link>
              <Link to="/showdata">
                <button class="btn btn-info btset">Show Data</button>
              </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
