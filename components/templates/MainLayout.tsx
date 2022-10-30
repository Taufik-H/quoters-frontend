import BottomNavigationBar from 'components/organisms/BottomNavigationBar'
import DesktopHeader from 'components/organisms/DesktopHeader'
import MobileHeader from 'components/organisms/MobileHeader'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { useWindowSize } from 'usehooks-ts'
interface Props extends React.ComponentPropsWithoutRef<'main'> {}
const MainLayout: React.FC<Props> = ({ className = "", children, ...restProps }) => {
  const { width: windowWidth } = useWindowSize()

  return (
    <div className="bg-[#F3F3F3] flex flex-col h-screen">
      {windowWidth < 1024 ? <MobileHeader /> : <DesktopHeader />}
      <main className={twMerge(`overflow-y-auto flex-grow p-6 ${className}`)} {...restProps}>
        {children}
      </main>
      {windowWidth < 1024 && <BottomNavigationBar />}
    </div>
  )
}

export default MainLayout
