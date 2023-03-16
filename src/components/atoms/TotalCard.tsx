import { FC, ReactNode } from 'react'
export const TotalCard: FC<{ title: string; icon: ReactNode }> = ({
  title,
  children,
  icon,
}) => {
  return (
    <div className='w-60 aspect-auto bg-base-100 rounded-lg flex items-center shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-sm transition-all'>
      <div className='text-primary px-3'>{icon}</div>
      <div className='px-4 py-6 flex flex-col gap-2 items-end w-full'>
        <div className='font-bold'>{title}</div>
        <div className='font-bold text-xl'>{children}</div>
      </div>
    </div>
  )
}
