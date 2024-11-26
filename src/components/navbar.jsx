import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center my-4 px-4">
        <div>
          <img src="/Logo.png" alt="Logo" />
        </div>

     
        <ul className="hidden md:flex justify-between space-x-6 font-medium items-center cursor-pointer">
          <li>Features</li>
          <li>About Us</li>
          <li>Blog</li>
          <button className="bg-gray-100 px-4 py-2 rounded-md text-sm">Log In</button>
        </ul>

        <button
          className="md:hidden bg-gray-100 p-2 rounded-md"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <img className=' w-6' src="/close-menu.png"  />
          ) : (
            <img src="/hamburger-menu.png" />
          )}
        </button>
      </nav>

      {isOpen && (
        <ul className="flex flex-col items-start space-y-4 bg-gray-100 items-center  p-4 font-medium md:hidden">
          <li>Features</li>
          <li>About Us</li>
          <li>Blog</li>
          <button className="bg-gray-200 px-4 py-2 rounded-md text-sm">
            Log In
          </button>
        </ul>
      )}
    </>
  );
};

export default Navbar;
