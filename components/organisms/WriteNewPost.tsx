import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'
interface Props extends React.ComponentPropsWithoutRef<'div'> {}
const WriteNewPost: React.FC<Props> = ({ className = '', ...restProps }) => {
  return (
    <div
      {...restProps}
      className={twMerge(
        `w-full p-4 bg-white rounded-[10px] flex flex-col gap-2 ${className}`
      )}
    >
      <article className="flex items-center gap-2.5">
        <p className="text-base font-medium text-[#6C6C6C]">
          👋 Hi, Taufik Hidayatulloh
        </p>
        <p className="text-xs font-light text-[#A7A7A7]">@taufik-h</p>
      </article>
      <div className="w-full h-[1px] bg-[#DCDCDC]"></div>
      <div className="flex items-center gap-3">
        <Image
          src={`/images/default_avatar.webp`}
          width={45}
          height={45}
          alt={`photo profile`}
          loading="lazy"
          className="rounded-full"
          quality={80}
        />
        <input
          type="text"
          placeholder={`Posting quote kamu, Taufik`}
          className="bg-[#CDCDCD4A] py-2.5 px-[18px] rounded-full w-full placeholder:text-[#888888] text-gray-700 focus:outline-none"
        />
      </div>
    </div>
  )
}

export default WriteNewPost
