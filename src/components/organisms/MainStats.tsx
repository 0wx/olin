import { FC } from 'react'
import { MainStatsCard } from '../molecules/MainStatsCard'

export const MainStats: FC = () => {
  return (
    <div className='flex gap-5 flex-wrap'>
      <MainStatsCard stat={20.5}>
        <>Total Selling</>
        <>890</>
      </MainStatsCard>
      <MainStatsCard>
        <>Expired Inventory</>
        <>5</>
      </MainStatsCard>
      <MainStatsCard>
        <>Out of stock inventory</>
        <>12</>
      </MainStatsCard>
    </div>
  )
}
