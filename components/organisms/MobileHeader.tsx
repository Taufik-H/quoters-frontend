import Image from 'next/image'
import Link from 'next/link'
import {
  SvgChartOutline,
  SvgNotificationOutline,
} from 'svg/component/icon/outline'
import { twMerge } from 'tailwind-merge'
interface Props extends React.ComponentPropsWithoutRef<'header'> {}
const MobileHeader: React.FC<Props> = ({ className = '', ...restProps }) => {
  return (
    <header
      {...restProps}
      className={twMerge(
        `bg-white flex justify-between items-center px-6 py-5 ${className}`
      )}
    >
      <Link href="/profile">
        <Image
          src={`/images/default_avatar.webp`}
          width={24}
          height={24}
          alt={`photo profile`}
          loading="lazy"
          className="rounded-full"
          quality={80}
        />
      </Link>

      <Link href="/">
        <p className="text-xl text-[#FE6D6D] font-medium">Quoters</p>
      </Link>
      <div className="flex items-center gap-3.5">
        <button className="text-xl text-[#6C6C6C]" type="button">
          <SvgChartOutline />
        </button>
        <button className="text-xl text-[#6C6C6C]" type="button">
          <SvgNotificationOutline />
        </button>
      </div>
    </header>
  )
}

export default MobileHeader
