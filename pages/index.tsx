import QuoteCard from 'components/molecules/QuoteCard'
import AboutMyStats from 'components/organisms/AboutMyStats'
import Sidebar from 'components/organisms/Sidebar'
import WriteNewPost from 'components/organisms/WriteNewPost'
import MainLayout from 'components/templates/MainLayout'
import { useWindowSize } from 'usehooks-ts'

const HomePage = () => {
  const { width: windowWidth } = useWindowSize()
  return (
    <MainLayout>
      <div className=" container grid grid-cols-12 gap-6">
        {windowWidth >= 1024 && (
          <aside className="lg:col-span-3 h-fit sticky top-0">
            <Sidebar />
          </aside>
        )}
        <aside className="col-span-12 lg:col-span-5 xl:col-span-6 flex flex-col gap-3.5">
          <WriteNewPost />
          {/* Dummy data */}
          {Array.from({ length: 10 }).map((_) => (
            <QuoteCard
              name="Trafalgar Law"
              username="trafalgar"
              postedAt="1h ago"
              liked={true}
              avatar={'/images/default_avatar.webp'}
              commentCount={20}
              likeCount={100}
              quote={`Jangan lupa hari kemarin, jika tidak ingin melakukan kesalahan yang sama`}
              onLike={(liked) => {
                console.log('liked', liked)
              }}
              onComment={() => {}}
              onBookmark={() => {}}
              onShare={() => {}}
            />
          ))}
        </aside>
        {windowWidth >= 1024 && (
          <aside className="lg:col-span-4 xl:col-span-3 h-fit sticky top-0">
            <AboutMyStats />
          </aside>
        )}
      </div>
    </MainLayout>
  )
}

export default HomePage
