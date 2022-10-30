import BottomNavigationBarItem from 'components/molecules/BottomNavigationBarItem'
import React from 'react'
import { SvgBookmarkFill, SvgHomeFill, SvgProfileFill } from 'svg/component/icon/fill'
import { SvgBookmarkOutline, SvgHomeOutline, SvgProfileOutline, SvgSearchOutline } from 'svg/component/icon/outline'
import { twMerge } from 'tailwind-merge'
interface Props extends React.ComponentPropsWithoutRef<'footer'> {}
const BottomNavigationBar: React.FC<Props> = ({
  className = '',
  ...restProps
}) => {
  return (
    <footer
      {...restProps}
      className={twMerge(`w-full bg-white p-4 shadow-[-4px_-5px_49px_rgba(7,3,3,0.25)] ${className}`)}
    >
      <nav className={twMerge(`flex items-center justify-evenly`)}>
        <BottomNavigationBarItem
          icon={<SvgHomeOutline />}
          activeIcon={<SvgHomeFill />}
          title="Beranda"
          href="/"
        />
        <BottomNavigationBarItem
          icon={<SvgSearchOutline />}
          activeIcon={<SvgSearchOutline />}
          title="Cari"
          href="/search"
        />
        <BottomNavigationBarItem
          icon={<SvgBookmarkOutline />}
          activeIcon={<SvgBookmarkFill />}
          title="Tersimpan"
          href="/saved"
        />
        <BottomNavigationBarItem
          icon={<SvgProfileOutline />}
          activeIcon={<SvgProfileFill />}
          title="Profile"
          href="/profile"
        />
      </nav>
    </footer>
  )
}

export default BottomNavigationBar
