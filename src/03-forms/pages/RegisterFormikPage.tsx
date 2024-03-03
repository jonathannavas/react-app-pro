import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { InputField } from '../components'
import '../styles/styles.css'

const initialState = {
  name: '',
  email: '',
  password: '',
  password2: '',
}

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        onSubmit={(values) => console.log({ values })}
        initialValues={initialState}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Campo requerido')
            .min(2, 'Minimo 2 caracteres')
            .max(15, 'Maximo 15 caracteres'),
          email: Yup.string()
            .email('Ingresa un email correcto')
            .required('Campo requerido'),
          password: Yup.string()
            .min(6, 'Minimo 6 caracteres')
            .required('Campo requerido'),
          password2: Yup.string()
            .oneOf([Yup.ref('password')], 'Las contraseñas deben ser iguales')
            .required('Campo requerido'),
        })}
      >
        {({ isValid, handleReset }) => (
          <Form noValidate>
            <InputField label="Nombre" name="name" placeholder="Nombre" />
            <InputField
              label="Email"
              name="email"
              placeholder="Correo electronico"
            />
            <InputField
              label="Contraseña"
              name="password"
              type="password"
              placeholder="Ingresa tu contraseña"
            />
            <InputField
              label="Confirmar contraseña"
              name="password2"
              type="password"
              placeholder="Ingresa tu contraseña"
            />
            <button type="submit" disabled={!isValid}>
              Create
            </button>
            <button type="button" onClick={handleReset}>
              Resetear form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
