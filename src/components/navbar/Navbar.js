import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid">
         <span style={{color:"white",fontFamily: "Besley"}}>Fashion</span>-<span style={{color:"rgb(214, 14, 114)",fontFamily: "Besley"}}> Design </span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 m-4">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/"><span style={{fontFamily: "Besley" }}>Home</span></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/education"><span style={{color:"#faf7f9",fontFamily: "Besley" }}>Education</span></Link>
              </li>
            
              <li class="nav-item">
                <Link class="nav-link" to="/addmission"><span style={{color:"#faf7f9", fontFamily: "Besley" }}>Instractor</span></Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/about"><span style={{color:"#faf7f9",fontFamily: "Besley" }}>About</span></Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;