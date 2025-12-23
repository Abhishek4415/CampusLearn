// Import Axios, a tool used to send HTTP requests
import axios from 'axios'

// Create an Axios instance with a fixed backend address
const API = axios.create({
  // Base URL of the backend server
  baseURL: 'http://localhost:5000'
})

// Export this Axios instance so it can be used in other files
export default API
