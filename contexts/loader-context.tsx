"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface LoaderContextType {
  hasSeenLoader: boolean
  setHasSeenLoader: (seen: boolean) => void
  shouldShowLoader: boolean
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined)

export function LoaderProvider({ children }: { children: ReactNode }) {
  const [hasSeenLoader, setHasSeenLoaderState] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if user has seen the loader in this session
    const seen = sessionStorage.getItem('hasSeenLoader') === 'true'
    setHasSeenLoaderState(seen)
  }, [])

  const setHasSeenLoader = (seen: boolean) => {
    setHasSeenLoaderState(seen)
    sessionStorage.setItem('hasSeenLoader', String(seen))
  }

  const shouldShowLoader = mounted && !hasSeenLoader

  return (
    <LoaderContext.Provider value={{
      hasSeenLoader,
      setHasSeenLoader,
      shouldShowLoader
    }}>
      {children}
    </LoaderContext.Provider>
  )
}

export function useLoader() {
  const context = useContext(LoaderContext)
  if (context === undefined) {
    throw new Error('useLoader must be used within a LoaderProvider')
  }
  return context
}
