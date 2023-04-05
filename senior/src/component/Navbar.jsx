import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-xxl navbar-light fixed-top">
        <div className="container-xxl">
          <Link className="navbar-brand" to="/">Ramadhan</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* linkedd to recipe food root  */}
              <Link className="nav-link" to="/recipe">Recipe</Link>
              </li>
              <li className="nav-item">
                {/* linkedd to Zaket calucl root  */}
                <Link className="nav-link" to="/zaket">Zaket</Link>
              </li>
              {/* linkedd to Hadith root still thing how it will looks like xD */}
              <li className="nav-item">
                <Link className="nav-link" to="/Hadith">Hadith</Link>
              </li>
              
            </ul>
            {/* search input we may use */}
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
