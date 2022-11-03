const useAccentColor = () => {
  const body = document.getElementsByClassName('app-root')[0]
  const menuWrapper = document.getElementsByClassName('menu-wrapper')[0]
  const contactbutton = document.getElementsByClassName('menu-wrapper')[0]

  return (color) => {
    const { r, g, b } = hexToRgb(color)

    const useRed = r * 0.299 + g * 0.587 + b * 0.114

    const textColor = r && g && b && useRed > 186 ? '#000000' : '#ffffff'

    const colorWithFade = color + 'DD'

    body.style.backgroundColor = color
    menuWrapper && (menuWrapper.style.backgroundColor = colorWithFade)
    contactbutton &&
      [...contactbutton.children].forEach((element) => {
        element && (element.style.color = textColor)
      })
  }
}
const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : {}
}

export default useAccentColor
