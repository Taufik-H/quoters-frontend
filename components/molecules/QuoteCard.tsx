import Image from 'next/image'
import { useState } from 'react'
import { SvgHeart2Fill } from 'svg/component/icon/fill'
import {
  SvgBookmark2Outline,
  SvgChatOutline,
  SvgEditOutline,
  SvgGoogleLensOutline,
  SvgHeart2Outline,
} from 'svg/component/icon/outline'
import { useDebounce, useUpdateEffect } from 'usehooks-ts'
interface Props extends React.ComponentPropsWithoutRef<'div'> {
  avatar: string
  avatarBlurUrl?: string
  name: string
  username: string
  postedAt: string
  quote: string
  liked: boolean
  commentCount: number
  likeCount: number
  onLike: (liked: boolean) => void
  onBookmark: () => void
  onShare: () => void
  onComment: () => void
  canEdit?: boolean
  onEdit?: () => void
}

const QuoteCard: React.FC<Props> = ({
  avatar,
  avatarBlurUrl,
  name,
  username,
  postedAt,
  quote,
  liked,
  commentCount,
  likeCount,
  onLike,
  onBookmark,
  onShare,
  onComment,
  canEdit = false,
  onEdit,
}) => {
  const [temporaryLike, setTemporaryLike] = useState({
    isLiked: liked,
    count: likeCount,
  })
  const likedDebounce = useDebounce(temporaryLike.isLiked, 1000)
  useUpdateEffect(() => {
    onLike(likedDebounce)
  }, [likedDebounce])
  return (
    <div className="bg-white p-4 rounded-2xl flex flex-col gap-6">
      <header className="flex justify-between gap-2">
        <figure className="flex items-center gap-2.5">
          <Image
            src={avatar}
            width={48}
            height={48}
            alt={`${username} photo profile`}
            loading="lazy"
            placeholder={avatarBlurUrl ? 'blur' : 'empty'}
            blurDataURL={avatarBlurUrl}
            className="rounded-full"
            quality={80}
          />

          <figcaption className="flex flex-col gap-0.5">
            <span className="text-xs text-black font-bold">{name}</span>
            <span className="text-xs text-[#858585]">@{username}</span>
          </figcaption>
        </figure>
        <div className="flex items-center gap-2 h-fit">
          <p className="text-xs text-black">posted {postedAt}</p>
          {canEdit && (
            <button
              className="text-base text-[#7A7777]"
              onClick={onEdit}
              type="button"
            >
              <SvgEditOutline />
            </button>
          )}
        </div>
      </header>
      <article>
        <p className="text-center text-base text-black">{quote}</p>
      </article>
      <footer className="flex justify-around">
        <aside className="flex items-center gap-2">
          <button
            className="text-xl"
            onClick={() => {
              setTemporaryLike((prevState) => ({
                count: prevState.isLiked
                  ? prevState.count - 1
                  : prevState.count + 1,
                isLiked: !prevState.isLiked,
              }))
            }}
            type="button"
          >
            {temporaryLike.isLiked ? (
              <SvgHeart2Fill className="text-[#FA4B4B]" />
            ) : (
              <SvgHeart2Outline className="text-[#7A7777]" />
            )}
          </button>
          <p className="text-xs text-black">{temporaryLike.count}</p>
        </aside>
        <aside className="flex items-center gap-2">
          <button
            className="text-base text-[#7A7777]"
            onClick={onComment}
            type="button"
          >
            <SvgChatOutline />
          </button>
          <p className="text-xs text-black">{commentCount}</p>
        </aside>
        <aside className="flex items-center gap-2">
          <button
            className="text-base text-[#7A7777]"
            onClick={onBookmark}
            type="button"
          >
            <SvgBookmark2Outline />
          </button>
        </aside>
        <aside className="flex items-center gap-2">
          <button
            className="text-base text-[#7A7777]"
            onClick={onShare}
            type="button"
          >
            <SvgGoogleLensOutline />
          </button>
        </aside>
      </footer>
    </div>
  )
}

export default QuoteCard
