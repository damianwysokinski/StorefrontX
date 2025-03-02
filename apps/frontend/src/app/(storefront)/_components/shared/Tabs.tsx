'use client'

import React, { useState } from 'react'

interface TabItem {
  label: string
  children: React.ReactNode
}

interface TabsProps {
  items: TabItem[]
}

export default function Tabs({ items }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0)

  const handleActiveTabChange = (tab: number) => {
    setActiveTab(tab)
  }

  return (
    <div>
      <div className="mb-4 flex justify-around">
        {items.map(({ label }, index) => {
          return (
            <div
              key={index}
              onClick={() => handleActiveTabChange(index)}
              className={`w-full text-center cursor-pointer p-2 border-b-2 ${activeTab === index ? 'border-black' : 'border-gray-200'}`}
            >
              {label}
            </div>
          )
        })}
      </div>

      <div>{items[activeTab].children}</div>
    </div>
  )
}
