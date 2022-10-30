import Image from 'next/image'
import Link from 'next/link'
import {
  SvgNotificationOutline,
  SvgSearchOutline,
} from 'svg/component/icon/outline'
import { twMerge } from 'tailwind-merge'
interface Props extends React.ComponentPropsWithoutRef<'header'> {}
const DesktopHeader: React.FC<Props> = ({ className = '', ...restProps }) => {
  return (
    <header className={twMerge(`bg-white px-6 py-5 ${className}`)}>
      <nav className="container flex justify-between">
        <Link href="/">
          <p className="text-2xl text-[#FE6D6D] font-semibold">Quoters</p>
        </Link>
        <aside className="flex items-center gap-10">
          <div className="flex items-center gap-5">
            <button className="text-xl text-[#6C6C6C]" type="button">
              <SvgSearchOutline />
            </button>
            <button className="text-xl text-[#6C6C6C]" type="button">
              <SvgNotificationOutline />
            </button>
          </div>
          <Link href="/profile">
            <Image
              src={`/images/default_avatar.webp`}
              width={40}
              height={40}
              alt={`photo profile`}
              loading="lazy"
              className="rounded-full"
              quality={80}
            />
          </Link>
        </aside>
      </nav>
    </header>
  )
}

export default DesktopHeader
