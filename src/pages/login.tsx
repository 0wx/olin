import Link from 'next/link'
import {
  IoHelpCircleOutline,
  IoHelpOutline,
  IoKeyOutline,
  IoLockClosedOutline,
  IoMailOutline,
} from 'react-icons/io5'
import { LoginBackground } from '../components/organisms/LoginBackground'

export default function Login() {
  return (
    <div className='min-h-screen border flex flex-col'>
      <div className='p-5 flex justify-between'>
        <img src='/olin.png' alt='Olin Logo' width={65} className='' />
        <div className='flex gap-2 items-center font-bold'>
          <IoHelpCircleOutline size={30} />
          Pusat Bantuan
        </div>
      </div>
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
          <img
            src='/page.png'
            alt='doc'
            className='max-w-[45vw] max-h-[40vh]'
          />
        </div>
      </div>
      <div className='w-full flex flex-col items-center py-5'>
        <div className='font-semibold text-xl'>
          Silahkan masuk ke dalam akun anda dan kelola apotek Anda.
        </div>
        <div className='w-full max-w-xs flex flex-col gap-2 mt-4'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-bold'>Email</span>
            </label>
            <label className='input-group'>
              <div className='bg-base-100 flex items-center pl-3'>
                <IoMailOutline size={20} />
              </div>
              <input
                type='text'
                placeholder='name@email.com'
                className='input focus:outline-none w-full pl-3'
              />
            </label>
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-bold'>Password</span>
            </label>
            <label className='input-group'>
              <div className='bg-base-100 flex items-center pl-3'>
                <IoLockClosedOutline size={20} />
              </div>
              <input
                type='password'
                placeholder='******'
                className='input focus:outline-none w-full pl-3'
              />
            </label>
          </div>

          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <input type='checkbox' className='checkbox' id='rememberMe' />
              <label className='font-semibold label-text' htmlFor='rememberMe'>
                Ingat saya
              </label>
            </div>
            <div className='text-red-500'>Lupa Password?</div>
          </div>
          <Link href='/'>
            <button className='btn btn-primary w-full'>Masuk</button>
          </Link>
          <div className='flex justify-center gap-2'>
            Belum Registrasi? Silahkan klik{' '}
            <Link href='/register'>
              <span className='text-red-500'>Daftar</span>
            </Link>
          </div>
        </div>
      </div>
      <LoginBackground />
    </div>
  )
}
