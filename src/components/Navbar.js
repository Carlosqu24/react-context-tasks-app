import React from 'react'

import { Link } from 'react-router-dom'

export const Navbar = () => {
      return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <div className="container">
                        <Link to="/" className="navbar-logo">
                              <h2>TASK APP</h2>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                              <div className="navbar-nav">
                                    <Link to="/"  className="navbar-link m-3">Home</Link>
                                    <Link to="/create" className="navbar-link m-3">Create Note</Link>
                              </div>
                        </div>
                  </div>
            </nav>
      )
}
