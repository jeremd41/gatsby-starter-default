import React from "react"
import { Link } from "gatsby"

import Twitter from "../images/twitter.png"
import Facebook from "../images/facebook.png"
import Tripadvisor from "../images/tripadvisor.png"
import Instagram from "../images/instagram.png"

const Footer = () => (
  <footer>
    <div className="contact">
      <p>
        20 Merthyr Road
        <br />
        FK14 4SE, BURNFOOT <b>078 4848 6953</b>
      </p>
      <Link to="/" className="btncontact">
        Contact
      </Link>
    </div>
    <ul className="reseaux">
      <li>
        <a>
          <img src={Twitter} className="logoreseaux" />
        </a>
      </li>
      <li>
        <a>
          <img src={Facebook} className="logoreseaux" />
        </a>
      </li>
      <li>
        <a>
          <img src={Tripadvisor} className="logoreseaux" />
        </a>
      </li>
      <li>
        <a>
          <img src={Instagram} className="logoreseaux" />
        </a>
      </li>
    </ul>
    <div className="copyright">
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="https://www.gatsbyjs.org">Jérémy DIARD</a>
    </div>
  </footer>
)

export default Footer
