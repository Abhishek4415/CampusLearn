import express from 'express'                    // Import Express to create routes
import upload from '../middleware/upload.js'     // Import upload middleware for file handling
import Note from '../models/note.js'              // Import Note model to save notes in database
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()                   // Create a new router for note-related routes

router.post('/upload',                            // Create POST route for uploading notes
    authMiddleware,
    upload.single('file'),                          // Accept a single PDF file with field name "file"
    async (req, res) => {
        if (req.userRole !== 'teacher') {
            return res.status(403).json({
                message: 'Only teachers can upload notes'
            })
        }                          // Async function to handle upload request
        try {

            const note = new Note({                     // Create a new Note document
                title: req.body.title,                    // Get note title from request body
                subject: req.body.subject,                // Get subject name from request body
                fileUrl: req.file.path,                   // Save uploaded file path
                uploadedBy: req.userId                    // Save ID of the logged-in user (teacher)
            })



            await note.save()                           // Save note data in MongoDB

            res.json({ message: 'Note uploaded successfully' }) // Send success response

        } catch (error) {                              // Catch any error during upload
            res.status(500).json({ message: 'Upload failed' })  // Send error response
        }
    })

// GET notes uploaded by teacher
router.get(
  '/my-notes',
  authMiddleware,
  async (req, res) => {

    if (req.userRole !== 'teacher') {
      return res.status(403).json({
        message: 'Only teachers can view this'
      })
    }

    try {
      const notes = await Note.find({ uploadedBy: req.userId })
      res.json(notes)
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch notes' })
    }
  }
)


export default router                             // Export router to use in index.js

//===================================================WHAT============
// What this file does (very simple)

// Accepts PDF file uploads

// Saves file on server

// Stores note details in database

// Links note with the teacher who uploaded it