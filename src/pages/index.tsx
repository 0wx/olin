import { DashboardLayout } from '../components/layouts/DashboardLayout'
import { BottomStats } from '../components/organisms/BottomStats'
import { MainStats } from '../components/organisms/MainStats'
import { SaleStats } from '../components/organisms/SaleStats'

export default function Home() {
  return (
    <DashboardLayout>
      <h1 className='font-bold text-2xl'>Order Statistics</h1>
      <MainStats />
      <SaleStats />
      <BottomStats />
    </DashboardLayout>
  )
}
