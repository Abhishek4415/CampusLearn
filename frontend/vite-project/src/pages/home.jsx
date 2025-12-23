// Import useEffect hook to run code when the page loads
import { useEffect } from 'react'

// Import API to communicate with the backend
import API from '../services/api'

function Home() {

  // useEffect runs once when the Home page is opened
  useEffect(() => {

    // Send GET request to backend root route (/)
    API.get('/')

      // When backend sends response, print the data in console
      .then(res => console.log(res.data))

  // Empty array means this code runs only one time
  },[])

  return (
    // Full screen container with center alignment and background color
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      {/* // Main heading text */}
      <h2 className="text-3xl font-bold text-blue-600">
        Welcome to CampusLearn
      </h2>

      {/* // Small description text */}
      <p className="mt-4 text-gray-700">
        Study smarter with notes, AI, and videos.
      </p>
    </div>
  )
}

export default Home

//show message on screen
// Export Home component so it can be used in other files 



//   // State to store message coming from backend
//   const [message, setMessage] = useState('')

//   // Run once when page loads
//   useEffect(() => {

//     // Call backend root route
//     API.get('/')

//       // Save backend message into state
//       .then(res => setMessage(res.data))

//   }, [])