import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { InputField, SelectField } from '../components'
import formJson from '../data/custom-form.json'

const initialValues: {
  [key: string]: any
} = {}

const requiredFields: {
  [key: string]: any
} = {}

for (const input of formJson) {
  initialValues[input.name] = input.value
  if (!input.validations) continue

  let schema = Yup.string()

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Campo requerido')
    }
    if (rule.type === 'min') {
      schema = schema.min(
        (rule as any).value || 1,
        `Minimo ${(rule as any).value} caracteres`
      )
    }
    if (rule.type === 'email') {
      schema = schema.email('Debe ser un email permitido')
    }

    //otras reglas de validacion
  }

  requiredFields[input.name] = schema
}

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ isValid, isSubmitting }) => (
          <Form noValidate>
            {formJson.map(({ label, name, placeholder, type, options }) => {
              if (type === 'input' || type === 'password' || type === 'email') {
                return (
                  <InputField
                    key={name}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                    type={type as any}
                  />
                )
              } else if (type === 'select') {
                return (
                  <SelectField key={name} label={label} name={name}>
                    <option value={''}>----Seleccione una opcion----</option>
                    {options?.map(({ id, label }) => (
                      <option value={id} key={id}>
                        {label}
                      </option>
                    ))}
                  </SelectField>
                )
              }

              throw new Error(
                `El type: ${type}, no se encuentra soportado actualmente.`
              )
            })}
            <button type="submit" disabled={!isValid}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
