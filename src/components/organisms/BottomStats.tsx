import { FC } from 'react'
import { InventoryStats } from '../molecules/InventoryStats'
import { SalesCircular } from '../molecules/SalesCircular'

export const BottomStats: FC = () => {
  return (
    <div className='flex gap-5'>
      <InventoryStats />
      <SalesCircular />
    </div>
  )
}
