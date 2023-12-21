import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { motion } from "framer-motion"

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <motion.div className="links" 
        initial={{ opacity: 0, y: -50}}
        animate={{ opacity: 1, y: 0}}  
        transition={{ yoyo: Infinity, duration: 1, ease: "easeInOut", }}>
        <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}> Home </Link>
        <Link to="/projects" className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}> Projects </Link>
        <Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}> Contact </Link>
        <Link to="/experience" className={`nav-link ${location.pathname === "/experience" ? "active" : ""}`}> Experience </Link>
      </motion.div>
    </div>
  );
}

export default Navbar;
