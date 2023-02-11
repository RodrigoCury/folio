import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { Formik, Field, Form } from 'formik'
import './ContactMeForm.scss'
import { GitHub, LinkedIn } from '../icons/Contacts'
import { useCycle } from 'framer-motion'
import { motion } from 'framer-motion'

const ContactMeForm = ({ sentCallback = () => {} }) => {
  const { t } = useTranslation()

  const [sent, cycle] = useCycle(false, true)

  const submit = async (values, props) => {
    try {
      await axios.post('https://api.web3forms.com/submit', {
        ...values,
        access_key: '98878280-dcde-4264-819b-e3ddec86c334'
      })
      cycle()
      sentCallback()
      setTimeout(() => cycle(), 1000)
      props.resetForm(initialValue)
    } catch {
      props.setFieldError(
        'request',
        'Erro ao enviar mensagem, tente novamente mais tarde'
      )
    } finally {
      props.setSubmitting(false)
    }
  }

  return (
    <div className='container'>
      <div className='wrapper'>
        <h1>{t('contate-me')}</h1>

        <Formik
          initialValues={initialValue}
          validate={validation}
          onSubmit={submit}
        >
          {({ errors, handleChange, handleBlur, isSubmitting }) => (
            <Form className='form'>
              <Field
                type='text'
                id='name'
                name='name'
                className={`${sent && 'sent'} ${errors.name && 'error'}`}
                placeholder='Nome'
                required=''
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Field
                type='email'
                id='email'
                name='email'
                placeholder='Email'
                className={`${sent && 'sent'} ${errors.email && 'error'}`}
                required=''
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Field
                as='textarea'
                className={`message ${sent && 'sent'} ${
                  errors.message && 'error'
                }`}
                onBlur={handleBlur}
                onChange={handleChange}
                id='message'
                name='message'
                placeholder='Mensagem'
                required=''
                rows={5}
              ></Field>
              <motion.button
                className='btn'
                whileHover={{
                  borderRadius: anyError(errors) ? '10px' : '25px'
                }}
                transition={{ duration: 0.15, ease: 'circInOut' }}
                type='submit'
                disabled={anyError(errors) || isSubmitting}
              >
                Enviar
              </motion.button>
              {errors.request && (
                <div className='error-message'>{errors.request}</div>
              )}
            </Form>
          )}
        </Formik>
        <div
          style={{
            marginTop: '12px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: '0 50px'
          }}
        >
          <LinkedIn />
          <GitHub />
        </div>
      </div>
    </div>
  )
}

const validation = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Required'
  }

  if (!values.name) {
    errors.name = 'Required'
  }

  if (!values.message) {
    errors.message = 'Required'
  }

  return errors
}

const anyError = (errors) =>
  Object.values(errors).length && !Object.keys(errors).includes('request')

const initialValue = {
  name: '',
  email: '',
  message: ''
}

export default ContactMeForm
