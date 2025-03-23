"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navlink from "./nav_link";
import Link from "next/link";
import module from "./header.module.css"

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`top-0 absolute left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 md:py-2">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
         <div className="flex items-center">
          <div>
             {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                height={20}
                width={150}
                src="/navbar/logo_masa.svg"
                className="lg:h-16 xl:h-24"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="mx-10">
            {/* Menu Items */}
            <div
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } absolute top-full left-0 w-full bg-white shadow-lg lg:relative lg:block lg:w-auto lg:shadow-none lg:bg-transparent`}
              id="mobile-menu"
            >
              <Navlink />
            </div>
          </div>
         </div>
          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 text-sm text-success rounded-lg lg:hidden hover:bg-primary focus:outline-none focus:ring-2 focus:ring-gray-200 border border-success"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-6 h-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
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
              className={`w-6 h-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
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
          {/* Contact Us Button */}
          <div className="hidden lg:flex items-center lg:order-2 fixed left-20">
            <Link
              href="/contact_us"
              className={`${module.contact_us} ml-4 focus:ring-4 focus:ring-primary-300 hover:animate-bounce text-xl rounded-lg px-2 md:px-4 lg:px-5 py-2 lg:py-2.5 md:mr-2 focus:outline-2`}
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
