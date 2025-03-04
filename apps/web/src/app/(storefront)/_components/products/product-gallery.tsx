'use client'

import { Image as ProductImage } from '../../../../types/image'
import Image from 'next/image'
import { useState } from 'react'

interface ProductViewGalleryProps {
  images?: ProductImage[]
}

export default function ProductGallery({ images }: ProductViewGalleryProps) {
  const [activeImage, setActiveImage] = useState(0)

  const handleGalleryChange = (index: number) => {
    setActiveImage(index)
  }

  return (
    <div className="grid gap-2">
      <div>
        <Image
          className="object-cover w-full h-[400px] rounded-md"
          src={images?.[activeImage]?.src ?? '/images/placeholder-image.jpg'}
          alt=""
          width={544}
          height={400}
          priority
        />
      </div>

      <div className="flex items-center gap-2 overflow-x-auto">
        {images?.map(({ src }, index) => {
          return (
            <Image
              className="object-cover rounded-md cursor-pointer"
              key={index}
              src={src}
              alt=""
              width={100}
              height={66}
              onClick={() => handleGalleryChange(index)}
            />
          )
        })}
      </div>
    </div>
  )
}
