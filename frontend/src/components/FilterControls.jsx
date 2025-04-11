import React, { useContext } from 'react';
import { ApplicationContext } from '../context/ApplicationContext';

const FilterControls = () => {
  const { filter, setFilter } = useContext(ApplicationContext);

  return (
    <div className="filter-controls">
      <select value={filter.status} onChange={(e) => setFilter({ ...filter, status: e.target.value })}>
        <option value="">All Statuses</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
      <input type="date" value={filter.date} onChange={(e) => setFilter({ ...filter, date: e.target.value })} />
    </div>
  );
};

export default FilterControls;