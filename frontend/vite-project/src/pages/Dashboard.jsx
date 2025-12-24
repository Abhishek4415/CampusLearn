import { useEffect, useState } from 'react'

function Dashboard() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Dashboard
      </h1>

      {user && (
        <div className="bg-white rounded-xl shadow-md p-6">

          {/* User Info */}
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <p className="text-lg text-gray-700">
                Welcome,
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {user.name}
              </p>
            </div>

            <span className="px-4 py-1 rounded-full text-sm font-medium
              ${user.role === 'student' ? 'bg-green-100 text-green-700' :
                user.role === 'teacher' ? 'bg-purple-100 text-purple-700' :
                'bg-red-100 text-red-700'}">
              {user.role.toUpperCase()}
            </span>
          </div>

          {/* Role Based Sections */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">

            {/* STUDENT */}
            {user.role === 'student' && (
              <>
                <div className="p-5 border rounded-lg hover:shadow transition">
                  <h2 className="text-xl font-semibold text-green-600">
                    📘 View Notes
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Access notes uploaded by teachers.
                  </p>
                  <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">
                    Open Notes
                  </button>
                </div>

                <div className="p-5 border rounded-lg hover:shadow transition">
                  <h2 className="text-xl font-semibold text-blue-600">
                    🤖 AI Chatbot
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Ask questions from your syllabus.
                  </p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                    Ask AI
                  </button>
                </div>
              </>
            )}

            {/* TEACHER */}
            {user.role === 'teacher' && (
              <>
                <div className="p-5 border rounded-lg hover:shadow transition">
                  <h2 className="text-xl font-semibold text-purple-600">
                    📤 Upload Notes
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Upload notes for students.
                  </p>
                  <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded">
                    Upload
                  </button>
                </div>

                <div className="p-5 border rounded-lg hover:shadow transition">
                  <h2 className="text-xl font-semibold text-indigo-600">
                    📂 Manage Notes
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Edit or delete uploaded notes.
                  </p>
                  <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded">
                    Manage
                  </button>
                </div>
              </>
            )}

            {/* ADMIN */}
            {user.role === 'admin' && (
              <>
                <div className="p-5 border rounded-lg hover:shadow transition">
                  <h2 className="text-xl font-semibold text-red-600">
                    👥 Manage Users
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Control platform users.
                  </p>
                  <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded">
                    Manage Users
                  </button>
                </div>

                <div className="p-5 border rounded-lg hover:shadow transition">
                  <h2 className="text-xl font-semibold text-orange-600">
                    📊 Analytics
                  </h2>
                  <p className="mt-2 text-gray-600">
                    View system statistics.
                  </p>
                  <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded">
                    View Stats
                  </button>
                </div>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  )
}

export default Dashboard
