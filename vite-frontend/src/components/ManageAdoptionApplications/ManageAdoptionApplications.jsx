import React, { useState, useEffect } from 'react';
import './ManageAdoptionApplications.css'
const ManageAdoptionApplications = () => {
  const [adoptionApplications, setAdoptionApplications] = useState([]);
  const [editingApplication, setEditingApplication] = useState(null);

  useEffect(() => {
    // Fetch the adoption applications from an API (mocked here)
    fetchAdoptionApplications();
  }, []);

  const fetchAdoptionApplications = async () => {
    // Mock data - Replace with actual API call
    const mockData = [
      {
        id: "5fa5b68a-0781-4d55-26c1-08dcbdfaa9bf",
        adopterId: "d302e528-bbd3-4f17-cca8-08dcbdfb4c18",
        petId: "e15bbbb4-4bc1-4a23-f318-08dcbdfaeadc",
        applicationStatus: 0,
        referenceCheck: false,
        reasonOfRejection: null,
        isFeePaid: false,
        processedByAdmin: null
      }
    ];
    setAdoptionApplications(mockData);
  };

  const handleDelete = (id) => {
    // Handler to delete an adoption application
    console.log(`Delete application with id: ${id}`);
  };

  const handleUpdate = (application) => {
    setEditingApplication(application);
  };

  const handleSaveUpdate = (id) => {
    // Save updated application logic here
    console.log(`Save updated application with id: ${id}`);
    setEditingApplication(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditingApplication({
      ...editingApplication,
      [name]: type === "checkbox" ? checked : value
    });
  };

  return (
    <div className="manage-adoption-applications">
      <h2>Manage Adoption Applications</h2>

      <table className="applications-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Adopter ID</th>
            <th>Pet ID</th>
            <th>Status</th>
            <th>Reference Check</th>
            <th>Fee Paid</th>
            <th>Reason of Rejection</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {adoptionApplications.map((application) => (
            <tr key={application.id}>
              <td>{application.id}</td>
              <td>{application.adopterId}</td>
              <td>{application.petId}</td>

              {/* Conditional display depending on whether the application is being edited */}
              {editingApplication && editingApplication.id === application.id ? (
                <>
                  <td>
                    <select
                      name="applicationStatus"
                      value={editingApplication.applicationStatus}
                      onChange={handleChange}
                    >
                      <option value={0}>Pending</option>
                      <option value={1}>Approved</option>
                      <option value={2}>Rejected</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="referenceCheck"
                      checked={editingApplication.referenceCheck}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="isFeePaid"
                      checked={editingApplication.isFeePaid}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    {editingApplication.applicationStatus === 2 && (
                      <input
                        type="text"
                        name="reasonOfRejection"
                        value={editingApplication.reasonOfRejection || ""}
                        onChange={handleChange}
                        placeholder="Reason for rejection"
                      />
                    )}
                  </td>
                  <td>
                    <button
                      className="save-btn"
                      onClick={() => handleSaveUpdate(application.id)}
                    >
                      Save
                    </button>
                    <button
                      className="cancel-btn"
                      onClick={() => setEditingApplication(null)}
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>
                    {application.applicationStatus === 0
                      ? "Pending"
                      : application.applicationStatus === 1
                      ? "Approved"
                      : "Rejected"}
                  </td>
                  <td>{application.referenceCheck ? "Yes" : "No"}</td>
                  <td>{application.isFeePaid ? "Yes" : "No"}</td>
                  <td>{application.reasonOfRejection || "N/A"}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleUpdate(application)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(application.id)}
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAdoptionApplications;
