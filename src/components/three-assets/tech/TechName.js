const { shaderMaterial, Text } = require('@react-three/drei')
const { extend, useFrame } = require('@react-three/fiber')
import glsl from 'babel-plugin-glsl/macro'
import { useRef } from 'react'
import { AdditiveBlending, Color } from 'three'

const TechName = ({ text, position, fontSize, color }) => {
  const portalMaterial = useRef()
  useFrame((_, delta) => (portalMaterial.current.time += delta))
  return (
    <Text
      color={'white'}
      anchorX='center'
      anchorY='middle'
      fontSize={fontSize}
      castShadow
      position={position}
      font='/fonts/Cousine-Bold.ttf'
      textAlign='center'
    >
      <portalMaterial
        ref={portalMaterial}
        blending={AdditiveBlending}
        colorStart={'white'}
        colorEnd={shadeColor(color, 30)}
      />
      {text.split(' ').join('\n')}
    </Text>
  )
}

function shadeColor(color, percent) {
  var R = parseInt(color.substring(1, 3), 16)
  var G = parseInt(color.substring(3, 5), 16)
  var B = parseInt(color.substring(5, 7), 16)

  R = parseInt((R * (100 + percent)) / 100)
  G = parseInt((G * (100 + percent)) / 100)
  B = parseInt((B * (100 + percent)) / 100)

  R = R < 255 ? R : 255
  G = G < 255 ? G : 255
  B = B < 255 ? B : 255

  var RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16)
  var GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16)
  var BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16)

  return '#' + RR + GG + BB
}

extend({
  // shaderMaterial creates a THREE.ShaderMaterial, and auto-creates uniform setter/getters
  // extend makes it available in JSX, in this case <portalMaterial />
  PortalMaterial: shaderMaterial(
    {
      time: 0,
      colorStart: new Color('#505050'),
      colorEnd: new Color('black')
    },
    glsl`
        varying vec2 vUv;
        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPosition = projectionMatrix * viewPosition;
          gl_Position = projectionPosition;
          vUv = uv;
        }`,
    glsl`
        #pragma glslify: cnoise3 = require(glsl-noise/classic/3d.glsl)
        uniform float time;
        uniform vec3 colorStart;
        uniform vec3 colorEnd;
        varying vec2 vUv;
        uniform vec2 resolution;

        void main() {
          float elevation = sin(vUv.x + time * 0.5)
          * sin(vUv.y + time * 0.5);

          float mixStrength =elevation ;
          vec3 color = mix(colorStart, colorEnd, mixStrength);

          gl_FragColor = vec4(color,1);
          #include <tonemapping_fragment>
          #include <encodings_fragment>
        }`
  )
})

export default TechName
