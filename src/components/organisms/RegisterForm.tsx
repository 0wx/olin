import { FC } from 'react'
import { useRegister } from '../../hooks/useRegister'
import { InputRegister } from '../molecules/InputRegister'
import { InputSarana } from '../molecules/InputSarana'

export const RegisterForm: FC = () => {
  const { step } = useRegister()
  return (
    <div className='flex-grow flex flex-col justify-center items-center h-[calc(100vh-40px)] pt-10 overflow-hidden'>
      <div
        className='fixed h-screen flex items-center justify-center transition-all '
        style={{ translate: step !== 1 ? '0 -100vh' : '0' }}
      >
        <InputSarana />
      </div>
      <div
        className='fixed h-screen flex items-center justify-center transition-all '
        style={{ translate: step !== 2 ? '0 100vh' : '0' }}
      >
        <InputRegister />
      </div>
    </div>
  )
}
