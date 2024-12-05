// GroupPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./group.css";

const GroupPage = () => {
  const { groupName } = useParams(); // Get the group name from the URL

  return (
    <div className="p-3">
      {/* Header Row */}
      <div className="row mb-4">
        <h5 className="text-right">{groupName}</h5> {/* Dynamically display the group name */}
        <hr />
      </div>

      {/* Group Content (could be dynamic depending on the group) */}
      <div className="card mb-4">
        <div className="card-header text-white">{groupName} Content</div>
        <div className="card-body">
          <p>Welcome to the {groupName} group!</p>
          {/* Add more content related to the group */}
        </div>
      </div>
    </div>
  );
};

export default GroupPage;
