import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavBar: React.FC = () => {

    const userContext = useAuth();
    const navigate = useNavigate();
    
    const menuLogged = (
    <nav className="p-3 mb-3 border-bottom">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><Link to={"/"} className="nav-link px-2 link-secondary">Overview</Link></li>
                <li><Link to={"/events"} className="nav-link px-2 link-dark">Events</Link></li>
                <li><Link to={"/tickets"} className="nav-link px-2 link-dark">Tickets</Link></li>
                </ul>

                <div className="dropdown text-end">
                    <div className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{cursor:"pointer"}}>
                        <img src="https://github.com/mdo.png" alt="mdo" className="rounded-circle" width="32" height="32"/>
                    </div>
                    <ul className="dropdown-menu text-small">
                        <li><Link className="dropdown-item" to={""}>My tickets</Link></li>
                        <li><Link className="dropdown-item" to={""}>Profile</Link></li>
                        <li><Link className="dropdown-item" to={""}>Settings</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to={""}>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>);

    if (userContext.user){
        return menuLogged;
    }

    return(
    <nav className="p-3 mb-3 border-bottom">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><Link to={"/"} className="nav-link px-2 link-secondary">Overview</Link></li>
                <li><Link to={"/events"} className="nav-link px-2 link-dark">Events</Link></li>
                <li><Link to={"/tickets"} className="nav-link px-2 link-dark">Tickets</Link></li>
                </ul>

                <div className=" text-end">
                    <button type="button" className="btn btn-outline-primary me-2" onClick={e => { navigate("/register")}} >Register</button>
                    <button type="button" className="btn btn-primary" onClick={e => { navigate("/login")}}>Login</button>
                </div>
            </div>
        </div>
  </nav>)
}

export default NavBar;