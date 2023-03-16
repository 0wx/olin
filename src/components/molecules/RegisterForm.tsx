import { FC } from 'react'
import { useRegister } from '../../hooks/useRegister'

export const RegisterForm: FC = () => {
  const { nextStep, prevStep, step } = useRegister()
  return (
    <div className='flex-grow flex flex-col justify-center items-center h-screen overflow-hidden'>
      <div
        className='fixed h-screen flex items-center justify-center transition-all '
        style={{ translate: step !== 1 ? '0 -100vh' : '0' }}
      >
        <div className='bg-base-100 w-36 aspect-video'>
          Page1
          <button onClick={nextStep} className='btn btn-primary btn-sm'>
            Next
          </button>
        </div>
      </div>
      <div
        className='fixed h-screen flex items-center justify-center transition-all '
        style={{ translate: step !== 2 ? '0 100vh' : '0' }}
      >
        <div className='bg-base-100 w-36 aspect-video'>
          Page2
          <button onClick={prevStep} className='btn btn-primary btn-sm'>
            Prev
          </button>
        </div>
      </div>
    </div>
  )
}
