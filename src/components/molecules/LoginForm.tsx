import { FC } from 'react'
import { IoLockClosedOutline, IoMailOutline } from 'react-icons/io5'
import Link from 'next/link'

export const LoginForm: FC = () => {
  return (
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
  )
}
