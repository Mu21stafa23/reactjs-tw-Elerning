import React, { useState } from 'react';
import Logo from '../../assets/vite.svg'; 
import { Link } from 'react-router-dom';  

const MenuLink = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'About', link: '/about' },
  { id: 3, name: 'Service', link: '/#service' },
  { id: 4, name: 'Contact', link: '/Contact' },
];

const dropdownLinks = [
  { id: 1, name: 'Engineering', link: '/#engineering' },
  { id: 2, name: 'Computer Science', link: '/#computer' },
  { id: 3, name: 'Design', link: '/#design' },
  { id: 4, name: 'Marketing', link: '/#marketing' },
  { id: 5, name: 'Sales', link: '/#sales' },
];

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="duration-200 relative z-20">
      {/* nav bar */}
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* logo section */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              <img src={Logo} alt="Logo" className="w-12 h-12" />
            </Link>

            <Link
              to="/"
              className="text-blue-700 font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              E-learning platform
            </Link>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-4">
              {MenuLink.map((data) => (
                <li key={data.id}>
                  <Link
                    to={data.link}
                    className="inline-block px-4 font-semibold text-gray-700 hover:text-black dark:hover:text-blue-900 duration-200 uppercase"
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
              {/* Dropdown Menu with Icon */}
              <li className="relative cursor-pointer group">
                <span
                  className="flex items-center gap-1 font-semibold uppercase text-gray-700 hover:text-black dark:hover:text-blue-900 py-2"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Programs
                  <svg
                    className="w-4 h-4 ml-1 transition-transform duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    style={{
                      transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                {/* Dropdown Links */}
                {isDropdownOpen && (
                  <div className="absolute z-[9999] bg-white shadow-sm rounded-md w-[200px] mt-2 font-semibold uppercase text-center">
                    <ul className="space-y-2">
                      {dropdownLinks.map((data) => (
                        <li key={data.id}>
                          <Link
                            to={data.link}
                            className="text-gray-700 hover:text-black dark:hover:text-blue-900"
                          >
                            {data.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* Login Button (Desktop) */}
          <Link to="/login">
            <button className="hidden lg:block rounded-full px-5 py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300">
              Login
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-black dark:text-white dark:hover:text-blue-900"
            >
              <svg
                className="w-6 h-6 text-blue-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 text-white py-4">
          <ul className="space-y-4">
            {MenuLink.map((data) => (
              <li key={data.id}>
                <Link
                  to={data.link}
                  className="block px-4 font-semibold text-gray-200 hover:text-blue-500 duration-200 uppercase"
                >
                  {data.name}
                </Link>
              </li>
            ))}
            <li className="relative cursor-pointer group">
              <span
                className="block px-4 font-semibold text-gray-200 hover:text-blue-500 duration-200 uppercase"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Programs
                <svg
                  className="w-4 h-4 ml-1 transition-transform duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  style={{
                    transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {isDropdownOpen && (
                <div className="absolute z-[9999] bg-white shadow-sm rounded-md w-[200px] mt-2 font-semibold uppercase text-center">
                  <ul className="space-y-2">
                    {dropdownLinks.map((data) => (
                      <li key={data.id}>
                        <Link
                          to={data.link}
                          className="text-gray-700 hover:text-black dark:hover:text-blue-900"
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {/* Smaller Login Button (Mobile) */}
            <li>
              <Link to="/login">
                <button className="px-8 py-2 mt-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 text-sm">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
