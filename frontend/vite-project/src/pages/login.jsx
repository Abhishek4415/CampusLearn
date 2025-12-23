
function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold text-black text-center mb-4">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
