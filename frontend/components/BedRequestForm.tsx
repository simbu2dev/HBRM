'use client'

import { useState } from 'react'
import api from '@/services/api'

export default function BedRequestForm() {
  const [patientName, setPatientName] = useState('')
  const [bedType, setBedType] = useState('General')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await api.post('/patients/request-bed', {
        patientName,
        requestedBedType: bedType,
      })
      alert('Request submitted successfully')
    } catch (err) {
      alert('Failed to submit request')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-lg">
        <div className="mb-4 text-left">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Request Bed</h2>
      </div>
      <input
  className="w-full p-2 mb-3 border rounded text-black"
  placeholder="Patient Name"
  value={patientName}
  onChange={(e) => setPatientName(e.target.value)}
/>
<select
  className="w-full p-2 mb-3 border rounded text-black"
  value={bedType}
  onChange={(e) => setBedType(e.target.value)}
>
  <option value="General">General</option>
  <option value="ICU">ICU</option>
</select>

      <button className="bg-blue-600 text-white p-2 rounded w-full" type="submit">
        Submit Request
      </button>
    </form>
  )
}
