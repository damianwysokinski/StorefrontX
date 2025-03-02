import Link from 'next/link'

interface Breadcrumb {
  title: string
  href?: string
}

interface BreadcrumbProps {
  separator: string
  items: Breadcrumb[]
}

export default function Breadcrumb({ separator, items }: BreadcrumbProps) {
  return (
    <ol className="mb-4 flex items-center">
      {items.map(({ title, href }, index) => {
        return (
          <li key={index} className="flex capitalize">
            {href ? <Link href={href}>{title}</Link> : title}

            <div className="mx-2">
              {index < items.length - 1 ? separator : ''}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
