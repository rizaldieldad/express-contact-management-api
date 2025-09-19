import express, { Request, Response, Application } from 'express';
import dotenv from "dotenv"
import mongoose from 'mongoose';

import contactRoutes from "./routes/contact.routes"

dotenv.config()

const app: Application = express()
const PORT = process.env.PORT || 3000
const mongoUri = process.env.MONGO_URI

if (!mongoUri) {
  throw new Error("MONGO_URI is not defined in the environment variables")
}

// MongoDB Connection
mongoose.connect(mongoUri)
  .then(() => {
    console.log("Connected to MongoDB")
    // Run server
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`)
    })
  })
  .catch((error) => console.log("MongoDB connection failed", error))

// Middleware
app.use(express.json())

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Contact Management API is running ✨")
})

app.use("/api/contacts", contactRoutes)