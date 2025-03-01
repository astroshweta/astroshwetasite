"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "@/app/utils/constants";
import Link from "next/link";
import CustomButton from "../ui/CustomButton";
import Image from "next/image";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY >= 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    window.open("https://rzp.io/rzp/k0bSlLD", "_blank");
  };

  return (
    <header
      className={`w-full z-30 ${isFixed ? "fixed top-0 left-0 bg-[#e8c83e] is-sticky w-full" : "relative"}`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="py-1 flex items-center ms-10">
            <Link href="/">
              <Image
                src={isFixed ? "/logo2.png" : "/logo.png"}
                alt="Logo"
                title="Logo"
                className="w-[50px] h-auto"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav
            className={`lg:static absolute bg-black lg:bg-inherit w-full lg:w-auto top-full transition-all duration-500 ease-in-out ${
              showMenu
                ? "h-[341px] opacity-100 visible overflow-y-auto"
                : "h-0 opacity-0 invisible lg:h-auto lg:opacity-100 lg:visible overflow-hidden"
            }`}
          >
            <ul className="flex lg:flex-row flex-col lg:items-center">
              {navLinks.map(({ id, label, path }) => (
                <li
                  key={id}
                  className="lg:py-11 py-4 px-5 border-b border-border lg:border-b-0 [.is-sticky_&]:py-6"
                >
                  <Link
                    href={path}
                    className="opacity-100 block text-[13px] font-semibold relative uppercase text-foreground transition-all duration-500 ease-linear cursor-pointer hover:text-primary lg:[.is-sticky_&]:text-black [.is-sticky_&]:hover:text-foreground"
                    onClick={() => setShowMenu(false)} // Closes the menu when a menu item is clicked
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <CustomButton onClick={handleButtonClick}>Consult Now</CustomButton>
            </ul>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="text-white cursor-pointer lg:hidden mr-10" onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={faBars} fontSize={25} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
