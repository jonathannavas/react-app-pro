import { Form, Formik } from 'formik'
import '../styles/styles.css'

import * as Yup from 'yup'

import { CheckField, InputField, SelectField } from '../components'

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log({ values })
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required('Campo requerido')
            .max(15, 'Debe tener al menos 15 caracteres')
            .min(5, 'Debe tener al menos 5 caracteres'),
          lastName: Yup.string()
            .required('Campo requerido')
            .max(15, 'Debe tener al menos 15 caracteres')
            .min(5, 'Debe tener al menos 5 caracteres'),
          email: Yup.string()
            .email('Ingresa un email válido')
            .required('Campo requerido'),
          jobType: Yup.string()
            .required('Campo requerido')
            .notOneOf(['arq'], 'Esta opcion no es permitida'),
          terms: Yup.boolean().isTrue(
            'Debe aceptar los terminos y condiciones'
          ),
        })}
      >
        {({ isValid }) => (
          <Form noValidate>
            <InputField
              label="Nombre"
              name="firstName"
              placeholder="Ingrese el nombre"
            />
            <InputField
              label="Apellido"
              name="lastName"
              placeholder="Ingrese el apellido"
            />
            <InputField
              label="Correo electronico"
              name="email"
              type="email"
              placeholder="Ingrese el correo electronico"
            />

            <SelectField name="jobType" as="select" label="Job Type">
              <option value="">Seleccione una opcion</option>
              <option value="ing">Ingeniero</option>
              <option value="doc">Doctor</option>
              <option value="arq">Arquitecto</option>
            </SelectField>

            <CheckField label="Terminos y condiciones de uso" name="terms" />

            <button type="submit" disabled={!isValid}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
