// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("✅ Authentication Successful"))
//   .catch((err) => console.error("❌ Connection Error:", err.message));

// // Job Schema
// const jobSchema = new mongoose.Schema({
//   company: { type: String, required: true },
//   role: { type: String, required: true },
//   status: {
//     type: String,
//     enum: ["Applied", "Interview", "Offer", "Rejected"],
//     default: "Applied",
//   },
//   applicationDate: { type: Date, default: Date.now },
//   link: String,
// });

// const Job = mongoose.model("Job", jobSchema);

// // Routes
// app.get("/api/jobs", async (req, res) => {
//   try {
//     const jobs = await Job.find().sort({ applicationDate: -1 });
//     res.json(jobs);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// app.post("/api/jobs", async (req, res) => {
//   console.log("Incoming job data:", req.body); // ✅ Add this

//   const job = new Job(req.body);
//   try {
//     const newJob = await job.save();
//     res.status(201).json(newJob);
//   } catch (err) {
//     console.error("Error saving job:", err.message);
//     res.status(400).json({ message: err.message });
//   }
// });

// app.patch("/api/jobs/:id", async (req, res) => {
//   try {
//     const job = await Job.findByIdAndUpdate(
//       req.params.id,
//       { status: req.body.status },
//       { new: true }
//     );
//     res.json(job);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// app.delete("/api/jobs/:id", async (req, res) => {
//   try {
//     await Job.findByIdAndDelete(req.params.id);
//     res.json({ message: "Job deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));

// ✅ Job Schema & Model
const jobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  status: {
    type: String,
    enum: ["Applied", "Interview", "Offer", "Rejected"],
    default: "Applied",
  },
  applicationDate: { type: Date, default: Date.now },
  link: String,
});

const Job = mongoose.model("Job", jobSchema);

// ✅ Routes
// Health check
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// Get all jobs
app.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ applicationDate: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add job
app.post("/api/jobs", async (req, res) => {
  console.log("📥 Incoming job data:", req.body);
  const job = new Job(req.body);

  try {
    const savedJob = await job.save();
    res.status(201).json(savedJob);
  } catch (err) {
    console.error("❌ Error saving job:", err.message);
    res.status(400).json({ message: err.message });
  }
});

// Update job status
app.patch("/api/jobs/:id", async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updatedJob);
  } catch (err) {
    console.error("❌ PATCH error:", err.message);
    res.status(400).json({ message: err.message });
  }
});

// Delete job
app.delete("/api/jobs/:id", async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: "🗑️ Job deleted" });
  } catch (err) {
    console.error("❌ DELETE error:", err.message);
    res.status(500).json({ message: err.message });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
