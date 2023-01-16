import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="navbar-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-image"
      />
      <p className="wave-text">Wave</p>
    </div>
    <div className="nav-links-container">
      <ul className="links">
        <li className="nav-link">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
