import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import NotificationsCard from "../Notification";

const HomePage = ({ setFooterOption }) => {
  const [isNotificationsCollapsed, setIsNotificationsCollapsed] =
    useState(false);

  const handleCollapseChange = (collapsed) => {
    setIsNotificationsCollapsed(collapsed);
  };

  return (
    <div className="p-3">
      {/* Recent Notifications Frame */}
      <NotificationsCard onCollapseChange={handleCollapseChange} />

      {/* User Groups Section */}
      <h5 className="text-center mb-4">Your Groups</h5>
      <div
        className="vertical-scrollable mb-4"
        style={{
          maxHeight: isNotificationsCollapsed ? "300px" : "200px",
          overflowY: "auto",
        }}
      >
        <div className={`card-body mb-4 `}>
          <ul className="list-unstyled">
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
            <li className="d-flex align-items-center mb-2">
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
        <FaPlus
          onClick={() => setFooterOption("CreateGroup")}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default HomePage;
