import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header className="header" aria-label="Site header">
      <div className="header__inner">
        <h1 className="header__title">WEDDING DAY</h1>
        <h2 className="header__names">ARMAN & DIANA</h2>
      </div>
    </header>
  )
}

export default Header