import { FC } from 'react'
import { useStatistics } from '../../hooks/useStatictics'

export const SalesCircularData: FC = () => {
  const { salesByCategory } = useStatistics()
  const totalSales = salesByCategory.reduce(
    (acc, curr) => acc + curr.sales,
    0
  )
  return (
    <div className='flex flex-wrap gap-2'>
      {salesByCategory.map((category, i) => {
        const percentage = ((category.sales / totalSales) * 100).toFixed(0)
        return (
          <div key={i} className='flex gap-2 items-center w-40'>
            <div
              className='w-3 h-3'
              style={{ backgroundColor: category.color }}
            />
            <div className='text-sm'>{category.category} ({percentage}%)</div>
          </div>
        )
      })}
    </div>
  )
}
