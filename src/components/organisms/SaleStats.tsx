import { FC, useEffect } from 'react'
import { IoEllipsisVertical } from 'react-icons/io5'
import { SalesBarChart } from '../molecules/SalesBarChart'
import { TargetChart } from '../molecules/TargetChart'
import { TotalStats } from './TotalStats'

export const SaleStats: FC = () => {
  return (
    <div className='flex flex-wrap gap-5'>
      <div className='bg-base-100 shadow aspect-auto w-[600px] p-5 rounded-lg'>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-xl'>Sales & Purchase</h1>
          <IoEllipsisVertical />
        </div>
        <SalesBarChart />
        <TargetChart />
      </div>
      <TotalStats />
    </div>
  )
}
