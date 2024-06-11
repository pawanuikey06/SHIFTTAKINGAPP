// Import required modules
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const announceRoute = require("./routes/announcement");
const incidenceRoute = require("./routes/incidence");
const clientRoute = require("./routes/client");
const shiftRoute =require("./routes/shift")

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, ".env") });

// Verify environment variables
const dbUrl = process.env.DB;
const port = process.env.PORT || 3000;

if (!dbUrl) {
  console.error("Error: DB connection string is not defined in .env file.");
  process.exit(1);
}

// Initialize the Express app
const app = express();

// middlewares
app.use(express.json());
// Middleware to handle CORS
app.use(cors());

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("api/v1/announcements", announceRoute);
app.use("api/v1/incident", incidenceRoute);
app.use("api/v1/client", clientRoute);
app.use("api/v1/shift",shiftRoute);

// test route
app.get("/test", (req, res) => {
  res.status(200).json("test is OK!");
});

// Connect to the MongoDB database using the connection string from the environment variables
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Database Connection is Successfully");
  })
  .catch((error) => {
    console.error("Database Connection Error:", error);
  });

// Start the server on the specified port from the environment variables
app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
