import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './Tech.scss'
import { pages as technologies } from '../components/three-assets/logos'
import useAccentColor from '../utils/hooks/useAccentColors'
import Carousel from '../components/carousel/Carousel'
import { Helmet } from 'react-helmet-async'

export const Tech = () => {
  const { t } = useTranslation()

  const changeColors = useAccentColor(technologies(t)[0].bgColor)

  useEffect(() => {
    changeColors()
  })

  return (
    <>
      <Helmet>
        <title>{t('title.tech')}</title>
      </Helmet>
      <Carousel techs={technologies(t)} />
    </>
  )
}
