import { FC } from 'react'

export const InventoryList: FC<{ title: string, total: number }> = ({ title, total }) => {
  return (
    <div className='flex justify-between'>
      <div>{title}</div>
      <div className='bg-[#b0dfff] w-6 flex p-1 font-bold justify-center items-center rounded-lg'>{total}</div>
    </div>
  )
}
