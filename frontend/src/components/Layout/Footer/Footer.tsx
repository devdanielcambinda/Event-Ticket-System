import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
    <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><Link to={"/"} className="nav-link px-2 text-muted">Home</Link></li>
            <li className="nav-item"><Link to={"/events"} className="nav-link px-2 text-muted">Events</Link></li>
            <li className="nav-item"><Link to={"/tickets"} className="nav-link px-2 text-muted">Tickets</Link></li>
            <li className="nav-item"><Link to={"faq"} className="nav-link px-2 text-muted">FAQs</Link></li>
            <li className="nav-item"><Link to={"/about"} className="nav-link px-2 text-muted">About</Link></li>
        </ul>
        <p className="text-center text-muted">© 2023 Daniel Cambinda</p>
  </footer>)
}

export default Footer;