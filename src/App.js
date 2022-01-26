import { AdvancedForm } from './components/forms/AdvancedForm'

export default function App() {
  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true)
    console.log(values)
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitting(false)
  }

  const formSchema = [
    { name: 'name', label: 'Name', componentType: 'text', required: true },
    { name: 'playable', label: 'Playable', componentType: 'checkbox' },
    {
      name: 'race',
      label: 'Race',
      componentType: 'radioGroup',
      options: [
        { label: 'Human', value: 'human' },
        { label: 'Dwarf', value: 'dwarf' },
        { label: 'Elf', value: 'elf' },
      ],
    },
    {
      name: 'class',
      label: 'Class',
      componentType: 'select',
      options: [
        { label: 'Ranger', value: 'ranger' },
        { label: 'Wizard', value: 'wizard' },
        { label: 'Healer', value: 'healer' },
      ],
    },
    {
      name: 'description',
      label: 'Description',
      componentType: 'textarea',
    },
  ]

  return (
    <>
      <h1>Advanced Form</h1>
      <AdvancedForm schema={formSchema} onSubmit={handleSubmit} />
    </>
  )
}
