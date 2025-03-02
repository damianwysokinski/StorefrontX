import { cva } from 'class-variance-authority'
import Link from 'next/link'

interface Button {
  variant?: 'default' | 'outlined' | 'danger' | null
  children: React.ReactNode
}

interface ButtonLinkProps extends Button {
  href: string
}

interface ButtonProps extends Button {
  type?: 'button' | 'reset' | 'submit' | undefined
  onClick?: () => void
}

const buttonVariants = cva(
  'cursor-pointer rounded-lg px-3 py-1.5 text-sm hover:opacity-90',
  {
    variants: {
      variant: {
        default: 'bg-stone-900 text-white',
        danger: 'bg-red-500 text-white',
        outlined: 'border border-white text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Button({
  type = 'submit',
  onClick,
  variant = 'default',
  children,
}: ButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      <span className={buttonVariants({ variant })}>{children}</span>
    </button>
  )
}

function ButtonLink({ href, variant = 'default', children }: ButtonLinkProps) {
  return (
    <Link href={href}>
      <span className={buttonVariants({ variant })}>{children}</span>
    </Link>
  )
}

export { Button, ButtonLink }
