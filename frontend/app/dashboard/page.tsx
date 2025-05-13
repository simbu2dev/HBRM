'use client'

import BedStatusCard from '@/components/BedStatusCard'
import BedRequestForm from '@/components/BedRequestForm'
import NotificationBanner from '@/components/NotificationBanner'

export default function DashboardPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <NotificationBanner />
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Doctor/Nurse Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <BedStatusCard title="Total Beds" count={100} color="bg-blue-500" />
        <BedStatusCard title="Occupied Beds" count={60} color="bg-red-500" />
        <BedStatusCard title="Available Beds" count={40} color="bg-green-500" />
         <BedStatusCard title="Reserved Beds" count={10} color="bg-yellow-400 text-black" />
      </div>
      <BedRequestForm />
    </div>
  )
}
