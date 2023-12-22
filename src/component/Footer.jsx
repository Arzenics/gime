import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer className="bg-dark mt-5" data-bs-theme="dark">
            <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <div className="link">
                    <h6 className="subtitle">quick link</h6>
                    <ul>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/news'>News</Link></li>
                    <li><Link to='/'>Discover</Link></li>
                    <li><Link to='/'>Popular</Link></li>
                    <li><Link to='/sales'>Sales & Special</Link></li>
                    <li><Link to='/free-games'>Free Games</Link></li>
                    </ul>
                </div>
                </div>
                <div className="col-lg-6">
                <h6 className="copyright-text">
                    &copy; Copyright Gime, 2023 All Rights Reserved
                </h6>
                </div>
            </div>
            </div>
        </footer>
    </>
  )
}

export default Footer