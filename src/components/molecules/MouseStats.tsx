import { FC, useCallback } from 'react'
import { IoTrendingDown, IoTrendingUp } from 'react-icons/io5'
import { useMouseHover } from '../../hooks/useMouseHover'
import { useStatistics } from '../../hooks/useStatictics'

export const MouseStats: FC = () => {
  const { id, hovering, position } = useMouseHover()
  const { sales } = useStatistics()

  const growth = useCallback(() => {
    const current = sales.find((sale) => sale.id === id)
    const previous = sales.find((sale) => sale.id === id - 1)
    if (current && previous) {
      const growth = (
        ((current.sales - previous.sales) / previous.sales) *
        100
      ).toFixed(1)
      return growth
    }
    return 0
  }, [id, sales])

  return (
    <>
      {hovering && (
        <div
          className='fixed transition-all z-10 flex gap-2 bg-black rounded px-1 text-white justify-center items-center font-bold'
          style={{
            left: position.x + 20,
            top: position.y - 20,
            opacity: hovering ? 1 : 0,
          }}
        >
          {growth() > 0 ? (
            <IoTrendingUp size={20} color='green' />
          ) : (
            <IoTrendingDown size={20} color='red' />
          )}
          <p>{growth()}%</p>
        </div>
      )}
    </>
  )
}
