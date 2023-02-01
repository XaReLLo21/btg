import navStyles from '../src/styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
  return (
    <>
      <nav className={navStyles.nav}>
        <ul>
          <li>
            <Link href='/'>HEM</Link>
          </li>
          <li>
            <Link href='/ta-dig-runt'>TA DIG RUNT</Link>
          </li>
          <li>
            <Link href='/shopping'>SHOPPING</Link>
          </li>
          <li>
            <Link href='/shopping'>FLYGPLATSEN</Link>
          </li>
          <li>
            <Link href='/shopping'>SEVÄRDHETER</Link>
          </li>
        </ul>
      </nav>
      <hr className={navStyles.hr} />
    </>
  )
}

export default Nav
