'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import api from '@/services/api'

export default function RegisterPatientPage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('Male')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [success, setSuccess] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await api.post('/patients/register', {
        firstName,
        lastName,
        age,
        gender,
        phone,
        email,
        address,
      })

      setSuccess(true)

      // Optional: Clear the form
      setFirstName('')
      setLastName('')
      setAge('')
      setGender('Male')
      setPhone('')
      setEmail('')
      setAddress('')
    } catch (error) {
      alert('Registration failed')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Register New Patient</h2>

        {success && (
          <div className="bg-green-100 text-green-800 p-3 mb-4 rounded border border-green-400">
            ✅ Patient registered successfully!
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <input
            className="p-2 border rounded text-black"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="p-2 border rounded text-black"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <input
          className="w-full mt-3 p-2 border rounded text-black"
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <select
          className="w-full mt-3 p-2 border rounded text-black"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          className="w-full mt-3 p-2 border rounded text-black"
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          className="w-full mt-3 p-2 border rounded text-black"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          className="w-full mt-3 p-2 border rounded text-black"
          placeholder="Full Address"
          rows={3}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  )
}
