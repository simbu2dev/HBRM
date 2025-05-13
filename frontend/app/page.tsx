'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import api from '../services/api'
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const router = useRouter()

  const handleLogin = async (e: any) => {
    e.preventDefault()
    try {
      const res = await api.post('http://localhost:5000/api/login', { username: email, password })
      login(res.data);
      localStorage.setItem("token", res.data.token);
      router.push(res.data.role === 'admin' ? '/admin' : '/dashboard')
    } catch (err) {
      alert('Login failed')
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-full max-w-sm text-center">
        <div className="mb-4">
          <div className="mx-auto mb-4 bg-gray-200 flex items-center justify-center rounded w-[150px] h-[150px] text-gray-600">
            150 × 150
          </div>
          <h2 className="text-2xl font-bold text-blue-800">Login</h2>
        </div>
        <input
          className="w-full mb-3 p-2 border rounded text-black"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full mb-3 p-2 border rounded text-black"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
          Login
        </button>
        <div className="mt-4 text-sm">
          <a href="#" className="text-blue-700 block hover:underline">Forgot Password?</a>
          <a href="#" className="text-blue-700 block hover:underline">New User? Register here</a>
        </div>
      </form>
    </div>
  )
}
