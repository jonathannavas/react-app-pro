import { FormikErrors, useFormik } from 'formik'
import '../styles/styles.css'

interface FormValues {
  firstName: string
  lastName: string
  email: string
}

export const FormikBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {}

    if (!firstName.trim()) {
      errors.firstName = 'Required'
    } else if (firstName.trim().length >= 15) {
      errors.firstName = 'Must be 15 characters or less'
    }

    if (!lastName.trim()) {
      errors.lastName = 'Required'
    } else if (lastName.trim().length >= 10) {
      errors.lastName = 'Must be 10 characters or less'
    }

    if (!email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address'
    }

    return errors
  }

  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    isValid,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validate,
  })

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">Nombre</label>
        <input
          type="text"
          name="firstName"
          placeholder="Nombre"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && (
          <span> {errors.firstName} </span>
        )}

        <label htmlFor="lastName">Apellido</label>

        <input
          type="text"
          name="lastName"
          placeholder="Apellido"
          onChange={handleChange}
          value={values.lastName}
          onBlur={handleBlur}
        />
        {touched.lastName && errors.lastName && (
          <span> {errors.lastName} </span>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Dirección de correo"
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <span> {errors.email} </span>}

        <button type="submit" disabled={!isValid}>
          Enviar
        </button>
      </form>
    </div>
  )
}
