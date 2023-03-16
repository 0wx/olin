import { FC, ReactNode } from 'react'
import { IoChevronUpOutline } from 'react-icons/io5'

export const MainStatsCard: FC<{ stat?: number, children: ReactNode[] }> = ({ children, stat }) => {
  return (
    <div className='flex flex-col bg-base-100 rounded-lg shadow w-64 aspect-auto p-5 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-sm transition-all'>
      <div className='font-bold'>{children[0]}</div>
      <div className='flex-1 flex justify-between items-end'>
        <div className='text-3xl font-semibold'>{children[1]}</div>
        {stat && (
          <div className='h-full flex flex-col items-center w-24 text-primary gap-1'>
            <IoChevronUpOutline size={20} />
            <div className='font-bold text-primary'>{stat}%</div>
          </div>
        )}
      </div>
    </div>
  )
}
