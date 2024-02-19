'use client'

import { useQuery } from '@tanstack/react-query'
import { getPostRecommends } from '@/app/(afterLogin)/home/_lib/getPostRecommends'
import Post from '@/app/(afterLogin)/_component/Post'
import { Post as IPost } from '@/model/Post'

const PostRecommends = () => {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000, // gcTime은 언제나 staleTime 보다 길어야 한다.
  })

  return data?.map(post => <Post key={post.postId} post={post} />)
}

export default PostRecommends
