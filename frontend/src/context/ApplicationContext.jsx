import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);
  const [filter, setFilter] = useState({ status: '', date: '' });

  const API_URL = 'http://localhost:5000/api/jobs';


  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await axios.get(API_URL);
      setApplications(res.data);
    } catch (err) {
      console.error('Failed to fetch applications', err);
    }
  };

  // const addApplication = async (app) => {
  //   try {
  //     const res = await axios.post(API_URL, app);
  //     setApplications(prev => [res.data, ...prev]);
  //   } catch (err) {
  //     console.error('Failed to add application', err);
  //   }
  // };
  const addApplication = async (app) => {
    try {
      console.log("Sending to backend:", app); // ✅ frontend sends
      const res = await axios.post(API_URL, app);
      console.log("Response from backend:", res.data); // ✅ frontend receives
      setApplications(prev => [res.data, ...prev]);
    } catch (err) {
      console.error('❌ Failed to add application', err.response?.data || err.message);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const res = await axios.patch(`${API_URL}/${id}`, { status });
      setApplications(prev => prev.map(app => app._id === id ? res.data : app));
    } catch (err) {
      console.error('Failed to update status', err);
    }
  };

  const deleteApplication = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setApplications(prev => prev.filter(app => app._id !== id));
    } catch (err) {
      console.error('Failed to delete application', err);
    }
  };

  const filteredApps = applications.filter(app => {
    const statusMatch = !filter.status || app.status === filter.status;
    const dateMatch = !filter.date || app.applicationDate?.slice(0, 10) === filter.date;
    return statusMatch && dateMatch;
  });

  return (
    <ApplicationContext.Provider
      value={{
        applications: filteredApps,
        addApplication,
        updateStatus,
        deleteApplication,
        filter,
        setFilter
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
