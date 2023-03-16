import { FC } from 'react'
import { IoCaretDownOutline, IoCaretUpOutline } from 'react-icons/io5'

export const TargetCard: FC<{
  title: string
  up?: boolean
  down?: boolean
  total: number
}> = ({ up, down, title, total }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='font-bold'>{title}</div>
      <div className='flex justify-center items-center gap-2'>
        {up && <IoCaretUpOutline size={20} color='#27d600' />}
        {down && <IoCaretDownOutline size={20} color='red' />}
        <div style={{ color: up ? '#27d600' : 'red' }}>{total}</div>
      </div>
    </div>
  )
}
