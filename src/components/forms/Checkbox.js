export const Checkbox = ({
  label,
  field: { name, value, ...fieldProps },
  form: { touched, errors },
  required,
  ...props
}) => {
  const hasError = errors[name] && touched[name]

  return (
    <div className="field">
      <label htmlFor={name}>
        {label}
        {required && <sup className="required">*</sup>}
      </label>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={!!value}
        {...fieldProps}
        {...props}
      />
      {hasError && <small className="error">{errors[name]}</small>}
    </div>
  )
}
