import React from 'react';  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from '@/app/utils/constants';
import Link from 'next/link';
import { useEffect, useState } from "react";
import CustomButton from '../ui/CustomButton';


const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const windowPos = window.scrollY;
            if (windowPos >= 250) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
      <header className={` w-full z-50 ${isFixed ? "fixed top-0 bg-[#e8c83e] is-sticky" : "relative"}`}>
    <div className="container">
        <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="py-2 flex items-center ml-10">
                <Link href="/">
                    <img src={isFixed? "/logo2.png":"/logo.png"} alt="Logo" title="Logo" className='w-[70px] h-auto' />
                </Link>
            </div>

            {/* Navigation */}
            <nav className={`lg:static absolute left-0 bg-black lg:bg-inherit w-full lg:w-auto top-full transition-all duration-500 ease-in-out ${showMenu ? 'h-[341px] opacity-100 visible overflow-y-auto' : 'h-0 opacity-0 invisible lg:h-auto lg:opacity-100 lg:visible overflow-hidden'}`}>
                <ul className="flex lg:flex-row flex-col lg:items-center">
                    {
                        navLinks.map(({ id, label, path }) =>
                            <li key={id} className='lg:py-11 py-4 px-5 border-b border-border lg:border-b-0 [.is-sticky_&]:py-6'>
                                <Link href={path} className="opacity-100 block text-[13px] font-semibold relative uppercase text-foreground transition-all duration-500 ease-linear cursor-pointer hover:text-primary lg:[.is-sticky_&]:text-black [.is-sticky_&]:hover:text-foreground">
                                    {label}
                                </Link>
                            </li>
                        )
                    }
                    <CustomButton> Consult Now </CustomButton>
                </ul>
            </nav>

            {/* Mobile Menu Icon */}
            <div className='text-white cursor-pointer lg:hidden' onClick={() => setShowMenu(!showMenu)}>
                <FontAwesomeIcon icon={faBars} />
            </div>

        </div>
    </div>
</header>
  

    )
}

export default Navbar