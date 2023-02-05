import { useCallback, useEffect } from 'react'

const useAccentColor = (color, secondaryColor = '#000000') => {
  const cb = useCallback(() => {
    const body = document.getElementsByClassName('app-root')[0]
    const colorToUse = color || getBodyColor(body)
    const links = [...document.getElementsByClassName('link-w'),...document.getElementsByClassName('link'),...document.getElementsByClassName('flag')]

    links.forEach(({style}) => {
      style.borderColor =  secondaryColor
      style.color =  secondaryColor
    })

    body.style.backgroundColor = colorToUse

  }, [color])

  useEffect(() => {
    cb()
  }, [color])

  return cb
}

export default useAccentColor

const getBodyColor = (body) =>
  '#' +
  body.style.backgroundColor
    .replace(/[rgb()]/g, '')
    .split(', ')
    .map((n) => {
      const hex = parseInt(n).toString(16)
      return hex.length < 2 ? '0' + hex : hex
    })
    .reduce((cur, nex) => cur + nex)
