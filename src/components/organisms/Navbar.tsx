import { FC } from 'react'
import { NavbarHelp as Help } from '../atoms/NavbarHelp'
import { NavbarNotification as Notification } from '../molecules/NavbarNotification'
import { NavbarProfile as Profile } from '../molecules/NavbarProfile'

export const Navbar: FC = () => {
  return (
    <div className='w-full h-16 p-5 flex justify-end items-center gap-5'>
      <Help />
      <Notification />
      <Profile />
    </div>
  )
}
