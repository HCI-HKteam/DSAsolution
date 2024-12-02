import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import "../style.css";
import HomePage from "./HomePage/Home";

const MobileAppSimulator = () => {

//   const [footerOption, setFooterOption] = useState("");

  return (
    <div className="mobile-frame d-flex flex-column">
      {/* Header */}
      <header className="mobile-header text-white d-flex align-items-center justify-content-center">
        <h4>DSA</h4>
      </header>

      {/* Main Content */}
      <main className="mobile-content flex-grow-1 bg-light d-flex flex-column align-items-center overflow-auto">
        <HomePage></HomePage>
      </main>

      {/* Footer */}
      <footer className="mobile-footer text-white d-flex justify-content-around align-items-center">
        <FaHome className="icon" />
        <FaSearch className="icon" />
        <FaUser className="icon" />
      </footer>
    </div>
  );
};

export default MobileAppSimulator;
