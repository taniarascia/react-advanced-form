import { FormField } from './FormField'

export const TextArea = ({
  label,
  field: { name, value, ...fieldProps },
  form,
  required,
  ...props
}) => {
  return (
    <FormField id={name} label={label} required={required} formProps={form}>
      <textarea
        id={name}
        name={name}
        value={value}
        {...fieldProps}
        {...props}
      />
    </FormField>
  )
}
