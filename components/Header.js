import headerStyles from '../src/styles/Header.module.css'

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <h1 className={headerStyles.title}>
        <span>Barcelona</span> Guide
      </h1>
      <p className={headerStyles.description}>
        Skriven av svenskar boendes i Barcelona
      </p>
    </div>
  )
}

export default Header
