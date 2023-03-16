import { FC } from 'react'
import { AiOutlineAreaChart } from 'react-icons/ai'
import { TotalCard } from '../atoms/TotalCard'
import { MdOutlineDescription } from 'react-icons/md'
import { RiHandCoinLine } from 'react-icons/ri'
export const TotalStats: FC = () => {
  return (
    <div className='flex flex-col h-full gap-5'>
      <TotalCard title='Total Transaksi' icon={<AiOutlineAreaChart size={40} />}>
        Rp. 80.000.000
      </TotalCard>
      <TotalCard title='Sales' icon={<MdOutlineDescription size={40} />}>
        289
      </TotalCard>
      <TotalCard title='Purchase' icon={<RiHandCoinLine size={40} />}>
        289
      </TotalCard>
    </div>
  )
}
