import type { ReactNode } from 'react'

interface AdminCardProps {
  title: string
  price?: number
  icon: ReactNode
  percent?: number
  icon1?: ReactNode
  orders?: number
  lowStock?: number
  iconClassName?: string
  icon1ClassName?: string
}

const AdminCard = ({
  title,
  price,
  icon,
  percent,
  icon1,
  orders,
  lowStock,
  iconClassName,
  icon1ClassName,
}: AdminCardProps) => {
  return (
    <div className="bg-white rounded-md p-5 space-y-3 mt-9 shadow-sm">
      <div className="flex justify-between">
        <p className="font-semibold text-gray-500"> {title} </p>
        <span className={`p-2 rounded-sm ${iconClassName}`}>{icon}</span>
      </div>
      <div className="flex gap-2">
        {price !== undefined && (
          <>
            <h4 className="font-bold  text-xl"> ${price?.toLocaleString()}</h4>
            <p
              className={`flex gap-1 items-center text-sm font-semibold text-emerald-600 ${icon1ClassName}`}
            >
              {icon1} {percent}%
            </p>
          </>
        )}

        {orders !== undefined && (
          <>
            <h4 className="font-bold  text-xl"> {orders} </h4>
            <p
              className={`flex gap-1 items-center text-sm font-semibold text-emerald-600 ${icon1ClassName}`}
            >
              {icon1} {percent}%
            </p>
          </>
        )}

        {lowStock !== undefined && (
          <h4 className="font-bold  text-xl"> {lowStock} </h4>
        )}
      </div>
    </div>
  )
}

export default AdminCard
