import MenuItem from './MenuItem'
import articleStyles from '../src/styles/Article.module.css'

const MenuList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <MenuItem key={article.id} article={article} />
      ))}
    </div>
  )
}

export default MenuList
