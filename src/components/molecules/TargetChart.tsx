import { FC } from 'react'
import { TargetCard } from '../atoms/TargetCard'

export const TargetChart: FC = () => {
  return (
    <div className='flex w-full justify-around py-4'>
      <TargetCard title='Target' total={231} up />
      <TargetCard title='Last Week' total={224} down />
      <TargetCard title='Last Month' total={2132} up />
      <TargetCard title='This Year' total={8123} up />
    </div>
  )
}
