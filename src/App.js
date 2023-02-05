import 'App.css'
import i18n from './utils/i18n'
import { I18nextProvider } from 'react-i18next'
import { Root } from 'components/root/Root'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Root />
    </I18nextProvider>
  )
}

export default App
