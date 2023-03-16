import { atom, useAtom } from 'jotai'
const initialSales = [
  {
    id: 1,
    date: '2022-01',
    sales: 60,
    transactions: 14500000,
  },
  {
    id: 2,
    date: '2022-02',
    sales: 76,
    transactions: 14350000,
  },
  {
    id: 3,
    date: '2022-03',
    sales: 108,
    transactions: 14450000,
  },
  {
    id: 4,
    date: '2022-04',
    sales: 159,
    transactions: 14500000,
  },
  {
    id: 5,
    date: '2022-05',
    sales: 110,
    transactions: 14550000,
  },
  {
    id: 6,
    date: '2022-06',
    sales: 81,
    transactions: 14600000,
  },
  {
    id: 7,
    date: '2022-07',
    sales: 93,
    transactions: 14650000,
  },
  {
    id: 8,
    date: '2022-08',
    sales: 93,
    transactions: 14700000,
  },
  {
    id: 9,
    date: '2022-09',
    sales: 64,
    transactions: 14750000,
  },
  {
    id: 10,
    date: '2022-10',
    sales: 115,
    transactions: 14800000,
  },
  {
    id: 11,
    date: '2022-11',
    sales: 156,
    transactions: 14850000,
  },
  {
    id: 12,
    date: '2022-12',
    sales: 217,
    transactions: 14900000,
  },
]
const salesAtom = atom(initialSales)

function salesWithRandomSales() {
  return initialSales.map((sale) => ({
    ...sale,
    sales: sale.sales + Math.floor(Math.random() * 200),
  }))
}

const salesByCategoryAtom = atom([
  {
    category: 'Offline',
    sales: 70,
    color: '#FFC107',
  },
  {
    category: 'AloDoc',
    sales: 41,
    color: '#FF9800',
  },
  {
    category: 'HaloDoc',
    sales: 108,
    color: '#FF5722',
  },
  {
    category: 'SehatQ',
    sales: 12,
    color: '#F44336',
  },
  {
    category: 'GrabHealth',
    sales: 11,
    color: '#E91E63',
  },
  {
    category: 'Tokopedia',
    sales: 51,
    color: '#9C27B0',
  },
  {
    category: 'Shopee',
    sales: 41,
    color: '#673AB7',
  },
])

export const useStatistics = () => {
  const [sales, setSales] = useAtom(salesAtom)
  const [salesByCategory] = useAtom(salesByCategoryAtom)

  const randomizeSales = () => {
    setSales(salesWithRandomSales())
  }
  return {
    sales,
    salesByCategory,
    randomizeSales,
  }
}
