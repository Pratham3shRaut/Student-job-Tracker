import React, { useContext } from 'react';
import { ApplicationContext } from '../context/ApplicationContext';
import ApplicationCard from './ApplicationCard';

const ApplicationList = () => {
  const { applications, updateStatus, deleteApplication } = useContext(ApplicationContext);

  return (
    <div className="grid">
      {applications.map((app, idx) => (
        <ApplicationCard
          key={idx}
          application={app}
          onUpdateStatus={(status) => {
            applications[idx].status=status
            updateStatus(applications[idx]._id, applications[idx])}}
          onDelete={() => deleteApplication(applications[idx]._id)}
        />
      ))}
    </div>
  );
};

export default ApplicationList;