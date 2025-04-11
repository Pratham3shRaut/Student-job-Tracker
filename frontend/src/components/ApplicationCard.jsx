import React from 'react';

const ApplicationCard = ({ application, onUpdateStatus, onDelete }) => {
  return (
    <div className="application-card">
      <h3>{application.company}</h3>
      <p><strong>Role:</strong> {application.role}</p>
      <p><strong>Date:</strong> {application.date}</p>
      <p><strong>Status:</strong>
        <select value={application.status} onChange={(e) => onUpdateStatus(e.target.value)}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </p>
      <p><a href={application.link} target="_blank" rel="noopener noreferrer">Job Link</a></p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ApplicationCard;