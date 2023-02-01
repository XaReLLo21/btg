import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'
import styles from '../src/styles/Layout.module.css'
import stylesHeader from '../src/styles/Header.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <div className={stylesHeader.image}>
        <Meta />
        <Nav />
        <Header />
      </div>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>

      <Footer />
    </>
  )
}

export default Layout
