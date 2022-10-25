import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="wave-container">
      <div className="wave-card">
        <img
          alt="wave"
          className="wave-image"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        />
        <h1 className="wave-heading">Wave</h1>
      </div>
      <ul className="wave-card">
        <li>
          <Link className="link-heading" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link-heading" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link-heading" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
