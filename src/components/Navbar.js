import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 fixed top-0 w-full z-10">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Reliability IQ</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-red-500">Home</a></li>
          <li><a href="#catalog" className="hover:text-red-500">Catalog</a></li>
          <li><a href="#blog" className="hover:text-red-500">Blog</a></li>
          <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
