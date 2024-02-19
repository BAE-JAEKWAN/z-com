'use client'
import { TabContext } from './TabProvider'
import style from './tab.module.css'
import { useContext } from 'react'

const Tab = () => {
  const { tab, setTab } = useContext(TabContext)

  const onClickHandler = (value: 'rec' | 'fol') => {
    setTab(value)
  }

  return (
    <div className={style.homeFixed}>
      <div className={style.homeText}>홈</div>
      <div className={style.homeTab}>
        <button
          type="button"
          onClick={() => onClickHandler('rec')}
          className={style.homeTabBtn}
        >
          추천
          <div className={style.tabIndicator} hidden={tab === 'fol'}></div>
        </button>
        <button
          type="button"
          onClick={() => onClickHandler('fol')}
          className={style.homeTabBtn}
        >
          팔로우 중
          <div className={style.tabIndicator} hidden={tab === 'rec'}></div>
        </button>
      </div>
    </div>
  )
}

export default Tab
