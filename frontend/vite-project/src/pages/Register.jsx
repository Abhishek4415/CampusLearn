import { useState } from 'react'
import API from '../services/api'
import { useNavigate } from 'react-router-dom'

function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('student')
  const [message, setMessage] = useState('')

  const handleRegister = async () => {
    try {
      await API.post('/api/auth/register', {
        name,
        email,
        password,
        role
      })
      setMessage('Registration successful')
      navigate('/login')  
    } catch (error) {
      setMessage('Registration failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">

        <h2 className="text-2xl font-bold text-center mb-4">
          Register
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          className="w-full mb-4 p-2 border rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Register
        </button>

        {message && (
          <p className="text-center mt-3 text-sm text-red-600">
            {message}
          </p>
        )}

      </div>
    </div>
  )
}

export default Register
