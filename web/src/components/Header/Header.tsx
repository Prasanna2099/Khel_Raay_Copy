import React from 'react'
import Logo from '../../../public/Logo 3.svg'
import { Link, routes } from '@redwoodjs/router'

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="drawer z-10">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-primary text-black">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="navbar-start ml-4 ">
              <img src={Logo} alt="Khel raay" />
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal text-white ">
                {/* Navbar menu content here */}
                <li>
                  <Link to={routes.home()} className="relative block group">
                    Home
                    <span className="block overflow-hidden h-1">
                      <span className="block h-full transform translate-x-full bg-white transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to={routes.support()} className="relative block group">
                    Support
                    <span className="block overflow-hidden h-1">
                      <span className="block h-full transform translate-x-full bg-white transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                    </span>
                  </Link>
                </li>
                {/* <li>
                  <Link to={routes.adhyayan()} className="relative block group">
                    Adhyayan
                    <span className="block overflow-hidden h-1">
                      <span className="block h-full transform translate-x-full bg-white transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                    </span>
                  </Link>
                </li> */}
                <li>
                  <Link
                    to={routes.fixtureTable()}
                    className="relative block group"
                  >
                    IPL 2024 Fixture
                    <span className="block overflow-hidden h-1">
                      <span className="block h-full transform translate-x-full bg-white transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to={routes.about()} className="relative block group">
                    About Us
                    <span className="block overflow-hidden h-1">
                      <span className="block h-full transform translate-x-full bg-white transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-end mr-1 lg:mr-0">
              <Link
                to={routes.counter()}
                className="btn btn-secondary btn-md rounded-full text-white lg:w-24 md:w-24 sm:12"
              >
                Trade
              </Link>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-primary text-white">
            {/* Sidebar content here */}
            <li>
              <a
                href="/"
                className="hover:underline transition-all duration-500 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/support"
                className="hover:underline transition-all duration-500 ease-in-out"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="/fixture-table"
                className="hover:underline transition-all duration-500 ease-in-out"
              >
                IPL 2024 Fixture Table
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:underline transition-all duration-500 ease-in-out"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
