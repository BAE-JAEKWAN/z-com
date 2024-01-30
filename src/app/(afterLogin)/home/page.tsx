import styles from './home.module.css'
import Tab from '@/app/(afterLogin)/home/_component/Tab'
import TabProvider from '@/app/(afterLogin)/home/_component/TabProvider'
import PostForm from '@/app/(afterLogin)/home/_component/PostForm'
import Post from '@/app/(afterLogin)/_component/Post'

const Home = () => {
  return (
    <div className={styles.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </div>
  )
}

export default Home
