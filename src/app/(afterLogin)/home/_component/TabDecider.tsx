'use client'

import { use } from 'react'
import { TabContext } from '@/app/(afterLogin)/home/_component/TabProvider'
import PostRecommends from '@/app/(afterLogin)/home/_component/PostRecommends'
import FollowingPosts from '@/app/(afterLogin)/home/_component/FollowingPosts'

const TabDecider = () => {
  const { tab } = use(TabContext)
  if (tab === 'rec') {
    return <PostRecommends />
  }
  return <FollowingPosts />
}

export default TabDecider
