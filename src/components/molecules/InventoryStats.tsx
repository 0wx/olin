import { FC } from 'react'
import { IoEllipsisVertical } from 'react-icons/io5'
import { InventoryList } from '../atoms/InventoryList'

export const InventoryStats: FC = () => {
  return (
    <div className='w-72 p-5 bg-base-100 rounded-lg shadow'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-xl'>Inventory</h1>
        <IoEllipsisVertical size={20} />
      </div>
      <div className='pr-2 flex flex-col gap-1 mt-4'>
        <InventoryList title='New Order' total={3} />
        <InventoryList title='Prepare Order' total={5} />
        <InventoryList title='Waiting Pickup' total={12} />
        <InventoryList title='Sent' total={9} />
        <InventoryList title='Cancel' total={7} />
        <InventoryList title='Done' total={5} />
      </div>
    </div>
  )
}
