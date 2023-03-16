import Link from 'next/link'
import { FC } from 'react'
import { useRegister } from '../../hooks/useRegister'

export const InputRegister: FC = () => {
  const { prevStep } = useRegister()
  return (
    <div className='p-10 bg-base-100 shadow rounded-lg w-[30rem]'>
      <div className='font-bold text-xl mb-5'>Register Akun Olin</div>
      <input
        type='text'
        placeholder='Email *'
        className='input input-bordered w-full mb-4 shadow'
      />
      <input
        type='text'
        placeholder='Kata Sandi *'
        className='input input-bordered w-full mb-4 shadow'
      />
      <input
        type='text'
        placeholder='Konfirmasi Kata Sandi *'
        className='input input-bordered w-full mb-4 shadow'
      />

      <div className='flex items-center gap-2'>
        <input type='checkbox' className='checkbox' />
        <span className='ml-2'>
          Dengan membuat akun, Anda menyutujui{' '}
          <a href='#' className='text-secondary'>
            Ketentuan Penggunaan dan Pemberitahuan Privasi
          </a>{' '}
          Aplikasi Olin
        </span>
      </div>
      <div className='flex gap-10 mt-10'>
        <button className='btn btn-outline flex-grow' onClick={prevStep}>
          Kembali
        </button>
        <Link href='/login' className='flex-grow'>
          <button className='btn btn-secondary w-full text-white'>
            Daftar
          </button>
        </Link>
      </div>
    </div>
  )
}
