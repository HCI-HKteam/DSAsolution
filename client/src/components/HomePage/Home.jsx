import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";


const HomePage = () => {
  const navigate = useNavigate();

  const handleGroupClick = (groupName) => {
    navigate(`/software-engineering`);
  }
  return (
    <div className="p-3">
      {/* Header Row */}
      <div className="row mb-4">
        <h5 className="text-right">Home</h5>

        <hr />
      </div>

      {/* Recent Notifications Frame */}
      <div className="card mb-4">
        <div className="card-header text-white">Recent Notifications</div>
        <div className="card-body">
          <div className="notification d-flex justify-content-between align-items-center mb-2">
            <span>New Challenge Available</span>
            <span className="group-labels badge text-dark">Bioinformatics</span>
          </div>
          <div className="notification d-flex justify-content-between align-items-center mb-2">
            <span>New Challenge Available</span>
            <span className="group-labels badge text-dark">Advanced AI</span>
          </div>
          {/* Add more notifications as needed */}
        </div>
      </div>

      {/* User Groups Section */}
      <div
        className="vertical-scrollable mb-4"
        style={{ maxHeight: "200px", overflowY: "auto" }}
      >
        <div className="card-body">
        <h5 className="text-right">Your Groups: </h5>
          <hr />
          <ul className="list-unstyled">
            <li className="d-flex align-items-start mb-3"
             onClick={() => handleGroupClick("software-engineering")}
             style={{ cursor: "pointer" }}
             >
              <img
                src="../../../public/profile1.jpg"
                alt="Group Icon"
                className="rounded-circle me-2"
                width="50"
                height="50"
              />
              <div>
              <div className="group-name">Software Engineering</div>
                <div className="group-level">Beginners</div>
                </div>
            </li>
            <li className="d-flex align-items-center mb-2">
              <img
                src="../../../public/profile2.jpg"
                alt="Group Icon"
                className="rounded-circle me-2"
                width="50"
                height="50"
              />
              <div>
                <div className="group-name">Human Computer Interaction</div>
                <div className="group-level">Advanced</div>
              </div>
            </li>
            <li className="d-flex align-items-center">
              <img
                src="../../../public/profile5.jpg"
                alt="Group Icon"
                className="rounded-circle me-2"
                width="50"
                height="50"
              />
              <div>
                <div className="group-name">Study Room 2</div>
                <div className="group-level">Group</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Floating + Icon */}
      <div className="floating-icon">
        <FaPlus />
      </div>
    </div>
  );
};

export default HomePage;
