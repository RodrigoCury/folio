const { Html } = require('@react-three/drei')
const { useRef, useState, useEffect } = require('react')
const { default: useMediaQuery } = require('utils/hooks/useMediaQuery')
const { default: TechName } = require('./TechName')

const HTMLContent = ({ isEven, title, description, color }) => {
  const ref = useRef()

  const smallerThen576 = useMediaQuery('(max-width: 575.98px)')
  const greaterThen576 = useMediaQuery('(min-width: 576px)')
  const greaterThen768 = useMediaQuery('(min-width: 768px)')
  const greaterThen992 = useMediaQuery('(min-width: 992px)')
  const greaterThen1400 = useMediaQuery('(min-width: 1400px)')

  const [[position, fontSize], setQuery] = useState(
    setTextPosition(
      isEven,
      smallerThen576,
      greaterThen576,
      greaterThen768,
      greaterThen992,
      greaterThen1400
    )
  )

  useEffect(() => {
    setQuery(
      setTextPosition(
        isEven,
        smallerThen576,
        greaterThen576,
        greaterThen768,
        greaterThen992,
        greaterThen1400
      )
    )
  }, [
    isEven,
    smallerThen576,
    greaterThen576,
    greaterThen768,
    greaterThen992,
    greaterThen1400
  ])

  return (
    <group ref={ref} position={[0, 0, 0]}>
      <TechName
        color={color}
        text={title}
        position={position}
        fontSize={fontSize}
      />
      <Html
        fullscreen
        as='div'
        className={`tech-container ${
          isEven ? 'container-left' : 'container-right'
        }`}
      >
        <p className={isEven ? 'left' : 'right'}>{description}</p>
      </Html>
    </group>
  )
}

const setTextPosition = (
  isEven,
  smallerThen576,
  greaterThen576,
  greaterThen768,
  greaterThen992,
  greaterThen1400
) => {
  let position = []
  let fontSize = 3

  if (greaterThen1400) {
    position = [isEven ? -12 : 12, 0, 0]

    fontSize = 3

    return [position, fontSize]
  } else if (greaterThen992) {
    position = [isEven ? -8 : 8, 0, 0]

    fontSize = 2

    return [position, fontSize]
  } else if (greaterThen768) {
    position = [0, 6, 0]

    fontSize = 2

    return [position, fontSize]
  } else if (greaterThen576) {
    position = [0, 6, 0]

    fontSize = 2

    return [position, fontSize]
  } else if (smallerThen576) {
    position = [0, 6, 0]

    fontSize = 1
  }

  return [position, fontSize]
}

export default HTMLContent
