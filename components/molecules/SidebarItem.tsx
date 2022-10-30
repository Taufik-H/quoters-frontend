import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
interface Props extends React.ComponentPropsWithoutRef<'div'> {
  icon: JSX.Element
  activeIcon: JSX.Element
  href: string
  title: string
}
const SidebarItem: React.FC<Props> = ({
  icon,
  activeIcon,
  href,
  title,
  className = '',
  ...restProps
}) => {
  const router = useRouter()
  const isActive = useMemo(
    () => router.pathname === href,
    [router.pathname, href]
  )
  return (
    <Link href={href}>
      <div className={twMerge(`flex items-center gap-6 hover:opacity-80 ${className}`)} {...restProps}>
        <div
          className={twMerge(
            `h-8 w-[5px] rounded-r-[10px] ${isActive ? 'bg-[#FF4444]' : ''}`
          )}
        ></div>
        <div
          className={twMerge(
            `text-2xl ${isActive ? 'text-[#FF4444]' : 'text-black'}`
          )}
        >
          {isActive ? activeIcon : icon}
        </div>
        <p
          className={twMerge(
            `${isActive ? 'text-[#FF4444]' : 'text-[#6B6B6B]'} font-normal`
          )}
        >
          {title}
        </p>
      </div>
    </Link>
  )
}

export default SidebarItem
