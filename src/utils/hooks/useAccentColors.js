import BurguerMenu from 'components/icons/BurguerMenu'
import { useCallback, useEffect } from 'react'

const useAccentColor = (color) => {
  const cb = useCallback(() => {
    const body = document.getElementsByClassName('app-root')[0]
    const colorToUse = color || getBodyColor(body)

    const mobileMenuWrapper = document.getElementsByClassName('menu-wrapper')[0]
    const burguerMenu = document.getElementById('nav-icon3')
    const a = [...document.getElementsByTagName('a')]

    const textColor = useWhiteOrBlackText(colorToUse)

    body.style.backgroundColor = colorToUse

    a.forEach((link) => {
      if (!link.parentElement.classList.contains('btn')) {
        link.style.color = textColor
      }
    })

    if (mobileMenuWrapper) {
      mobileMenuWrapper.style.backgroundColor = colorToUse + 'DD'
    }

    if (burguerMenu) {
      [...burguerMenu.childNodes].forEach(el => {
        el.style.background = textColor
      })
    }

  }, [color])

  useEffect(() => {
    cb()
  }, [color])

  return cb
}

const useWhiteOrBlackText = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  const { r, g, b } = result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : {}

  const useRed = r * 0.299 + g * 0.587 + b * 0.114

  return r && g && b && useRed > 186 ? '#000000' : '#ffffff'
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
