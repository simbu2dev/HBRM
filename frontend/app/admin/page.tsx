'use client'

import { useState, useEffect } from 'react'

type BedRequest = {
  id: string
  patientName: string
  wardType: string
  status: string
}

export default function AdminPanel() {
  const [requests, setRequests] = useState<BedRequest[]>([
    // Sample data; replace with API later
    { id: '1', patientName: 'John Doe', wardType: 'ICU', status: 'pending' },
    { id: '2', patientName: 'Jane Smith', wardType: 'General', status: 'approved' }
  ])

  const handleApprove = (id: string) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: 'approved' } : r))
    )
  }

  const handleDeny = (id: string) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: 'denied' } : r))
    )
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Admin Panel</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Patient Name</th>
              <th className="px-4 py-2 text-left">Ward Type</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-t">
                <td className="px-4 py-2 text-gray-800">{req.patientName}</td>
<td className="px-4 py-2 text-gray-800">{req.wardType}</td>
<td className="px-4 py-2 text-gray-800 capitalize">{req.status}</td>

                <td className="px-4 py-2 space-x-2">
                  <button
                    onClick={() => handleApprove(req.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDeny(req.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Deny
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
