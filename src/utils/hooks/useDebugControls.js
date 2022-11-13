import { useControls } from 'leva'
import { useSearchParams } from 'react-router-dom'

/**
 * only shows debug leva when param debug is present
 * @param {object[]} props
 * @returns array of same props, but controllable
 */
const useDebugControls = (props) => {
  const [searchParams] = useSearchParams()

  return (
    props &&
    Array.isArray(props) &&
    props.map((prop) => (searchParams.has('debug') ? useControls(prop) : prop))
  )
}

export default useDebugControls
