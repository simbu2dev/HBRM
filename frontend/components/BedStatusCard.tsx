type Props = {
  title: string
  count: number
  color: string
}

export default function BedStatusCard({ title, count, color }: Props) {
  return (
    <div className={`p-4 rounded shadow text-white ${color}`}>
      <h3 className="text-lg">{title}</h3>
      <p className="text-3xl font-bold">{count}</p>
    </div>
  )
}
