import { ErrorMessage, useField } from 'formik'

interface Props {
  label: string
  name: string
  [x: string]: any
}

export const CheckField = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' })
  return (
    <>
      <label htmlFor={props.id || props.name}>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
    </>
  )
}
