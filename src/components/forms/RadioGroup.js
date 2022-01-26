export const RadioGroup = ({
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
      {options.map((option) => (
        <div key={option.value}>
          <input
            type="radio"
            id={option.value}
            name={name}
            value={option.value}
            checked={option.value === value}
            disabled={option.disabled}
            {...fieldProps}
            {...props}
          />
          {option.label}
        </div>
      ))}
      {hasError && <small className="error">{errors[name]}</small>}
    </div>
  )
}
