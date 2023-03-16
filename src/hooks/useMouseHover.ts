import { atom, useAtom } from 'jotai'

const mousePosition = atom({
  x: 0,
  y: 0,
})

const isHovering = atom(false)

const idAtom = atom(0)

export const useMouseHover = () => {
  const [position, setPosition] = useAtom(mousePosition)
  const [hovering, setHovering] = useAtom(isHovering)
  const [id, setId] = useAtom(idAtom)

  const onMouseMove = (e: MouseEvent) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    })
  }

  const onMouseEnter = () => {
    setHovering(true)
  }

  const onMouseLeave = () => {
    setHovering(false)
  }

  return {
    id,
    position,
    hovering,
    setId,
    onMouseMove,
    onMouseEnter,
    onMouseLeave,
  }
}
