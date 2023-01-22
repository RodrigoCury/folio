import { CubicBezierLine } from '@react-three/drei'
import LogoLoader from './LogoLoader'

// Languages

export const KtLogo = (props) => {
  return <LogoLoader uri='/3d-models/Kt-logo.glb' {...props} />
}
export const JavaLogo = (props) => {
  return <LogoLoader uri='/3d-models/Java.glb' {...props} />
}
export const RxLogo = (props) => {
  return <LogoLoader uri='/3d-models/rx.glb' {...props} />
}
export const PythonLogo = (props) => {
  return <LogoLoader uri='/3d-models/pyLogo.glb' {...props} />
}
export const NodeLogo = (props) => {
  return <LogoLoader uri='/3d-models/nodejs.glb' {...props} />
}

// Backed End Stack

export const SpringLogo = (props) => {
  return <LogoLoader uri='/3d-models/spring.glb' {...props} />
}
export const SpringRxLogo = (props) => {
  return <LogoLoader uri='/3d-models/spring-reactive.glb' {...props} />
}
export const DockerLogo = (props) => {
  return <LogoLoader uri='/3d-models/docker.glb' {...props} />
}
export const GitLogo = (props) => {
  return <LogoLoader uri='/3d-models/git.glb' {...props} />
}
export const KafkaLogo = (props) => {
  return <LogoLoader uri='/3d-models/kafka.glb' {...props} />
}
export const PostgreLogo = (props) => {
  return <LogoLoader uri='/3d-models/psql.glb' {...props} />
}
export const MongoLogo = (props) => {
  return <LogoLoader uri='/3d-models/mongo.glb' {...props} />
}
export const RedisLogo = (props) => {
  return <LogoLoader uri='/3d-models/redis.glb' {...props} />
}
export const LinuxLogo = (props) => {
  return <LogoLoader uri='/3d-models/linux.glb' {...props} />
}

// Front End Stack

export const ReactLogo = (props) => {
  return <LogoLoader uri='/3d-models/react.glb' {...props} />
}
export const ThreeLogo = (props) => {
  return <LogoLoader uri='/3d-models/three.glb' {...props} />
}
export const HTMLLogo = (props) => {
  return <LogoLoader uri='/3d-models/html.glb' {...props} />
}
export const CSSLogo = (props) => {
  return <LogoLoader uri='/3d-models/css.glb' {...props} />
}
export const JSLogo = (props) => {
  return <LogoLoader uri='/3d-models/jsLogo.glb' {...props} />
}

// AWS

export const AWSLogo = (props) => {
  return <LogoLoader uri='/3d-models/aws-logo.glb' {...props} />
}
export const LocalstackLogo = (props) => {
  return <LogoLoader uri='/3d-models/localstack.glb' {...props} />
}
export const AWSServicesLogo = (props) => {
  return <LogoLoader uri='/3d-models/aws-services.glb' {...props} />
}

// Contact Logos

export const WhatsLogo = (props) => {
  return <LogoLoader uri='/3d-models/wpp.glb' {...props} />
}
export const EmailLogo = (props) => {
  return <LogoLoader uri='/3d-models/eMailLogo.glb' {...props} />
}
export const GitHubLogo = (props) => {
  return <LogoLoader uri='/3d-models/githubLogo.glb' {...props} />
}
export const BitBucketLogo = (props) => {
  return <LogoLoader uri='/3d-models/bitb.glb' {...props} />
}
export const LinkedInLogo = (props) => {
  return <LogoLoader uri='/3d-models/lkdLogo.glb' {...props} />
}

// others

export const BlenderLogo = (props) => {
  return <LogoLoader uri='/3d-models/blender.glb' {...props} />
}

export const pages = (t) => [
  {
    logo: (
      <>
        <KtLogo position={[0, 0, 0]} />
        <CubicBezierLine
          start={[0, 0, -0.5]}
          end={[1.5, -1, -1]}
          midA={[0, -2, 0]}
          midB={[3, -2, -2]}
          color={{ r: 50, b: 127, g: 176 }}
          lineWidth={1}
          dashed={false}
          linewidth={2}
          linecap={'round'}
          linejoin={'round'}
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
          start={[0, -0.65, -0.5]}
          end={[1.5, -1, -1]}
          midA={[0, -2, 0]}
          midB={[1, -1, -2]}
          color={{ r: 50, b: 127, g: 176 }}
          lineWidth={1}
          dashed={false}
          linewidth={2}
          linecap={'round'}
          linejoin={'round'}
        />
        <RxLogo position={[1.5, -1, -1]} scale={[0.25, 0.25, 0.25]} />
      </>
    ),
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
          start={[0, -0.6, -0.5]}
          end={[-1.1, -1.2, -0.1]}
          midA={[0, -2, 0]}
          midB={[-1, -1, -2]}
          color={{ r: 50, b: 127, g: 176 }}
          lineWidth={1}
          dashed={false}
          linewidth={2}
          linecap={'round'}
          linejoin={'round'}
        />
        <BitBucketLogo scale={[0.25, 0.25, 0.25]} position={[-1.2, -1.2, 0]} />
        <CubicBezierLine
          start={[0, -0.6, -0.5]}
          end={[1, -1.2, -0.1]}
          midA={[0, -2, 0]}
          midB={[1, -1, -2]}
          color={{ r: 50, b: 127, g: 176 }}
          lineWidth={1}
          dashed={false}
          linewidth={2}
          linecap={'round'}
          linejoin={'round'}
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
          start={[0, 0, -2]}
          end={[0, -2.25, 0]}
          midA={[0, 0, -2]}
          midB={[0, 0, -2]}
          color={{ r: 50, b: 127, g: 176 }}
          lineWidth={1}
          dashed={false}
          linewidth={2}
          linecap={'round'}
          linejoin={'round'}
        />
        <LocalstackLogo position={[0, -2.25, 0]} scale={[0.3, 0.3, 0.3]} />
        <CubicBezierLine
          start={[0, 0, -2]}
          end={[-0.5, -1.6, -1]}
          midA={[0, -2, -1]}
          midB={[-0.5, -1, -2]}
          color={{ r: 50, b: 127, g: 176 }}
          lineWidth={1}
          dashed={false}
          linewidth={2}
          linecap={'round'}
          linejoin={'round'}
        />
        <CubicBezierLine
          start={[0, 0, -2]}
          end={[-1.2, -1.9, -1]}
          midA={[0, -2, -1]}
          midB={[-1, -0.9, -2]}
          color={{ r: 50, b: 127, g: 176 }}
          lineWidth={1}
          dashed={false}
          linewidth={2}
          linecap={'round'}
          linejoin={'round'}
        />
        <CubicBezierLine
          start={[0, 0, -2]}
          end={[0.5, -1.6, -1]}
          midA={[0, -2, -1]}
          midB={[0.5, -1, -2]}
          color={{ r: 50, b: 127, g: 176 }}
          lineWidth={1}
          dashed={false}
          linewidth={2}
          linecap={'round'}
          linejoin={'round'}
        />
        <CubicBezierLine
          start={[0, 0, -2]}
          end={[1.2, -1.9, -1]}
          midA={[0, -2, -1]}
          midB={[1, -0.9, -2]}
          color={{ r: 50, b: 127, g: 176 }}
          lineWidth={1}
          dashed={false}
          linewidth={2}
          linecap={'round'}
          linejoin={'round'}
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
          start={[0, 0, -0.5]}
          end={[-2, -1.7, 0]}
          midA={[-1, -2, -1]}
          midB={[-2, -1, -2]}
          color={{ r: 50, b: 127, g: 176 }}
          lineWidth={1}
          dashed={false}
          linewidth={2}
          linecap={'round'}
          linejoin={'round'}
        />
        <HTMLLogo scale={[0.3, 0.3, 0.3]} position={[-2, -1.7, 0]} />
        <CubicBezierLine
          start={[0, 0, -0.5]}
          end={[-1, -1.7, 0]}
          midA={[0, -2, -1]}
          midB={[-1, -1, -2]}
          color={{ r: 50, b: 127, g: 176 }}
          lineWidth={1}
          dashed={false}
          linewidth={2}
          linecap={'round'}
          linejoin={'round'}
        />
        <CSSLogo scale={[0.3, 0.3, 0.3]} position={[-1, -1.7, 0]} />
        <CubicBezierLine
          start={[0, 0, -0.5]}
          end={[1, -1.7, 0]}
          midA={[0, -2, -1]}
          midB={[1, -1, -2]}
          color={{ r: 50, b: 127, g: 176 }}
          lineWidth={1}
          dashed={false}
          linewidth={2}
          linecap={'round'}
          linejoin={'round'}
        />
        <JSLogo scale={[0.3, 0.3, 0.3]} position={[1, -1.7, 0]} />
        <CubicBezierLine
          start={[0, 0, -0.5]}
          end={[1.9, -1.7, 0]}
          midA={[1, -2, -1]}
          midB={[2, -1, -2]}
          color={{ r: 50, b: 127, g: 176 }}
          lineWidth={1}
          dashed={false}
          linewidth={2}
          linecap={'round'}
          linejoin={'round'}
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
