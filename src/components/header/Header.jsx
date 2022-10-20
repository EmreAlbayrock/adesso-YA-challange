import "./header.scss"
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <nav>
          <ul className="nav-list">
            <li className="nav-list_item">
              <Link className="link" to="/">Home</Link>
            </li>
            <li className="nav-list_item">
              <Link className="link" to="/units">Units</Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}
