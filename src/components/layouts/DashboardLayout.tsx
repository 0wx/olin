import { FC } from 'react'
import { Navbar } from '../organisms/Navbar'
import { Sidebar } from '../organisms/Sidebar'

export const DashboardLayout: FC = ({ children }) => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <Navbar />
        <div className='h-full max-h-[calc(100vh-64px)] overflow-auto p-5 bg-slate-50 gap-5 flex flex-col'>
          {children}
        </div>
      </div>
    </div>
  )
}
