export const Select = ({
  label,
  field: { name, value, ...fieldProps },
  form: { touched, errors },
  required,
  options,
  ...props
}) => {
  const hasError = errors[name] && touched[name]

  return (
    <div className="field">
      <label htmlFor={name}>
        {label}
        {required && <sup className="required">*</sup>}
      </label>
      <select name={name} id={name} {...fieldProps} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {hasError && <small className="error">{errors[name]}</small>}
    </div>
  )
}
