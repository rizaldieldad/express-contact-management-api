import express, { Request, Response, Application } from 'express';
import dotenv from "dotenv"

dotenv.config()

const app: Application = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Contact Management API is running ✨")
})

// Run server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})