import { FC } from 'react'
import { IoHelpCircleOutline } from 'react-icons/io5'

export const LoginNavbar: FC = () => {
  return (
    <div className='p-5 flex justify-between'>
      <img src='/olin.png' alt='Olin Logo' width={65} className='' />
      <div className='flex gap-2 items-center font-bold'>
        <IoHelpCircleOutline size={30} />
        Pusat Bantuan
      </div>
    </div>
  )
}
