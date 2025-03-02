interface InputProps {
  id: string
  type: string
  name: string
  step?: string
  accept?: string
  multiple?: boolean
  defaultValue?: string | number
  required?: boolean
}

export default function Input({
  type,
  id,
  name,
  step,
  accept,
  multiple,
  defaultValue,
  required,
}: InputProps) {
  return (
    <input
      id={id}
      type={type}
      name={name}
      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      step={step}
      accept={accept}
      multiple={multiple}
      defaultValue={defaultValue}
      required={required}
    />
  )
}
