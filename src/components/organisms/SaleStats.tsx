import { FC, useEffect } from 'react'
import { IoEllipsisVertical } from 'react-icons/io5'
import { SalesBarChart } from '../molecules/SalesBarChart'

export const SaleStats: FC = () => {
  return (
    <div className='bg-base-100 shadow aspect-auto w-2/3 p-5 rounded-lg'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-xl'>Sales & Purchase</h1>
        <IoEllipsisVertical />
      </div>
      <SalesBarChart />
    </div>
  )
}
