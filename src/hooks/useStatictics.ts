import { atom, useAtom } from 'jotai'

const salesAtom = atom([
  {
    date: '2022-01',
    sales: 110,
    transactions: 14500000,
  },
  {
    date: '2022-02',
    sales: 106,
    transactions: 14350000,
  },
  {
    date: '2022-03',
    sales: 108,
    transactions: 14450000,
  },
  {
    date: '2022-04',
    sales: 109,
    transactions: 14500000,
  },
  {
    date: '2022-05',
    sales: 110,
    transactions: 14550000,
  },
  {
    date: '2022-06',
    sales: 111,
    transactions: 14600000,
  },
  {
    date: '2022-07',
    sales: 112,
    transactions: 14650000,
  },
  {
    date: '2022-08',
    sales: 113,
    transactions: 14700000,
  },
  {
    date: '2022-09',
    sales: 114,
    transactions: 14750000,
  },
  {
    date: '2022-10',
    sales: 115,
    transactions: 14800000,
  },
  {
    date: '2022-11',
    sales: 116,
    transactions: 14850000,
  },
  {
    date: '2022-12',
    sales: 117,
    transactions: 14900000,
  },
])

const salesByCategoryAtom = atom([
  {
    category: 'Offline',
    sales: 110,
  },
  {
    category: 'AloDoc',
    sales: 106,
  },
  {
    category: 'HaloDoc',
    sales: 108,
  },
  {
    category: 'SehatQ',
    sales: 109,
  },
  {
    category: 'GrabHealth',
    sales: 110,
  },
  {
    category: 'Tokopedia',
    sales: 111,
  },
  {
    category: 'Shopee',
    sales: 112,
  },
])

export const useStatistics = () => {
  const [sales] = useAtom(salesAtom)
  const [salesByCategory] = useAtom(salesByCategoryAtom)

  return {
    sales,
    salesByCategory,
  }
}
