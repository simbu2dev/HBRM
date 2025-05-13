export default function NotificationBanner() {
  const ICU_BEDS_LOW = true // Replace with dynamic logic later

  if (!ICU_BEDS_LOW) return null

  return (
    <div className="bg-yellow-100 text-yellow-800 p-4 rounded mb-4 border border-yellow-400">
      ⚠️ Alert: ICU beds are running low!
    </div>
  )
}
