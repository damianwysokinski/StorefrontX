interface TextareaProps {
  id: string
  name: string
  placeholder?: string
  defaultValue?: string | number
  required?: boolean
}

export default function Textarea({
  id,
  name,
  placeholder,
  defaultValue,
  required,
}: TextareaProps) {
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      required={required}
      className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
    ></textarea>
  )
}
