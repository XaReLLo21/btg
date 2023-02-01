import React from 'react'
import { server } from 'config'
import MenuList from 'components/MenuList'
import stylesMenypage from '../../styles/Menupage.module.css'

const about = ({ articles }) => {
  return (
    <>
      <div>
        <div className={stylesMenypage.container}>
          <h1>{articles[0].pageTitle}</h1>
          <div>
            <p>{articles[0].pageTitleDescription}</p>
          </div>
        </div>
        <MenuList articles={articles} />
      </div>
    </>
  )
}

export default about

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/ta-dig-runt`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
