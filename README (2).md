# 🎯 Student Job Tracker

A full-stack web application to help students track their job applications efficiently. Built with **React** on the frontend, **Node.js + Express** on the backend, and **MongoDB Atlas** for persistent data storage.

## 🚀 Live Demo

- 🔗 Frontend: [View on Vercel](https://student-job-tracker-git-main-pratham3shrauts-projects.vercel.app/)
- 🔗 Backend: [View on Render](https://student-job-tracker-3-89gq.onrender.com)

> ✅ Fully functional and deployed online!

---

## 📂 Project Structure

```
job-tracker/
│
├── backend/
│   ├── server.js           # Express server and API routes
│   ├── package.json
│   └── .env                # MongoDB credentials
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/     # UI components (Add, List, Filter, Navbar, etc.)
│   │   ├── context/        # ApplicationContext (global state)
│   │   ├── App.js
│   │   └── index.js
│   ├── .env                # Contains REACT_APP_API_URL
│   └── package.json
│
└── README.md
```

---

## 🌟 Features

- ✅ Add, update, delete job applications
- 🔍 Filter by date and status
- 🧠 Global state management using React Context API
- 🎨 Responsive and clean UI with reusable components
- 🌐 Backend hosted on Render, frontend on Vercel
- ☁️ MongoDB Atlas for cloud database

---

## 🛠️ Technologies Used

### Frontend (React)

- React + Hooks
- Axios
- Context API
- CSS

### Backend (Node.js + Express)

- Express
- MongoDB + Mongoose
- dotenv
- CORS, body-parser

### Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Pratham3shRaut/Student-job-Tracker
cd job-tracker
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend`:

```
MONGO_URI=your_mongodb_connection_string
PORT=10000
```

Start server:

```bash
node server.js
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create `.env` in frontend:

```
REACT_APP_API_URL=https://student-job-tracker-3-89gq.onrender.com/api/jobs
```

Start React app:

```bash
npm start
```

---

## 💡 AI Integration Ideas (Future Scope)

- 📄 Resume Parser using OpenAI or LangChain
- 🧠 AI-based job recommendation engine
- 📊 Visualize application trends using charts
- ✨ Natural Language Search for filtering

---

## 📸 Screenshots

Coming soon...

---

## 👤 Author

**Prathamesh Raut**  
Frontend & Backend Developer  
Email: prathameshrautanj@gmail.com  
GitHub: [@Pratham3shRaut](https://github.com/Pratham3shRaut/Student-job-Tracker)

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
