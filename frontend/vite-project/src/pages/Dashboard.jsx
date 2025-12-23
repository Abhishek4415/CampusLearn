import { useEffect, useState } from 'react'

function Dashboard() {

  // State to store logged-in user data
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Get user data from localStorage
    const storedUser = localStorage.getItem('user')

    // Convert string back to object
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  return (
    <div className="min-h-screen p-6 bg-gray-100">

      <h1 className="text-2xl font-bold text-blue-600">
        Dashboard
      </h1>

      {user && (
        <div className="mt-4 bg-white p-4 rounded shadow">

          <p className="text-lg">
            Welcome, <span className="font-semibold">{user.name}</span>
          </p>

          <p className="mt-2 text-gray-700">
            Role: <span className="font-medium">{user.role}</span>
          </p>

        </div>
      )}

    </div>
  )
}

export default Dashboard
