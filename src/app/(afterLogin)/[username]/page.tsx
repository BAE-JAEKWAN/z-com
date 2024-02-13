import style from './profile.module.css'
import Post from '@/app/(afterLogin)/_component/Post'
import BackButton from '@/app/(afterLogin)/_component/BackButton'
import Link from 'next/link'
import { auth } from '@/auth'

const Profile = async () => {
  const user = {
    id: 'neo.quan',
    nickname: '네오',
    image: '/5Udwvqim.jpg',
  }
  const session = await auth()

  return (
    <div className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={user.image} alt={user.id} />
        </div>
        <div className={style.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <Link
          className={style.followButton}
          href={session?.user ? '/' : '@/(beforeLogin)/login'}
        >
          팔로우
        </Link>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Profile
