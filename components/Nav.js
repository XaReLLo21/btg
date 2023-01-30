import navStyles from '../src/styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Hem</Link>
        </li>
        <li>
          <Link href='/ta-dig-runt'>Ta dig runt</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
