import SidebarItem from 'components/molecules/SidebarItem'
import React from 'react'
import {
  SvgBookmarkFill,
  SvgChartFill,
  SvgHomeFill,
  SvgLogoutFill,
  SvgSettingFill,
} from 'svg/component/icon/fill'
import {
  SvgBookmarkOutline,
  SvgChartOutline,
  SvgHomeOutline,
  SvgLogoutOutline,
  SvgSettingOutline,
} from 'svg/component/icon/outline'
import { twMerge } from 'tailwind-merge'
interface Props extends React.ComponentPropsWithoutRef<'nav'> {}
const Sidebar: React.FC<Props> = ({ className = '', ...restProps }) => {
  return (
    <nav
      className={twMerge(
        `flex flex-col gap-6 bg-white py-9 rounded-2xl ${className}`
      )}
      {...restProps}
    >
      <SidebarItem
        icon={<SvgHomeOutline />}
        activeIcon={<SvgHomeFill />}
        title="Beranda"
        href="/"
      />
      <SidebarItem
        icon={<SvgChartOutline />}
        activeIcon={<SvgChartFill />}
        title="Popularitas"
        href="/popularity"
      />
      <SidebarItem
        icon={<SvgBookmarkOutline />}
        activeIcon={<SvgBookmarkFill />}
        title="Tersimpan"
        href="/saved"
      />
      <SidebarItem
        icon={<SvgSettingOutline />}
        activeIcon={<SvgSettingFill />}
        title="Pengaturan"
        href="/settings"
      />
      <SidebarItem
        icon={<SvgLogoutOutline />}
        activeIcon={<SvgLogoutFill />}
        title="Logout"
        href="/logout"
      />
    </nav>
  )
}

export default Sidebar
