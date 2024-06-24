import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const NavBar: React.FC = () => {

    const userContext = useAuth();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        const result = await fetch("/api/utilizador/logout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        });

        if (result.status === 200) {
            navigate("/login", {
                state: { id: 1, message: "Sessão encerrada com sucesso" },
            });
            document.location.reload();
        } else {
            document.location.reload();
        }
    };
    
    const menuLogged = (
    <nav className="p-3 mb-3 border-bottom">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><Link to={"/"} className="nav-link px-2 link-secondary">Home</Link></li>
                <li><Link to={"/events"} className="nav-link px-2 link-dark">Events</Link></li>
                <li><Link to={"/tickets"} className="nav-link px-2 link-dark">Tickets</Link></li>
                </ul>

                <div className="dropdown text-end">
                    <div className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{cursor:"pointer"}}>
                        <img src="https://github.com/mdo.png" alt="mdo" className="rounded-circle" width="32" height="32"/>
                    </div>
                    <ul className="dropdown-menu text-small">
                        <li><Link className="dropdown-item" to={"/mytickets"}>My tickets</Link></li>
                        <li><Link className="dropdown-item" to={"/profile"}>Profile</Link></li>
                        <li><Link className="dropdown-item" to={"/settings"}>Settings</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" onClick={logoutHandler}>Logout</a></li>
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
                <li><Link to={"/"} className="nav-link px-2 link-secondary">Home</Link></li>
                <li><Link to={"/events"} className="nav-link px-2 link-dark">Events</Link></li>
                <li><Link to={"/tickets"} className="nav-link px-2 link-dark">Tickets</Link></li>
                </ul>

                <div className=" text-end">
                    <button type="button" className="btn btn-outline-primary me-2" onClick={e => { navigate("/signup")}} >Sign up</button>
                    <button type="button" className="btn btn-primary" onClick={e => { navigate("/login")}}>Login</button>
                </div>
            </div>
        </div>
  </nav>)
}

export default NavBar;