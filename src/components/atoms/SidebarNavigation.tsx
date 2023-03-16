import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

/**
 * SidebarNavigation
 * - first child is icon and second child is text
 *
 * @example
 * <SidebarNavigation path='/'>
 *  <IoIosHome />
 *  Homepage
 * </SidebarNavigation>
 *
 */
export const SidebarNavigation: FC<{ path: string }> = ({ children, path }) => {
  const router = useRouter()
  const isActive = router.pathname === path

  return (
    <Link href={path}>
      <button
        className={`flex items-center justify-start w-full h-12 px-4 text-sm font-medium text-gray-600 rounded-sm hover:bg-gray-100 hover:text-gray-900 gap-5 ${
          isActive
            ? 'bg-base-200 text-primary font-bold border-l-primary border-l-4 hover:bg-base-200 hover:text-primary'
            : 'pl-5'
        }`}
      >
        {children}
      </button>
    </Link>
  )
}
