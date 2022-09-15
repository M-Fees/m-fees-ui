import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./menu.css";
import logo from "./image/logo.png";
import "../../Style/bootstrap/bootstrap.css"


export function Menu({item}) {

  const navigate = useNavigate()
    return(
        <>
  <header className="navbar-container sticky-top bg-dark">
    <div className="px-3 navbar" >
      <div className="container d-flex justify-content-between">
        <div>
          <a href="#top">
          <img src={logo} alt="" className="avatar my-2"  />
          </a>
        </div>
        <div className="justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <Link style={{textDecoration: "none"}} to="/home"><a className="nav-link text-white" >{item}</a></Link>
            </li>
          </ul>
        </div>
        <div class="text-end">
          <button type="button" className="btn btn-danger" onClick={()=> navigate('/')}>logout</button>
        </div>
      </div>
    </div>
  </header>
        </>
    )
}