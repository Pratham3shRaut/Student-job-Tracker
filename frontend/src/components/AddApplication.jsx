import React, { useState, useContext } from 'react';
import { ApplicationContext } from '../context/ApplicationContext';

const AddApplication = () => {
  const { addApplication } = useContext(ApplicationContext);
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    status: 'Applied',
    date: '',
    link: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addApplication(formData);
    setFormData({ company: '', role: '', status: 'Applied', date: '', link: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} required />
      <input name="role" placeholder="Role" value={formData.role} onChange={handleChange} required />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input name="date" type="date" value={formData.date} onChange={handleChange} required />
      <input name="link" placeholder="Link" value={formData.link} onChange={handleChange} required />
      <button type="submit">Add Application</button>
    </form>
  );
};

export default AddApplication;
