import { FC } from 'react'
import { Wave } from '../atoms/Wave'

export const LoginBackground: FC = () => {
  return (
    <div className='fixed -z-10 top-0 left-0 h-screen w-full bg-[#c8e9ff]'>
      <div className='h-1/6' />
      <Wave />
      <div className='h-full bg-[#91d3ff]' />
    </div>
  )
}
