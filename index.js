
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Import routes
const hrroutes = require("./routes/hr_route");
const emprouter = require("./routes/emp_route");

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err.message);
    });

// API routes
app.use("/api/hr", hrroutes);
app.use("/api/emp", emprouter);

// Render port configuration
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
