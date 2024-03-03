import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

const initialState = {
  name: '',
  email: '',
  password: '',
  password2: '',
}

export const RegisterPage = () => {
  const {
    formData,
    onChange,
    email,
    name,
    password,
    password2,
    resetForm,
    isValidEmail,
  } = useForm(initialState)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log({ formData })
  }

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          name="name"
          onChange={onChange}
          placeholder="Name"
          type="text"
          value={name}
          className={name.trim().length <= 0 ? 'has-error' : ''}
        />
        {name.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        <input
          name="email"
          onChange={onChange}
          placeholder="Email"
          type="email"
          value={email}
        />
        {!isValidEmail(email) && <span>No es un email válido</span>}
        <input
          name="password"
          onChange={onChange}
          placeholder="Password"
          type="password"
          value={password}
        />
        <input
          name="password2"
          onChange={onChange}
          placeholder="Repeat password"
          type="password"
          value={password2}
        />
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Resetear form
        </button>
      </form>
    </div>
  )
}
