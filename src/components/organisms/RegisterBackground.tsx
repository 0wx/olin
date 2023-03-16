import { FC } from 'react'

export const RegisterBackground: FC = () => {
  return (
    <div className='fixed -z-10 top-0 right-0 h-screen w-full'>
      <div className='translate-x-[25vw] -translate-y-[55vh] rotate-6'>
        <svg
          id='sw-js-blob-svg'
          viewBox='0 0 100 100'
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
        >
          <defs>
            <linearGradient id='sw-gradient' x1='0' x2='1' y1='1' y2='0'>
              <stop
                id='stop1'
                stop-color='rgba(55, 248, 212.042, 1)'
                offset='0%'
              ></stop>
              <stop
                id='stop2'
                stop-color='rgba(31, 187.655, 251, 1)'
                offset='100%'
              ></stop>
            </linearGradient>
          </defs>
          <path
            fill='url(#sw-gradient)'
            d='M20.6,-38.1C24.9,-33.2,25.5,-24.1,27.6,-17.1C29.8,-10,33.5,-5,31.6,-1.1C29.6,2.8,22,5.5,17,7.6C12,9.7,9.6,11.1,7.2,15.3C4.8,19.6,2.4,26.7,-1.9,30C-6.2,33.2,-12.4,32.7,-17.8,30.2C-23.2,27.7,-27.8,23.2,-28.3,17.8C-28.8,12.5,-25.1,6.2,-22.9,1.2C-20.8,-3.8,-20.2,-7.6,-18.3,-10.4C-16.4,-13.3,-13.1,-15.2,-9.9,-20.8C-6.6,-26.4,-3.3,-35.7,2.4,-39.9C8.1,-44,16.2,-43.1,20.6,-38.1Z'
            width='100%'
            height='100%'
            transform='translate(50 50)'
            stroke-width='0'
            stroke='url(#sw-gradient)'
          ></path>
        </svg>
      </div>
    </div>
  )
}
