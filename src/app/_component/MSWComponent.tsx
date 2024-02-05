'use client'
import { useEffect } from 'react'

export const MSWComponent = () => {
  useEffect(() => {
    // window가 존재한다는 것은 클라이언트 환경이라는 뜻
    if (typeof window !== 'undefined') {
      if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
        require('@/mocks/browser') // 그러면 브라우저에서만 MSW가 실행되도록 함.
      }
    }
  }, [])

  return null
}
