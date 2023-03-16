import { FC } from 'react'
import { SidebarNavigation as SideNav } from '../atoms/SidebarNavigation'
import {
  IoArchiveOutline,
  IoBagHandleOutline,
  IoCartOutline,
  IoHomeOutline,
  IoPersonCircleOutline,
} from 'react-icons/io5'
export const Sidebar: FC = () => {
  return (
    <div className='overflow-auto p-5 w-full max-w-xs min-h-screen shadow-lg'>
      <img src='/olin.png' alt='Olin Logo' width={65} className='' />
      <div className='mt-24 flex flex-col gap-2'>
        <SideNav path='/'>
          <IoHomeOutline size={20} />
          Homepage
        </SideNav>
        <SideNav path='/sales'>
          <IoBagHandleOutline size={20} />
          Sales
        </SideNav>
        <SideNav path='/inventory'>
          <IoArchiveOutline size={20} />
          Inventory
        </SideNav>
        <SideNav path='/purchase'>
          <IoCartOutline size={20} />
          Purchase
        </SideNav>
        <SideNav path='/user-management'>
          <IoPersonCircleOutline size={20} />
          User Management
        </SideNav>
      </div>
    </div>
  )
}
