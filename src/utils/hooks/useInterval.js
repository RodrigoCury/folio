import { useEffect, useRef } from 'react'

function useInterval(callback = () => {}, delay) {
  const savedCallback = useRef(callback)

  useEffect(() => {
    if (!delay && delay !== 0) {
      return
    }

    const id = setInterval(() => savedCallback.current(), delay)

    return () => clearInterval(id)
  }, [delay])
}

export default useInterval
