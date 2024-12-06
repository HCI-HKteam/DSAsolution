// GroupPage.jsx
import React from "react";
import { useParams, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./group.css";
import { FaComments, FaTrophy, FaBook } from "react-icons/fa"; // Icons for Chat, Challenges, and Materials

const GroupPage = ({ setFooterOption }) => {
  const location = useLocation();
  const group = location.state; 

  const sections = [
    { name: "Chat", icon: <FaComments />, onClick: () => setFooterOption("Chat") },
    { name: "Challenges", icon: <FaTrophy />, onClick: () => setFooterOption("Challenges") },
    { name: "Materials", icon: <FaBook />, onClick: () => setFooterOption("Materials") },
  ];

  return (
    <div className="p-3">
      {/* Header Row */}
      <div className="row mb-4">
        <h5 className="text-center text-uppercase">{group}</h5>
        <hr />
      </div>

      {/* Sections for Chat, Challenges, and Materials */}
      <div className="row justify-content-center">
        {sections.map((section, index) => (
          <div
            key={index}
            className="col-12 text-center mb-3"
            style={{ cursor: "pointer" }}
            onClick={section.onClick}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "#3cacae",
                color: "#fff",
                margin: "0 auto",
                marginBottom: "8px",
                fontSize: "1.5rem",
              }}
            >
              {section.icon}
            </div>
            <span style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
              {section.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupPage;