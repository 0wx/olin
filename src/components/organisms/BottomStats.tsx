import { FC } from 'react'
import { InventoryStats } from '../molecules/InventoryStats'
import { SalesCircularGraph } from '../molecules/SalesCircularGraph'

export const BottomStats: FC = () => {
  return (
    <div className='flex gap-5'>
      <InventoryStats />
      <SalesCircularGraph />
    </div>
  )
}
