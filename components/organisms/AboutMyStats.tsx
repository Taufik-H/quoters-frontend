import { useState } from 'react'
import { SvgActivityOutline } from 'svg/component/icon/outline'

const AboutMyStats = () => {
  const [stats, setStats] = useState({
    quotes: '23',
    followers: '10',
    following: '10',
    totalLike: '2.5k',
    totalSaved: '1.2k',
    totalSaving: 100,
  })
  return (
    <div className="w-full bg-white rounded-2xl px-4 py-3">
      <header className="flex items-center gap-1.5">
        <SvgActivityOutline className="text-lg text-black" />
        <p className="text-sm">Tentang kamu</p>
      </header>
      <div className="mt-6 flex justify-evenly items-center">
        <div className="text-center">
          <p className="text-xl text-black">{stats.quotes}</p>
          <p className="text-sm text-black">Quotes</p>
        </div>
        <div className="text-center">
          <p className="text-xl text-black">{stats.followers}</p>
          <p className="text-sm text-black">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-xl text-black">{stats.following}</p>
          <p className="text-sm text-black">Following</p>
        </div>
      </div>
      <div className="h-[1px] bg-[#DCDCDC] w-full mt-3"></div>
      <div className="mt-[18px] flex flex-col gap-2.5">
        <div className="flex justify-between items-center">
          <p className="text-xs text-black">
            <span className="text-[#FB3434]">#</span>
            Total like
          </p>
          <p className="text-black font-semibold">{stats.totalLike}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs text-black">
            <span className="text-[#FB3434]">#</span>
            Total saved
          </p>
          <p className="text-black font-semibold">{stats.totalSaved}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs text-black">
            <span className="text-[#FB3434]">#</span>
            Total saving
          </p>
          <p className="text-black font-semibold">{stats.totalSaving}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMyStats
