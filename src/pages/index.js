import BookingMap from 'components/Bookingmap'
import ArticleList from 'components/ArticleList'
import Head from 'next/head'
import { server } from '../../config'
import stylesFront from '../styles/FrontItems.module.css'

export default function Home({ articles }) {
  return (
    <>
      <div className={stylesFront.front}>
        <ArticleList articles={articles} />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/front-items`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
