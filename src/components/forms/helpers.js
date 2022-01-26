import * as Yup from 'yup'

export const getInitialValues = (defaultValues, initialValues) => {
  if (!initialValues) return defaultValues

  return { ...defaultValues, ...initialValues }
}

export const getDefaultValues = (schema) => {
  return schema
    .filter((val) => !val.condition)
    .reduce((acc, val) => {
      let defaultValue
      switch (val.componentType) {
        case 'text':
        case 'textarea':
        case 'select':
        case 'radioGroup':
          defaultValue = ''
          break
        case 'checkbox':
          defaultValue = false
          break
        default:
          defaultValue = ''
      }

      return {
        ...acc,
        [val.name]: val.defaultValue || defaultValue,
      }
    }, {})
}

export const getValidationSchema = (schema) => {
  const validationObject = schema.reduce((acc, val) => {
    let validationType

    switch (val.componentType) {
      case 'text':
      case 'textarea':
      case 'select':
      case 'radioGroup':
        validationType = Yup.string()
        break
      case 'checkbox':
      default:
        validationType = null
    }

    if (val.required && validationType) {
      validationType = validationType.required(`${val.label} is required`)
    }

    return { ...acc, ...(validationType && { [val.name]: validationType }) }
  }, {})

  return Yup.object().shape(validationObject)
}
