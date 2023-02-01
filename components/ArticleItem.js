import Image from 'next/image'
import articleStyles from '../src/styles/Animated.module.css'
import Button from './ui/Button'

const ArticleItem = ({ article }) => {
  return (
    <>
      <div className={articleStyles.card}>
        <Image
          className={articleStyles.frontImg}
          src={article.img}
          width='1870'
          height='1250'
        />
        <div className={articleStyles.hidden}>
          <h3 className={articleStyles.title}>{article.title}</h3>
          <p className={articleStyles.excerpt}>{article.excerpt}</p>
        </div>
        <div className={articleStyles.button}>
          <Button
            text={article.title}
            href={`/${article.meny}/${article.title}`}
          />
        </div>
      </div>
    </>
  )
}

export default ArticleItem
