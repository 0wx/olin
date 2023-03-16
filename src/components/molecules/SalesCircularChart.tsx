import { FC } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useStatistics } from '../../hooks/useStatictics'

ChartJS.register(ArcElement, Tooltip, Legend)

export const SalesCircularChart: FC = () => {
  const { salesByCategory } = useStatistics()
  return (
    <div className='h-48'>
      <Doughnut
        data={{
          labels: salesByCategory.map((sale) => sale.category),
          datasets: [
            {
              label: 'Sales by Category',
              data: salesByCategory.map((sale) => sale.sales),
              backgroundColor: salesByCategory.map((sale) => sale.color),
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
              // position: 'bottom',
              // align: 'start',
              // labels: { boxWidth: 25 },
            },
          },
        }}
      />
    </div>
  )
}
