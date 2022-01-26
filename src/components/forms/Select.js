import { FormField } from './FormField'

export const Select = ({
  label,
  field: { name, value, ...fieldProps },
  form,
  required,
  options,
  ...props
}) => {
  return (
    <FormField id={name} label={label} required={required} formProps={form}>
      <select name={name} id={name} {...fieldProps} {...props}>
        <option value="">Select one</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormField>
  )
}
