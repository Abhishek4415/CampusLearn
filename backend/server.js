// Import Express to create a server
import express from 'express'

// Import Mongoose to connect with MongoDB database
import mongoose from 'mongoose'

// Import CORS to allow frontend and backend to talk to each other
import cors from 'cors'

// Import dotenv to read secret values from .env file
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import noteRoutes from './routes/noteRoutes.js'
import path from 'path'




// Load all variables from .env file into the program
dotenv.config()
connectDB()  ///connect to db

// Create an Express application
const app = express()

// Allow requests from other websites (frontend)
app.use(cors())

// Allow the server to understand JSON data sent by frontend
app.use(express.json())
app.use('/api/auth', authRoutes)  //middlesware  //“All requests that start with /api/auth should be handled by authRoutes.”
app.use('/api/notes', noteRoutes)  //middlewARE //upload note handle
app.use('/uploads', express.static('uploads'))

// Create a test route to check if server is running
app.get('/', (req, res) => {
  // Send a simple message to browser
  res.send('CampusLearn backend running')
})


// Set port number from .env file or use 5000 if not available
const PORT = process.env.PORT || 5000

// Start the server and listen on the given port
app.listen(PORT, () => {
  // Print message when server starts successfully
  console.log(`Server running on port ${PORT}`)
})
