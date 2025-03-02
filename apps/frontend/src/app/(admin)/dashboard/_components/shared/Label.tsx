import React from 'react'

interface LabelProps {
  htmlFor: string
  children: React.ReactNode
}

export default function Label({ htmlFor, children }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-medium text-gray-900"
    >
      {children}
    </label>
  )
}
