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
const BottomNavigationBarItem: React.FC<Props> = ({
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
      <div
        {...restProps}
        className={twMerge(
          `cursor-pointer flex flex-col gap-1 items-center ${className}`
        )}
      >
        <div
          className={twMerge(
            `text-3xl ${isActive ? 'text-[#FF4444]' : 'text-[#8E8E8E]'}`
          )}
        >
          {isActive ? activeIcon : icon}
        </div>
        <p
          className={twMerge(
            `${
              isActive ? 'text-[#FF4444]' : 'text-[#8E8E8E]'
            } text-xs font-normal`
          )}
        >
          {title}
        </p>
      </div>
    </Link>
  )
}

export default BottomNavigationBarItem
