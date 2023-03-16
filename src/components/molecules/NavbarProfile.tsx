import { useRouter } from 'next/router'
import { FC } from 'react'
import { IoPowerOutline } from 'react-icons/io5'

export const NavbarProfile: FC = () => {
  const router = useRouter()
  return (
    <div className='dropdown dropdown-end'>
      <div
        tabIndex={0}
        className='flex items-center gap-2 p-2 hover:bg-base-200 rounded cursor-pointer'
      >
        <div className='w-8 h-8 rounded-full bg-gray-300'></div>
        <div className='ml-2'>
          <p className='text-sm font-bold'>Roman Dimitri</p>
          <p className='text-xs text-gray-500 opacity-70'>Owner</p>
        </div>
      </div>
      <ul
        tabIndex={0}
        className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
      >
        <li
          onClick={() => {
            localStorage.clear()
            router.push('/login')
          }}
        >
          <a>
            <IoPowerOutline /> Logout
          </a>
        </li>
      </ul>
    </div>
  )
}
