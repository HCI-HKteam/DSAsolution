import React from "react";
import { FaQuestionCircle, FaArrowLeft } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateGroup = ({ setFooterOption }) => {
  return (
    <div className="p-3">
      {/* Header */}
      <div className="d-flex align-items-center mb-3">
        <FaArrowLeft
          className="me-2"
          style={{ cursor: "pointer" }}
          onClick={() => setFooterOption("Home")}
        />
        <h5 className="text-center flex-grow-1 m-0">Create a Group</h5>
      </div>
      <hr />

      {/* Form */}
      <form>
        {/* Row: Picture Upload + Group Name and University */}
        <div className="row mb-3">
          <div className="col-md-4 text-center">
            <div
              className="border border-2 rounded d-flex align-items-center justify-content-center"
              style={{
                width: "80px",
                height: "100px",
                backgroundColor: "#f8f9fa",
                margin: "0 auto",
              }}
            >
              <span>+ Add</span>
            </div>
            <input
              type="file"
              id="group-pic"
              className="form-control mt-2"
              style={{
                marginLeft: "3px",
                width: "80px",
                height: "30px",
                fontSize: "10px",
              }}
            />
          </div>

          <div className="col-md-8">
            <div className="mb-2">
              <label htmlFor="group-name" className="form-items form-label">
                Group Name*
              </label>
              <input
                type="text"
                id="group-name"
                className="form-items form-control"
                placeholder="Enter group name"
                required
              />
            </div>
            <div>
              <label htmlFor="university" className="form-items form-label">
                University*
              </label>
              <input
                type="text"
                id="university"
                className="form-items form-control"
                placeholder="Enter university name"
                required
              />
            </div>
          </div>
        </div>

        {/* Row: Level Dropdown */}
        <div className="row mb-3">
          <div className="form-items">
            <label
              htmlFor="level"
              className="form-items form-label d-flex align-items-center"
            >
              Level* <FaQuestionCircle className="ms-2 text-muted" />
            </label>
            <select id="level" className="form-items form-select" required>
              <option value="">Select level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="None">None</option>
            </select>
          </div>
        </div>

        {/* Row: Special Needs Dropdown */}
        <div className="row mb-3">
          <div className="form-items">
            <label
              htmlFor="special-needs"
              className="form-items  form-label d-flex align-items-center"
            >
              Special Needs* <FaQuestionCircle className="ms-2 text-muted" />
            </label>
            <select
              id="special-needs"
              className="form-items form-select"
              required
            >
              <option value="">Select special need</option>
              <option value="Dyslexia">Dyslexia</option>
              <option value="Dysgraphia">Dysgraphia</option>
              <option value="Dyscalculia">Dyscalculia</option>
              <option value="Dysorthography">Dysorthography</option>
            </select>
          </div>
        </div>

        {/* Row: Max Participants */}
        <div className="form-items mb-3 d-flex flex-column">
          <div
            className="d-flex "
            style={{ gap: "10px", marginBottom: "-15px" }}
          >
            <label
              htmlFor="max-participants"
              className="form-items form-label mb-0"
              style={{ whiteSpace: "nowrap", marginBottom: "5px" }}
            >
              Max Number of Participants
            </label>
            <select
              id="max-participants"
              className="form-items form-select"
              style={{ width: "120px" }}
            >
              <option value="">No Limit</option>
              {[...Array(50)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <small
            className="form-items text-muted mt-0"
            style={{ marginTop: "-5px", fontSize: "10px" }}
          >
            Set a limit up to 50.
          </small>
        </div>

        {/* Row: Description */}
        <div className="row mb-3">
          <div className="form-items col-md-12">
            <label htmlFor="description" className="form-items form-label">
              Description
            </label>
            <textarea
              id="description"
              className="form-items form-control"
              rows="3"
              placeholder="Enter group description"
            ></textarea>
          </div>
        </div>

        {/* Mandatory Fields Note */}
        <p className="form-items text-muted ">* Mandatory fields to fill.</p>

        {/* Create Button */}
        <div className="text-center mb-3">
          <button type="submit" className="custom-button btn">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGroup;
