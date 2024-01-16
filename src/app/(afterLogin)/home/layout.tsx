import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default async function HomeLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        여기는 홈 레이아웃이다아아
        {children}
      </body>
    </html>
  )
}
