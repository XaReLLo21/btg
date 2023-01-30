import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'
import styles from '../src/styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
