// Import Express to create routes
import express from 'express'

// Import bcrypt to compare encrypted passwords
import bcrypt from 'bcryptjs'

// Import JWT to create login token
import jwt from 'jsonwebtoken'

// Import User model to access users from database
import User from '../models/user.js'

// Create a router for authentication routes=======================================================

const router = express.Router()

// REGISTER
router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body

  try {
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role
    })

    await user.save()

    res.json({ message: 'User registered successfully' })

  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

// ---------------- LOGIN ROUTE ----------------
// This route handles user login
router.post('/login', async (req, res) => {

  // Get email and password sent from frontend
  const { email, password } = req.body

  try {
    // Find user in database using email
    const user = await User.findOne({ email })

    // If user does not exist, stop and send error
    if (!user) {
      return res.status(400).json({ message: 'User not found' })
    }

    // Compare entered password with saved hashed password
    const isMatch = await bcrypt.compare(password, user.password)

    // If password does not match, stop and send error
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' })
    }

    // Create JWT token after successful login
    const token = jwt.sign(
      {
        id: user._id,   // user unique ID
        role: user.role // user role (student / teacher / admin)
      },
      process.env.JWT_SECRET // secret key for token
    )

    // Send token and basic user info to frontend
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role
      }
    })

  } catch (error) {
    // Send error if something goes wrong
    res.status(500).json({ message: 'Server error' })
  }
})

// Export router so it can be used in index.js
export default router


//========================WHY
// What this file does (very simple)

// Checks if user exists

// Verifies password safely

// Creates login token

// Sends login success response