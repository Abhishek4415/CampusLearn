import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/Register'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import UploadNotes from './pages/UploadNotes'
import TeacherRoute from './components/TeacherRoute'
import ManageNotes from './pages/ManageNotes'
import StudentNotes from './pages/StudentNotes'



function App() {
  return (
    <>
      <Navbar />
      <Routes>

        {/* Public routes */}
        <Route path="/" element={
            <Home />

        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected route example */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/upload"
          element={
            <TeacherRoute>
              <UploadNotes />
            </TeacherRoute>
          }
        />
        <Route
          path="/managenotes"
          element={
            <TeacherRoute>
              <ManageNotes/>
            </TeacherRoute>
          }
        />

        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <StudentNotes/>
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  )
}

export default App
