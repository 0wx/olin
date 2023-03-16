import { FC } from 'react'

export const LoginHeader: FC = () => {
  return (
    <div className='w-full h-[calc(50vh-60px)] flex justify-around items-center'>
      <div>
        <div className='flex justify-center items-center h-full max-w-sm'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-semibold'>
              Selamat Datang di Solusi Perangkat Lunak Farmasi
            </h1>
            <div className='text-2xl'>Sistem Manajemen Apotek Online</div>
          </div>
        </div>
      </div>
      <div className='border-b-2 border-b-gray-400'>
        <img src='/page.png' alt='doc' className='max-w-[45vw] max-h-[40vh]' />
      </div>
    </div>
  )
}
