import { useRouter } from 'next/router'
import Link from 'next/link'
import { server } from 'config'
import Meta from 'components/Meta'
import ButtonExt from 'components/ui/ButtonExt'
import Image from 'next/image'
import Tiquets from 'components/Tiquets'
import { FcAdvance } from 'react-icons/fc'
import styleSingle from '../../../styles/Single.module.css'
import BookingBanner from 'components/BookingSquare'

const taDigRunt = ({ article }) => {
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <div className={styleSingle.container}>
        {/* Start of the left column */}
        <div className={styleSingle.columnLeftLayout}>
          <div className={styleSingle.lefth1}></div>
          <div className={styleSingle.columnLeft}>
            <div className={styleSingle.columnLeftContainer}>
              <h1>Hello Mother</h1>
              <div className={styleSingle.columnLeft}></div>
              <BookingBanner />
            </div>
            <div className={styleSingle.columnLeftContainer}>
              <BookingBanner />
            </div>
          </div>
        </div>

        {/* End of the left column */}
        <div className={styleSingle.columnCenter}>
          <div className={styleSingle.columnCenterContainer}>
            <h1 className={styleSingle.h1}>{article.title}</h1>
            <div className={styleSingle.divhr}>
              <hr className={styleSingle.hr} />
            </div>
            <p className={styleSingle.p}>{article.body}</p>
            <br />
            <p className={styleSingle.p}>{article.body2}</p>
            <br />
            <p className={styleSingle.p}>{article.body3}</p>
            <br />
            <p className={styleSingle.p}>{article.body4}</p>
            <br />
            <p className={styleSingle.p}>{article.body5}</p>
            <br />
            <p className={styleSingle.p}>{article.body6}</p>
            <br />
            <p className={styleSingle.p}>{article.body7}</p>
            <br />
            <p className={styleSingle.p}>{article.body8}</p>
          </div>
        </div>
        {/* Start of the right column */}
        <div className={styleSingle.columnRightLayout}>
          <h1>Bra länkar</h1>
          <div className={styleSingle.divhrright}>
            <hr className={styleSingle.hrrighttop} />
          </div>

          {/* Start of first article */}
          <div className={styleSingle.columnRight}>
            <div className={styleSingle.columnRightContainer}>
              <Link
                className={styleSingle.link}
                href={article.rightColumnurl1}
                alt={article.rightColumnText1}
              >
                <div className={styleSingle.image}>
                  <Image
                    src={article.rightColumnImage1}
                    alt={article.reightColumnText1}
                    width={200}
                    height={300}
                  />
                </div>
                <div className={styleSingle.rightColumnTextIcon}>
                  {/* <div className={styleSingle.icon}>
                    <FcAdvance />
                  </div> */}
                  <div className={styleSingle.paragraph}>
                    <p>{article.rightColumnText1.toUpperCase()}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/* End of first article */}

          <div className={styleSingle.divhrright}>
            <hr className={styleSingle.hrright} />
          </div>
          {/* Start of second article */}
          <div className={styleSingle.columnRight}>
            <div className={styleSingle.columnRightContainer}>
              <Link
                className={styleSingle.link}
                href={article.rightColumnurl2}
                alt={article.rightColumnText2}
              >
                <div className={styleSingle.image}>
                  <Image
                    src={article.rightColumnImage2}
                    alt={article.reightColumnText2}
                    width={200}
                    height={300}
                  />
                </div>
                <div className={styleSingle.rightColumnTextIcon}>
                  {/* <div className={styleSingle.icon}>
                    <FcAdvance />
                  </div> */}
                  <div className={styleSingle.paragraph}>
                    <p>{article.rightColumnText2.toUpperCase()}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/* End of second article */}
        </div>
      </div>
      <Tiquets />
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/ta-dig-runt/${context.params.title}`)

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/ta-dig-runt`)

  const articles = await res.json()

  const ids = articles.map((article) => article.title)
  const paths = ids.map((title) => ({ params: { title: title.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default taDigRunt
