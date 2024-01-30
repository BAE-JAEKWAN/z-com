'use client'

import style from './rightSearchZone.module.css'
import { usePathname } from 'next/navigation'
import React from 'react'
import SearchForm from '@/app/(afterLogin)/_component/SearchForm'

const RightSearchZone = () => {
  const pathname = usePathname()
  const onChangeFollow = () => {}
  const onChangeAll = () => {}
  if (pathname === '/explore') {
    return null
  }
  if (pathname === '/search') {
    return (
      <div>
        <h5 className={style.filterTitle}>검색 필터</h5>
        <div className={style.filterSection}>
          <div>
            <label>사용자</label>
            <div className={style.radio}>
              <label htmlFor="user">모든 사용자</label>
              <input
                type="radio"
                name="pf"
                id="user"
                defaultChecked
                onChange={onChangeAll}
              />
            </div>
            <div className={style.radio}>
              <label htmlFor="follow">내가 팔로우하는 사람들</label>
              <input
                type="radio"
                name="pf"
                id="follow"
                value="on"
                onChange={onChangeFollow}
              />
            </div>
          </div>
          <div>
            <label>위치</label>
            <div className={style.radio}>
              <label htmlFor="anywhere">어디서나</label>
              <input
                type="radio"
                name="pf"
                id="anywhere"
                defaultChecked
                onChange={onChangeAll}
              />
            </div>
            <div className={style.radio}>
              <label htmlFor="current">현 위치 주변</label>
              <input
                type="radio"
                name="pf"
                id="current"
                value="on"
                onChange={onChangeFollow}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div style={{ marginBottom: 60, width: 'inherit' }}>
      <SearchForm />
    </div>
  )
}

export default RightSearchZone
