import { useTexture, Billboard, Plane } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import { useRef, useMemo, createElement, forwardRef } from 'react'

const Clouds = ({ count = 20, ...props }) => {
  const clouds = new Array(count).fill(null)

  return (
    <group {...props}>
      {clouds.map((_, index) => {
        return <MovingCloud key={index} />
      })}
    </group>
  )
}

const MovingCloud = ({
  startpos = [
    Math.random() * 100 - 50,
    Math.random() * 5 - 2.5,
    Math.random() * -25
  ]
}) => {
  const ref = useRef()

  useFrame((_, delta) => {
    ref.current.position.x =
      ref.current.position.x < -50 ? 50 : ref.current.position.x - delta * 2
  })

  return <Cloud ref={ref} position={startpos} speed={0.2} opacity={1} />
}

const CLOUD_URL =
  'https://rawcdn.githack.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png'

const Cloud = forwardRef(
  (
    {
      opacity = 0.5,
      speed = 0.4,
      width = 10,
      depth = 1.5,
      segments = 20,
      texture = CLOUD_URL,
      color = '#ffffff',
      depthTest = true,
      ...props
    },
    ref
  ) => {
    const gl = useThree((state) => state.gl)
    const cloudTexture = useTexture(texture)
    const clouds = useMemo(
      () =>
        [...new Array(segments)].map((_, index) => ({
          x: width / 2 - Math.random() * width,
          y: width / 2 - Math.random() * width,
          scale:
            0.4 +
            Math.sin(((index + 1) / segments) * Math.PI) *
              ((0.2 + Math.random()) * 10),
          density: Math.max(0.2, Math.random()),
          rotation: Math.max(0.002, 0.005 * Math.random()) * speed
        })),
      [width, segments, speed]
    )
    useFrame((state) => {
      var _group$current

      return (_group$current = ref.current) == null
        ? void 0
        : _group$current.children.forEach((cloud, index) => {
            cloud.children[0].rotation.z += clouds[index].rotation
            cloud.children[0].scale.setScalar(
              clouds[index].scale +
                (((1 + Math.sin(state.clock.getElapsedTime() / 10)) / 2) *
                  index) /
                  10
            )
          })
    })
    return /*#__PURE__*/ createElement(
      'group',
      props,
      /*#__PURE__*/ createElement(
        'group',
        {
          position: [0, 0, (segments / 2) * depth],
          ref: ref
        },
        clouds.map(({ x, y, scale, density }, index) =>
          /*#__PURE__*/ createElement(
            Billboard,
            {
              key: index,
              position: [x, y, -index * depth]
            },
            /*#__PURE__*/ createElement(
              Plane,
              {
                scale: scale,
                rotation: [0, 0, 0]
              },
              /*#__PURE__*/ createElement('meshStandardMaterial', {
                'map': cloudTexture,
                'map-encoding': gl.outputEncoding,
                'transparent': true,
                'opacity': (scale / 6) * density * opacity,
                'depthTest': depthTest,
                'color': color
              })
            )
          )
        )
      )
    )
  }
)

Cloud.displayName = 'Cloud'

export default Clouds
