'use client'

import style from './logoutButton.module.css'

const LogoutButton = () => {
  const me = {
    // 여기도 나중에 next auth로 대체한다.
    id: 'neo.quan',
    nickname: '네오',
    image: '/5Udwvqim.jpg',
  }

  const onLogout = () => {}

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.image} alt={me.id} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  )
}

export default LogoutButton
