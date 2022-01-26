import { FormField } from './FormField'

export const Checkbox = ({
  label,
  field: { name, value, ...fieldProps },
  form,
  required,
  ...props
}) => {
  return (
    <FormField id={name} label={label} required={required} formProps={form}>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={!!value}
        {...fieldProps}
        {...props}
      />
    </FormField>
  )
}
