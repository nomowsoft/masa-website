"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const menuItems = [
    { name: "الرئسية", href: "#", isActive: true },
    { name: "الباقات", href: "#", isActive: false },
  ];

  return (
    <header>
      <nav className="bg-primary border-gray-200 px-4 lg:px-6 py-2.5 md:py-10">
        <div className="flex flex-wrap justify-between items-center md:mx-20 md:rounded-3xl md:border md:border-success md:p-4 ">
          {/* Logo */}
          <a href="https://flowbite.com" className="flex items-center">
            <Image
              height={20}
              width={150}
              src="/navbar/Masa_logo.svg"
              className="h-16"
              alt="Logo"
            />
          </a>

          {/* CTA and Mobile Menu Button */}
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-primary bg-success hover:bg-primary hover:text-success hover:border hover:border-success ml-4 focus:ring-4 focus:ring-primary-300 text-xl rounded-lg px-2 md:px-4 lg:px-5 py-2 lg:py-2.5 md:mr-2 focus:outline-2"
            >
              أبداء معنا
            </a>
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
              className="inline-flex items-center p-2 ml-1 text-sm text-success rounded-lg lg:hidden hover:bg-primary focus:outline-none focus:ring-2 focus:ring-gray-200 border border-success"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${isMobileMenuOpen ? "hidden" : ""}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isMobileMenuOpen ? "" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 text-lg lg:flex-row lg:space-x-9 lg:mt-0">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`block py-2 pr-4 pl-3 text-success rounded ${
                      item.isActive
                        ? "bg-primary-700 lg:bg-transparent lg:text-primary-700"
                        : "border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                    }`}
                    aria-current={item.isActive ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
