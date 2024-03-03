import { ErrorMessage, Field, Form, Formik } from 'formik'
import '../styles/styles.css'

import * as Yup from 'yup'

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

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
            <label htmlFor="firstName">Nombre</label>
            <Field name="firstName" type="text" placeholder="Nombre" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Apellido</label>
            <Field name="lastName" type="text" placeholder="Apellido" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" placeholder="Correo electronico" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Seleccione una opcion</option>
              <option value="ing">Ingeniero</option>
              <option value="doc">Doctor</option>
              <option value="arq">Arquitecto</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field name="terms" type="checkbox" />
              Terminos y condiciones de uso
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit" disabled={!isValid}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
