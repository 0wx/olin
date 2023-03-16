import { FC } from 'react'
import { useStatistics } from '../../hooks/useStatictics'
import { SalesBar } from '../atoms/SalesBar'

export const SalesBarChart: FC = () => {
  const { sales } = useStatistics()

  return (
    <div className='flex justify-around items-end h-72 py-5'>
      {sales.map((sale, i) => {
        return (
          <SalesBar
            key={i}
            sale={sale.sales}
            date={sale.date}
            active={i === sales.length - 1}
            id={sale.id}
          />
        )
      })}
    </div>
  )
}
