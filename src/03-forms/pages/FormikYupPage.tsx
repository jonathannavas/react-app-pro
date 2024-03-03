import { useFormik } from 'formik'
import '../styles/styles.css'

import * as Yup from 'yup'

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, isValid, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: Yup.object({
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
    }),
  })

  return (
    <div>
      <h1>Formik Yup</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">Nombre</label>
        <input
          type="text"
          {...getFieldProps('firstName')}
          placeholder="Nombre"
        />
        {touched.firstName && errors.firstName && (
          <span> {errors.firstName} </span>
        )}

        <label htmlFor="lastName">Apellido</label>

        <input
          type="text"
          placeholder="Apellido"
          {...getFieldProps('lastName')}
        />
        {touched.lastName && errors.lastName && (
          <span> {errors.lastName} </span>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Dirección de correo"
          {...getFieldProps('email')}
        />
        {touched.email && errors.email && <span> {errors.email} </span>}

        <button type="submit" disabled={!isValid}>
          Enviar
        </button>
      </form>
    </div>
  )
}
