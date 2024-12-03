import React from "react";
import { FaPlus } from "react-icons/fa";
import "./search.css";
import "bootstrap/dist/css/bootstrap.min.css";

const GroupCard = ({ name, level, image }) => (
  <div
    className="d-flex flex-column align-items-center"
    style={{
      width: "120px",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    }}
  >
    <div
      style={{
        position: "relative",
        width: "55px",
        height: "55px",
        marginBottom: "10px",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%", // Change to "0" for square shape
          objectFit: "cover",
          border: "2px solid #3cacae",
        }}
      />
      <button
        className="floating-icon"
        style={{
          position: "absolute",
          width: "30px",
          height: "30px",
          top: "-5px",
          right: "-5px",
          padding: "3px 5px",
          fontSize: "12px",
          borderRadius: "50%",
        }}
      >
        <FaPlus />
      </button>
    </div>
    <div
      style={{
        width: "100%",
        height: "100%",
        fontSize: "12px",
        marginBottom: "4px",
        lineHeight: "1",
        textAlign: "center", // Ensures text is centered
        overflow: "hidden", // Prevents text from overflowing
        whiteSpace: "nowrap", // Prevents wrapping
        textOverflow: "ellipsis", // Adds "..." if the text is too long
      }}
    >
      {name}
      <p
        style={{
          fontSize: "10px",
          color: "#666",
          margin: "0",
          lineHeight: "1.2",
        }}
      >
        {level}
      </p>
    </div>
  </div>
);

const SuggestedGroups = ({ groups }) => (
  <div className="scrollable-cards">
    {groups.map((group, index) => (
      <GroupCard
        key={index}
        name={group.name}
        level={group.level}
        image={group.image}
      />
    ))}
  </div>
);

const OtherGroups = ({ groups }) => (
  <div className="mb-2 vertical-scrollable" style={{ maxHeight: "200px", overflowY: "auto" }}>
    <div className="card-body">
      {groups.map((group, index) => (
        <div className="group-row" key={index}>
          <img src={group.image} alt={group.name} className="group-profile" />
          <div className="group-content">
            <h6>{group.name}</h6>
          </div>
          <button
            className="floating-icon-row"
            style={{
              width: "30px",
              height: "30px",
            }}
          >
            <FaPlus />
          </button>
        </div>
      ))}
    </div>
  </div>
);

const SearchPage = () => {
  const suggestedGroups = [
    {
      name: "Machine Learning",
      level: "Beginners",
      image: "../../../public/profile5.jpg",
    },
    {
      name: "Machine Learning",
      level: "Advanced",
      image: "../../../public/profile8.jpg",
    },
    {
      name: "Data Structure",
      level: "Advanced",
      image: "../../../public/profile9.jpg",
    },
    {
      name: "Design Principles",
      level: "Intermediate",
      image: "../../../public/profile11.jpg",
    },
  ];

  const otherGroups = [
    {
      name: "Software Engineering",
      image: "../../../public/profile7.jpg",
    },
    {
      name: "Human-Computer Interaction",
      image: "../../../public/profile10.jpg",
    },
    {
      name: "Study Room 2",
      image: "../../../public/profile6.jpg",
    },
  ];

  return (
    <div className="p-2" style={{ maxWidth: "300px" }}>
      {/* Search Bar */}

      <div className="row mb-3">
        <input
          type="text"
          className="row form-control"
          placeholder="Search for groups..."
        />
      </div>

      {/* Suggested Groups */}
      <h6 className="row mb-2">Suggested for You</h6>
      <SuggestedGroups groups={suggestedGroups} />

      {/* Other Groups */}
      <h6 className="row mt-4">Other Groups</h6>
      <hr />
      <OtherGroups groups={otherGroups} />
    </div>
  );
};

export default SearchPage;
