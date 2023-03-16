import { FC } from 'react'

export const NavbarProfile: FC = () => {
  return (
    <div className='flex items-center gap-2 p-2 hover:bg-base-200 rounded cursor-pointer'>
      <div className='w-8 h-8 rounded-full bg-gray-300'></div>
      <div className='ml-2'>
        <p className='text-sm font-bold'>Roman Dimitri</p>
        <p className='text-xs text-gray-500 opacity-70'>Owner</p>
      </div>
    </div>
  )
}
