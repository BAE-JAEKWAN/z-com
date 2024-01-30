'use client'

import style from '../search.module.css'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
const Tab = () => {
  const [current, setCurrent] = useState('hot')
  const router = useRouter()
  const searchParams = useSearchParams()
  const onClickHandler = (value: string) => {
    setCurrent(value)
    switch (value) {
      case 'new':
        router.replace(`/search?${searchParams.toString()}&f=live`)
        break

      default:
        router.replace(`/search?q=${searchParams.get('q')}`)
    }
  }

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div
          onClick={() => {
            onClickHandler('hot')
          }}
        >
          인기
          <div className={style.tabIndicator} hidden={current === 'new'}></div>
        </div>
        <div
          onClick={() => {
            onClickHandler('new')
          }}
        >
          최신
          <div className={style.tabIndicator} hidden={current === 'hot'}></div>
        </div>
      </div>
    </div>
  )
}

export default Tab
