import { FC } from 'react'
import { useRegister } from '../../hooks/useRegister'

export const Stepper: FC = () => {
  const { step } = useRegister()
  return <div className='flex-grow flex justify-center items-center'>stepper {step}</div>
}
