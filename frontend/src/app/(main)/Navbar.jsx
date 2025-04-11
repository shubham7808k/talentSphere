import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between p-3 bg-[#e8e8e5]">
    <div className="text-4xl font-extrabold">TalentSphere</div>
    <div className="flex md:hidden">
      <button id="hamburger">
        <img
          className="toggle block"
          src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
          width={40}
          height={40}
        />
        <img
          className="toggle hidden"
          src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
          width={40}
          height={40}
        />
      </button>
    </div>
    <div className=" toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none">
      <a
        href="#home"
        className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
      >
        Home
      </a>
      <a
        href="#services"
        className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
      >
        Services
      </a>
      <a
        href="#aboutus"
        className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
      >
        About us
      </a>
      <a
        href="#steps"
        className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
      >
        Steps
      </a>
      <a
        href="#gallery"
        className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
      >
        Gallery
      </a>
      <a
        href="#contactUs"
        className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
      >
        Visit Us
      </a>
    </div>
    <div className="toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded">
      <a href="tel:+123">
        <div className="flex justify-end">
          <div className="flex items-center h-10 w-30 rounded-md bg-[#c8a876] text-white font-medium p-2">            
            Sign Up
          </div>
        </div>
      </a>
    </div>
  </nav>
    </div>
  )
}

export default Navbar