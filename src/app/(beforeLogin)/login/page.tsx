'use client'

import { redirect, useRouter } from 'next/navigation'
import styles from '@/app/(beforeLogin)/_component/main.module.css'
import Image from 'next/image'
import Link from 'next/link'
import zLogo from '/public/zlogo.png'
import Main from '../_component/Main'
import { useEffect } from 'react'

const Login = () => {
  // 서버에서 redirect 시킴. 이러면 인터셉트 라우트가 제대로 동작하지 않음. 인터셉트 라우트는 클라이어트에서 해줘야 함.
  // redirect('/i/flow/login')

  const router = useRouter()
  useEffect(() => {
    // 인터셉팅을 사용하려면 useRouter 훅을 사용해야 함. userRouter는 클리아언틐 컴포넌트에서만 동작하므로 'use client'를 선언해야 함.
    // useEffect 안에 선언한 이유는 컴포넌트가 렌더링 되기 전에 replace를 실행하면 콘솔에러가 발생하기 때문. 따라서 컴포넌트가 마운트 된 이후에 replace를 실행기 위함이다.
    router.replace('/i/flow/login')
  }, [])

  return (
    <>
      <Main />
    </>
  )
}

export default Login
