import { FC } from 'react'
import { IoHelpCircleOutline } from 'react-icons/io5'

export const RegisterHeader: FC = () => {
  return (
    <div className='fixed top-0 left-0 w-full  p-5 flex justify-between bg-base-100 shadow-md'>
      <img src='/olin.png' alt='Olin Logo' width={65} className='' />
      <div className='flex gap-2 items-center font-bold'>
        <IoHelpCircleOutline size={30} />
        Pusat Bantuan
      </div>
    </div>
  )
}
