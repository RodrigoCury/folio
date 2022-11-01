import { CubicBezierLine, Html, OrbitControls, Text } from '@react-three/drei'
import { Canvas, extend } from '@react-three/fiber'
import { Suspense, useEffect, useRef } from 'react'
import './Home.scss'
import { useInView } from 'react-intersection-observer'
import {
  AWSLogo,
  AWSServicesLogo,
  BitBucketLogo,
  CSSLogo,
  DockerLogo,
  GitHubLogo,
  GitLogo,
  HTMLLogo,
  JavaLogo,
  JSLogo,
  KafkaLogo,
  KtLogo,
  LocalstackLogo,
  MongoLogo,
  NodeLogo,
  PostgreLogo,
  PythonLogo,
  ReactLogo,
  RedisLogo,
  RxLogo,
  SpringLogo,
  SpringRxLogo,
  ThreeLogo
} from 'components/three-assets/logos'
import Logo, { Lights } from 'components/three-assets/Logo'
import { useTranslation } from 'react-i18next'
import { a, useSprings } from '@react-spring/three'
import './Tech.scss'

const pages = (t) => [
  {
    logo: (
      <>
        <KtLogo position={[0, 0, 0]} />
        <CubicBezierLine
          start={[0, 0, -0.5]} // Starting point
          end={[1.5, -1, -1]} // Ending point
          midA={[0, -2, 0]} // First control point
          midB={[3, -2, -2]} // Second control point
          color={{ r: 50, b: 127, g: 176 }} // Default
          lineWidth={1} // In pixels (default)
          dashed={false} // Default
          linewidth={2}
          linecap={'round'} //ignored by WebGLRenderer
          linejoin={'round'} // All THREE.LineMaterial props are valid
        />
        <RxLogo position={[1.5, -1, -1]} scale={[0.25, 0.25, 0.25]} />
      </>
    ),
    title: t('languages.kotlin'),
    level: 5,
    time: 1,
    description: t('languages.kotlin.description'),
    bgColor: '#5344A5'
  },
  {
    logo: (
      <>
        <JavaLogo position={[0, 0, 0]} />
        <CubicBezierLine
          start={[0, -0.65, -0.5]} // Starting point
          end={[1.5, -1, -1]} // Ending point
          midA={[0, -2, 0]} // First control point
          midB={[1, -1, -2]} // Second control point
          color={{ r: 50, b: 127, g: 176 }} // Default
          lineWidth={1} // In pixels (default)
          dashed={false} // Default
          linewidth={2}
          linecap={'round'} //ignored by WebGLRenderer
          linejoin={'round'} // All THREE.LineMaterial props are valid
        />
        <RxLogo position={[1.5, -1, -1]} scale={[0.25, 0.25, 0.25]} />
      </>
    ),
    children: 'Texto 2',
    title: t('languages.java'),
    level: 5,
    time: 2,
    description: t('languages.java.description'),
    bgColor: '#DC7319'
  },
  {
    logo: <NodeLogo position={[0, 0, 0]} scale={[2.25, 2.25, 2.25]} />,
    title: t('languages.nodejs'),
    level: 4,
    time: 2,
    description: t('languages.nodejs.description'),
    bgColor: '#10781f'
  },
  {
    logo: <PythonLogo position={[0, 0, 0]} />,
    title: t('languages.python'),
    level: 3,
    time: 2,
    description: t('technology.python.description'),
    bgColor: '#4590CE'
  },
  {
    logo: (
      <>
        <SpringLogo position={[0, 0, 0]} />
        <SpringRxLogo position={[0, 0, -1]} scale={[0.5, 0.5, 0.5]} />
      </>
    ),
    title: t('technology.spring'),
    level: 5,
    time: 2,
    description: t('technology.spring.description'),
    bgColor: '#10781f'
  },
  {
    logo: <DockerLogo position={[0, 0, 0]} />,
    title: t('technology.docker'),
    level: 3,
    time: 2,
    description: t('technology.docker.description'),
    bgColor: '#4590EE'
  },
  {
    logo: (
      <>
        <GitLogo position={[0, 0, 0]} />
        <CubicBezierLine
          start={[0, -0.6, -0.5]} // Starting point
          end={[-1.1, -1.2, -0.1]} // Ending point
          midA={[0, -2, 0]} // First control point
          midB={[-1, -1, -2]} // Second control point
          color={{ r: 50, b: 127, g: 176 }} // Default
          lineWidth={1} // In pixels (default)
          dashed={false} // Default
          linewidth={2}
          linecap={'round'} //ignored by WebGLRenderer
          linejoin={'round'} // All THREE.LineMaterial props are valid
        />
        <BitBucketLogo scale={[0.25, 0.25, 0.25]} position={[-1.2, -1.2, 0]} />
        <CubicBezierLine
          start={[0, -0.6, -0.5]} // Starting point
          end={[1, -1.2, -0.1]} // Ending point
          midA={[0, -2, 0]} // First control point
          midB={[1, -1, -2]} // Second control point
          color={{ r: 50, b: 127, g: 176 }} // Default
          lineWidth={1} // In pixels (default)
          dashed={false} // Default
          linewidth={2}
          linecap={'round'} //ignored by WebGLRenderer
          linejoin={'round'} // All THREE.LineMaterial props are valid
        />
        <GitHubLogo scale={[0.25, 0.25, 0.25]} position={[1.2, -1.2, 0]} />
      </>
    ),
    title: t('technology.git'),
    level: 3,
    time: 2,
    description: t('technology.git.description'),
    bgColor: '#DC2E26'
  },
  {
    logo: <KafkaLogo position={[0, 0, 0]} />,
    title: t('technology.kafka'),
    level: 3,
    time: 2,
    description: t('technology.kafka.description'),
    bgColor: '#3B3939'
  },
  {
    logo: <PostgreLogo position={[0, 0, 0]} />,
    title: t('technology.psql'),
    level: 4,
    time: 2,
    description: t('technology.psql.description'),
    bgColor: '#305C8E'
  },
  {
    logo: <MongoLogo position={[0, 0, 0]} />,
    title: t('technology.mongo'),
    level: 3,
    time: 2,
    description: t('technology.mongo.description'),
    bgColor: '#5C993A'
  },
  {
    logo: <RedisLogo position={[0, 0, 0]} />,
    title: t('technology.redis'),
    level: 2,
    time: 2,
    description: t('technology.redis.description'),
    bgColor: '#DC2E26'
  },
  {
    logo: (
      <>
        <AWSLogo scale={[1.5, 1.5, 1.5]} position={[0, 0, -1]} />
        <CubicBezierLine
          start={[0, 0, -2]} // Starting point
          end={[0, -2.25, 0]} // Ending point
          midA={[0, 0, -2]} // Starting point
          midB={[0, 0, -2]} // Starting point
          color={{ r: 50, b: 127, g: 176 }} // Default
          lineWidth={1} // In pixels (default)
          dashed={false} // Default
          linewidth={2}
          linecap={'round'} //ignored by WebGLRenderer
          linejoin={'round'} // All THREE.LineMaterial props are valid
        />
        <LocalstackLogo position={[0, -2.25, 0]} scale={[0.3, 0.3, 0.3]} />
        <CubicBezierLine
          start={[0, 0, -2]} // Starting point
          end={[-0.5, -1.6, -1]} // Ending point
          midA={[0, -2, -1]} // First control point
          midB={[-0.5, -1, -2]} // Second control point
          color={{ r: 50, b: 127, g: 176 }} // Default
          lineWidth={1} // In pixels (default)
          dashed={false} // Default
          linewidth={2}
          linecap={'round'} //ignored by WebGLRenderer
          linejoin={'round'} // All THREE.LineMaterial props are valid
        />
        <CubicBezierLine
          start={[0, 0, -2]} // Starting point
          end={[-1.2, -1.9, -1]} // Ending point
          midA={[0, -2, -1]} // First control point
          midB={[-1, -0.9, -2]}
          color={{ r: 50, b: 127, g: 176 }} // Default
          lineWidth={1} // In pixels (default)
          dashed={false} // Default
          linewidth={2}
          linecap={'round'} //ignored by WebGLRenderer
          linejoin={'round'} // All THREE.LineMaterial props are valid
        />
        <CubicBezierLine
          start={[0, 0, -2]} // Starting point
          end={[0.5, -1.6, -1]} // Ending point
          midA={[0, -2, -1]} // First control point
          midB={[0.5, -1, -2]} // Second control point
          color={{ r: 50, b: 127, g: 176 }} // Default
          lineWidth={1} // In pixels (default)
          dashed={false} // Default
          linewidth={2}
          linecap={'round'} //ignored by WebGLRenderer
          linejoin={'round'} // All THREE.LineMaterial props are valid
        />
        <CubicBezierLine
          start={[0, 0, -2]} // Starting point
          end={[1.2, -1.9, -1]} // Ending point
          midA={[0, -2, -1]} // First control point
          midB={[1, -0.9, -2]}
          color={{ r: 50, b: 127, g: 176 }} // Default
          lineWidth={1} // In pixels (default)
          dashed={false} // Default
          linewidth={2}
          linecap={'round'} //ignored by WebGLRenderer
          linejoin={'round'} // All THREE.LineMaterial props are valid
        />
        <AWSServicesLogo position={[0, -1.9, 0]} scale={[0.3, 0.3, 0.3]} />
      </>
    ),
    title: t('technology.aws'),
    level: 2,
    time: 2,
    description: t('technology.aws.description'),
    bgColor: '#EE8910'
  },
  {
    logo: (
      <>
        <ReactLogo />
        <CubicBezierLine
          start={[0, 0, -0.5]} // Starting point
          end={[-2, -1.7, 0]} // Ending point
          midA={[-1, -2, -1]} // First control point
          midB={[-2, -1, -2]} // Second control point
          color={{ r: 50, b: 127, g: 176 }} // Default
          lineWidth={1} // In pixels (default)
          dashed={false} // Default
          linewidth={2}
          linecap={'round'} //ignored by WebGLRenderer
          linejoin={'round'} // All THREE.LineMaterial props are valid
        />
        <HTMLLogo scale={[0.3, 0.3, 0.3]} position={[-2, -1.7, 0]} />
        <CubicBezierLine
          start={[0, 0, -0.5]} // Starting point
          end={[-1, -1.7, 0]} // Ending point
          midA={[0, -2, -1]} // First control point
          midB={[-1, -1, -2]} // Second control point
          color={{ r: 50, b: 127, g: 176 }} // Default
          lineWidth={1} // In pixels (default)
          dashed={false} // Default
          linewidth={2}
          linecap={'round'} //ignored by WebGLRenderer
          linejoin={'round'} // All THREE.LineMaterial props are valid
        />
        <CSSLogo scale={[0.3, 0.3, 0.3]} position={[-1, -1.7, 0]} />
        <CubicBezierLine
          start={[0, 0, -0.5]} // Starting point
          end={[1, -1.7, 0]} // Ending point
          midA={[0, -2, -1]} // First control point
          midB={[1, -1, -2]} // Second control point
          color={{ r: 50, b: 127, g: 176 }} // Default
          lineWidth={1} // In pixels (default)
          dashed={false} // Default
          linewidth={2}
          linecap={'round'} //ignored by WebGLRenderer
          linejoin={'round'} // All THREE.LineMaterial props are valid
        />
        <JSLogo scale={[0.3, 0.3, 0.3]} position={[1, -1.7, 0]} />
        <CubicBezierLine
          start={[0, 0, -0.5]} // Starting point
          end={[1.9, -1.7, 0]} // Ending point
          midA={[1, -2, -1]} // First control point
          midB={[2, -1, -2]} // Second control point
          color={{ r: 50, b: 127, g: 176 }} // Default
          lineWidth={1} // In pixels (default)
          dashed={false} // Default
          linewidth={2}
          linecap={'round'} //ignored by WebGLRenderer
          linejoin={'round'} // All THREE.LineMaterial props are valid
        />
        <ThreeLogo scale={[0.3, 0.3, 0.3]} position={[2, -1.7, 0]} />
      </>
    ),
    title: t('technology.front'),
    level: 2,
    time: 2,
    description: t('technology.front.description'),
    bgColor: '#33aabf'
  }

  // {
  //   logo: <PythonLogo position={[-3, 0, 0]} />,
  //   children: 'Texto 3',
  //   bgColor: '#4590CE'
  // },
]

export const Tech = () => {
  const { t } = useTranslation()
  return (
    <>
      {pages(t).map((page, idx) => (
        <TechStack key={idx} isEven={idx % 2 === 0} {...page} />
      ))}
    </>
  )
}

const TechStack = ({
  cameraPosition = [0, 0, 20],
  isEven,
  logo,
  title,
  level = 5,
  time = 1,
  description,
  bgColor = '#000'
}) => {
  const [refItem, inView] = useInView({
    threshold: 0.5
  })
  useEffect(() => {
    inView &&
      (document.getElementsByClassName('app-root')[0].style.backgroundColor =
        bgColor)
  }, [inView])

  return (
    <div ref={refItem} style={{ height: '100vh' }}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: cameraPosition, fov: 60 }}
      >
        <Suspense fallback={null}>
          {inView && (
            <>
              <OrbitControls enableZoom={false} />
              <Lights />
              <Logo logo={logo} />
              <HowGoodAmIWithIt level={level} time={time} bgColor={bgColor} />
            </>
          )}
          <HTMLContent
            isEven={isEven}
            title={title}
            description={description}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
const HTMLContent = ({ isEven, title, description }) => {
  const ref = useRef()

  return (
    <group ref={ref} position={[0, 0, 0]}>
      <Text
        color={'white'}
        anchorX='center'
        anchorY='middle'
        fontSize={3}
        castShadow
        position={[isEven ? -15 : 15, 0, 0]}
      >
        {title}
      </Text>
      <Html
        castShadow
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

extend(Text)

const HowGoodAmIWithIt = ({ level, bgColor }) => {
  const newLevel = level + 1

  const howGood = Array.apply(null, Array(newLevel)).map(() => {})

  const base = (-newLevel * 1.2) / 2

  let hidden = false

  const [animation, setopc] = useSprings(newLevel, (n) => ({
    to: {
      opacity: 1,
      position: [(base + n + 1) * 1.2, -9, 0]
    },
    from: {
      opacity: 0,
      position: [0, -(n * 2 + 20), 0]
    },
    config: { mass: 100, tension: 200, friction: 200 }
  }))

  useEffect(() => {
    const intervalId = setInterval(() => {
      hidden = !hidden
      setopc((n) => {
        const newState = {
          opacity: hidden ? 0 : 1,
          position: [base + n * 1.2, -9, 0],
          delay: n * 80
        }
        return newState
      })
    }, level * 400)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <group>
      {howGood.map((_, idx) => {
        return !idx ? (
          <a.group key={idx} {...animation[0]}>
            <Text
              color={'white'}
              anchorX='center'
              anchorY='middle'
              fontSize={0.6}
            >
              XP
            </Text>
          </a.group>
        ) : (
          <a.mesh key={idx} {...animation[idx]}>
            <boxGeometry args={[1, 0.5, 0.2]} />
            <a.meshStandardMaterial
              opacity={animation[idx].opacity}
              transparent={true}
              color={bgColor}
              metalness={0.5}
              roughness={0.1}
            />
          </a.mesh>
        )
      })}
    </group>
  )
}
