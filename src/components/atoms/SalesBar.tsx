import { FC } from 'react'
import { useMouseHover } from '../../hooks/useMouseHover'
import { useStatistics } from '../../hooks/useStatictics'

export const SalesBar: FC<{
  date: string
  active: boolean
  sale: number
  id: number
}> = ({ date, active, sale, id }) => {
  const { onMouseEnter, onMouseLeave, setId, onMouseMove } = useMouseHover()
  const { sales } = useStatistics()
  const highestSales = sales.reduce((prev, current) =>
    prev.sales > current.sales ? prev : current
  )
  const height = Math.floor((sale / highestSales.sales) * 100)
  const monthString = new Date(date).toLocaleDateString('id-ID', {
    month: 'short',
  })

  return (
    <div className='h-full w-7 flex flex-col justify-end items-center gap-2'>
      <div
        className={`flex w-full rounded  transition-all hover:scale-105 hover:shadow ${
          active ? 'bg-secondary' : 'bg-primary'
        }`}
        style={{ height: `${height}%` }}
        onMouseEnter={(e) => {
          onMouseEnter()
          onMouseMove(e as unknown as MouseEvent)
          setId(id)
        }}
        onMouseLeave={onMouseLeave}
        onMouseMove={(e) => onMouseMove(e as unknown as MouseEvent)}
      />

      <div className={`${active ? 'text-secondary font-bold' : ''}`}>
        {monthString}
      </div>
    </div>
  )
}
