import { FC } from 'react'
import { useRegister } from '../../hooks/useRegister'
import { RiRoadMapLine } from 'react-icons/ri'
import { HiOutlineClipboardCheck } from 'react-icons/hi'

export const Stepper: FC = () => {
  const { step } = useRegister()
  return (
    <div className='flex-grow flex justify-center items-center'>
      <div>
        <div className='flex items-center gap-5'>
          <div className='w-20 flex justify-center'>
            <div className='bg-primary text-white p-4 rounded-full'>
              <RiRoadMapLine size={41} />
            </div>
          </div>
          <div
            className={
              'font-semibold text-xl text-primary transition-all ' +
              (step === 1 ? 'scale-105' : '')
            }
          >
            Pendaftaran Sarana
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <div className='w-20 flex justify-center'>
            <div className='bg-gray-400 w-2 h-16'></div>
            <div
              className={
                'absolute bg-primary w-3 transition-all rounded -translate-y-1 ' +
                (step === 2 ? 'h-16' : 'delay-200 h-0')
              }
            ></div>
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <div className='w-20 flex justify-center'>
            <div
              className={
                'text-white p-4 rounded-full transition-all delay-200 -translate-y-2 ' +
                (step === 2 ? 'bg-primary scale-100' : 'bg-gray-400 scale-95')
              }
            >
              <HiOutlineClipboardCheck size={41} />
            </div>
          </div>
          <div
            className={
              'font-semibold -translate-y-2 text-xl transition-all ' +
              (step === 2 ? 'text-primary scale-105' : 'scale-100 text-gray-400')
            }
          >
            Register
          </div>
        </div>
      </div>
    </div>
  )
}
