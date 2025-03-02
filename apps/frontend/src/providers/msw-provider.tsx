'use client'

import { Suspense, useEffect, useState } from 'react'
import { handlers } from '@/mocks/handlers'

export function MSWProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense fallback={null}>
      <MSWProviderWrapper>{children}</MSWProviderWrapper>
    </Suspense>
  )
}

function MSWProviderWrapper({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const initMocking = async () => {
      if (
        typeof window !== 'undefined' &&
        process.env.NODE_ENV === 'development'
      ) {
        try {
          const { worker } = await import('@/mocks/browser')
          await worker.start({ onUnhandledRequest: 'bypass' })
          worker.use(...handlers)
          setIsInitialized(true)
        } catch (error) {
          console.error('Error initializing MSW:', error)
        }
      } else {
        setIsInitialized(true)
      }
    }

    initMocking()

    return () => {
      if (
        typeof window !== 'undefined' &&
        process.env.NODE_ENV === 'development'
      ) {
        import('@/mocks/browser').then(({ worker }) => {
          worker.stop()
        })
      }
    }
  }, [])

  if (!isInitialized) {
    return null
  }

  return children
}
