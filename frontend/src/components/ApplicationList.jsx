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
          onUpdateStatus={(status) => updateStatus(idx, status)}
          onDelete={() => deleteApplication(idx)}
        />
      ))}
    </div>
  );
};

export default ApplicationList;