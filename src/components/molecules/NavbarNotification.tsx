import { FC } from 'react'
import { IoMailOutline } from 'react-icons/io5'
import { NavbarNotificationBadge } from '../atoms/NavbarNotifationBadge'

export const NavbarNotification: FC = () => {
  return (
    <div>
      <IoMailOutline size={25} />
      <div className='absolute translate-x-4 -translate-y-8'>
        <NavbarNotificationBadge />
      </div>
    </div>
  )
}
