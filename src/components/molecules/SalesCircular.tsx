import { FC } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useStatistics } from '../../hooks/useStatictics'
import { SalesCircularChart } from './SalesCircularChart'
import { SalesCircularData } from './SalesCricularData'

ChartJS.register(ArcElement, Tooltip, Legend)

export const SalesCircular: FC = () => {
  return (
    <div className='bg-base-100 shadow rounded-lg p-5 w-96 flex flex-col gap-5'>
      <h1 className='font-bold text-xl'>Presentase Penjualan Obat</h1>
      <div className='flex flex-col justify-center items-center'>
        <SalesCircularChart />
      </div>
      <SalesCircularData />
    </div>
  )
}
