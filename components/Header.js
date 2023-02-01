import headerStyles from '../src/styles/Header.module.css'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <>
      <div className={headerStyles.header}>
        <div className={headerStyles.titleDiv}>
          <h1 className={headerStyles.title}>Att resa är att leva</h1>
          <div className={headerStyles.searchBar}>
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  )
}
