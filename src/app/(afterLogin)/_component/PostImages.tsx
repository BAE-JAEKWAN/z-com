import Link from 'next/link'
import style from '@/app/(afterLogin)/_component/post.module.css'
import cx from 'classnames'

type Props = {
  post: {
    postId: number
    content: string
    User: {
      id: string
      nickname: string
      image: string
    }
    createdAt: Date
    Images: ImagesType[]
  }
}

export type ImagesType = {
  imageId: number
  link: any
}

const PostImages = ({ post }: Props) => {
  if (!post.Images) return null
  if (!post.Images.length) return null

  const ImageStyleClass = () => {
    switch (post.Images.length) {
      case 0:
        break
      case 1:
        return style.oneImage
      case 2:
        return style.twoImage
      case 3:
        return style.threeImage
      case 4:
        return style.fourImage
      default:
        return style.fourImage
    }
  }

  return (
    <div className={cx(style.postImageSection, ImageStyleClass())}>
      {post.Images.length !== 3 &&
        post.Images.slice(0, 4).map((image: ImagesType, index: number) => (
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${image.imageId}`}
            style={
              post.Images.length > 1
                ? {
                    backgroundImage: `url(${image?.link})`,
                    backgroundSize: 'cover',
                  }
                : undefined
            }
            key={index}
          >
            {post.Images.length === 1 && <img src={image?.link} alt="" />}
          </Link>
        ))}
      {post.Images.length === 3 && (
        <>
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
            style={
              post.Images.length > 1
                ? {
                    backgroundImage: `url(${post.Images[0]?.link})`,
                    backgroundSize: 'cover',
                  }
                : undefined
            }
          ></Link>
          <div>
            {post.Images.slice(1, 3).map((image: ImagesType, index: number) => (
              <Link
                href={`/${post.User.id}/status/${post.postId}/photo/${image.imageId}`}
                style={
                  post.Images.length > 1
                    ? {
                        backgroundImage: `url(${image?.link})`,
                        backgroundSize: 'cover',
                      }
                    : undefined
                }
                key={index}
              >
                {post.Images.length === 1 && <img src={image?.link} alt="" />}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default PostImages
