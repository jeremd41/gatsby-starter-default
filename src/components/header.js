import { Link } from "gatsby"
import React, { Component } from "react"
import logo from "../images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <input type="checkbox" id="chk" />
          <label for="chk" className="show-menu-btn">
            <FontAwesomeIcon className="icon" icon="bars" />
            <Link to="/">LOGO</Link>
          </label>
          <Link className="btn-reserver-mobile" to="/">
            Réserver
          </Link>
          <ul className="menu">
            <Link className="logo" to="/">
              London b&b
            </Link>
            <li>
              <Link to="/acceuil/">Accueil</Link>
            </li>
            <li>
              <Link to="/">Chambres</Link>
            </li>
            <li>
              <Link to="/">Tarifs</Link>
            </li>
            <li>
              <Link to="/">A propos</Link>
            </li>
            <li>
              <Link to="/">Activités</Link>
            </li>
            <Link className="btn-reserver" to="/">
              Réserver
            </Link>
            <label for="chk" className="hide-menu-btn">
              <FontAwesomeIcon icon="times" />
            </label>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
