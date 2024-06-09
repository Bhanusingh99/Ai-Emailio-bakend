import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import cors package
import { connectToDatabase } from "./db/connectToDb.js";

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware to increase payload size limit
app.use(express.json({ limit: "250mb" }));

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000", // Allow requests from this origin
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

// MongoDB Connection
connectToDatabase();

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Define routes for saving emails (example route)
import emailRoutes from "./routes/email.js";
app.use("/api/emails", emailRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
