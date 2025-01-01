import React, { useState, useContext, useEffect, useRef } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state
  const dropdownRef = useRef(null); // Reference for dropdown
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
    setDropdownOpen(false); // Close dropdown on logout
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const activeClass = 'flex flex-col items-center gap-1 text-black font-semibold';
  const inactiveClass = 'flex flex-col items-center gap-1 text-gray-700';

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="Logo" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-5 text-sm">
        {['/', '/collection', '/about', '/contact'].map((path, index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
          >
            <p>{path === '/' ? 'HOME' : path.slice(1).toUpperCase()}</p>
          </NavLink>
        ))}
      </ul>

      {/* Icons and Actions */}
      <div className="flex items-center gap-6 relative z-50"> {/* Added z-50 for higher stacking */}
        {/* Search Icon */}
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search"
        />

        {/* Profile Icon */}
        <div className="relative" ref={dropdownRef}>
          <img
            onClick={token ? handleDropdownToggle : () => navigate('/login')}
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="Profile"
          />
          {dropdownOpen && token && (
            <div
              className="absolute right-0 mt-4 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg"
              style={{ zIndex: 1000 }} // Explicitly setting z-index
            >
              <p className="cursor-pointer hover:text-black" onClick={() => navigate('/profile')}>
                My Profile
              </p>
              <p className="cursor-pointer hover:text-black" onClick={() => navigate('/orders')}>
                Orders
              </p>
              <p className="cursor-pointer hover:text-black" onClick={logout}>
                Logout
              </p>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5" alt="Cart" />
          <p className="absolute -right-2 -bottom-2 w-4 text-center leading-4 bg-black text-white rounded-full text-xs">
            {getCartCount()}
          </p>
        </Link>

        {/* Menu Icon for Small Screens */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white overflow-hidden transition-all duration-300 ${
          visible ? 'w-full' : 'w-0'
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 cursor-pointer"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="Back" />
            <p>Back</p>
          </div>
          {['/', '/collection', '/about', '/contact'].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              className="py-3 pl-6 border-b"
              onClick={() => setVisible(false)}
            >
              {path === '/' ? 'HOME' : path.slice(1).toUpperCase()}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
