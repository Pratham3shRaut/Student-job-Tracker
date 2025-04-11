// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import AddJob from './components/AddApplication';
// import JobItem from './components/ApplicationList';

// export default function App() {
//   const [jobs, setJobs] = useState([]);
//   const [filter, setFilter] = useState('All');

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/jobs');
//       setJobs(response.data);
//     } catch (error) {
//       console.error('Error fetching jobs:', error);
//     }
//   };

//   const handleAddJob = async (newJob) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/jobs', newJob);
//       setJobs([response.data, ...jobs]);
//     } catch (error) {
//       console.error('Error adding job:', error);
//     }
//   };

//   const handleUpdateStatus = async (id, newStatus) => {
//     try {
//       await axios.patch(`http://localhost:5000/api/jobs/${id}`, { status: newStatus });
//       setJobs(jobs.map(job => 
//         job._id === id ? { ...job, status: newStatus } : job
//       ));
//     } catch (error) {
//       console.error('Error updating status:', error);
//     }
//   };

//   const handleDeleteJob = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/jobs/${id}`);
//       setJobs(jobs.filter(job => job._id !== id));
//     } catch (error) {
//       console.error('Error deleting job:', error);
//     }
//   };

//   const filteredJobs = jobs.filter(job => 
//     filter === 'All' ? true : job.status === filter
//   );

//   return (
//     <div className="app-container">
//       <h1>Job Application Tracker</h1>
      
//       <AddJob onAdd={handleAddJob} />
      
//       <div className="filter-section">
//         <label>Filter by Status:</label>
//         <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//           <option value="All">All</option>
//           <option value="Applied">Applied</option>
//           <option value="Interview">Interview</option>
//           <option value="Offer">Offer</option>
//           <option value="Rejected">Rejected</option>
//         </select>
//       </div>
      
//       <div className="jobs-list">
//         {filteredJobs.map(job => (
//           <JobItem
//             key={job._id}
//             job={job}
//             onUpdate={handleUpdateStatus}
//             onDelete={handleDeleteJob}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }