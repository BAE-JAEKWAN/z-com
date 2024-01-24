import styles from '@/app/page.module.css'

type Props = {
  children: React.ReactNode
  modal: React.ReactNode
}

const Layout = ({ children, modal }: Props) => {
  return (
    <>
      <div className={styles.container}>
        <div>비포 레이아웃</div>
        {children}
        {modal}
      </div>
    </>
  )
}

export default Layout
