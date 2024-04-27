'use client'
import { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Nav = () => {

const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSignInClick = () => {
    setShowLogin(true);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false); 
  };
  return (

    <nav className="fixed top-0 right-0 z-50">
      <div className="md:hidden flex items-center justify-end p-4 text-customdarkgreen">
        <button onClick={toggleNavbar}>
          <MenuIcon />
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-customdarkgreen">
          <div className="flex flex-col items-center font-poiretfont text-2xl text-customwhite space-y-6">
            <a href="#home" onClick={toggleNavbar}>Home</a>
            <a href="#about" onClick={toggleNavbar}>About</a>
            <a href="#projects" onClick={toggleNavbar}>Projects</a>
            <a href="#contact" onClick={toggleNavbar}>Contact</a>
            <button className="text-white fixed top-0 right-5 z-50" onClick={toggleNavbar}><CloseIcon /></button>
          </div>
        </div>
      )}

      {/* Normal navbar for screens above md */}
      <div className="hidden md:flex fixed top-0 right-0 h-full flex flex-col justify-between font-poiretfont font-bold text-xl">
        <div className="flex flex-col text-customdarkgreen justify-between h-full" style={{ minHeight: '120px' }}>
          <a href="#about" className="uppercase font-bold transform rotate-90 flex justify-center items-center" style={{ flex: '1' }}>About</a>
          <a href="#projects" className="uppercase font-bold transform rotate-90 flex justify-center items-center" style={{ flex: '1' }}>Projects</a>
          <a href="#contact" className="uppercase font-bold transform rotate-90 flex justify-center items-center" style={{ flex: '1' }}>Contact</a>
        </div>
      </div>
    </nav>



 

    // <nav className="rotat-90 text-customnavy w-full pt-3 pb-3">
    //   <div className="flex flex-wrap items-center justify-between px-8">
    //     <div>
    //       <Link href="/" className="flex gap-2 items-center">
    //         <h1 className="font-poiretfont font-bold text-4xl ml-2">
    //           Aniket Sapra
    //         </h1>
    //       </Link>
          
    //     </div>

    //     <div className="hidden lg:flex justify-center items-center">
    //       <ul className="flex md:items-center font-poiretfont font-bold">
    //         <li className="navitems" onClick={handleNavLinkClick}>
    //           <Link href="/">Projects</Link>
    //         </li> 
    //         <li className="navitems" onClick={handleNavLinkClick}>
    //           <Link href="/store">About</Link>
    //         </li>
    //         <li className="navitems" onClick={handleNavLinkClick}>
    //           <Link href="/about">Contact</Link>
    //         </li>
           
    //       </ul>
    //     </div>

    //     <div className="lg:hidden flex items-center">
    //       <button onClick={toggleNavbar}>
    //         {isOpen ? <CloseIcon /> : <MenuIcon />}
    //       </button>
    //     </div>

    //     {isOpen && (
    //       <div className="lg:hidden w-full mt-4">
    //         <ul className="text-center">
    //           <li onClick={handleNavLinkClick} className="dropdownitems">
    //             <Link href="/">Projects</Link>
    //           </li>
    //           <li onClick={handleNavLinkClick} className="dropdownitems">
    //             <Link href="/store">About</Link>
    //           </li>
    //           <li onClick={handleNavLinkClick} className="dropdownitems">
    //             <Link href="/about">Contact</Link>
    //           </li>
              
    //         </ul>
            
    //       </div>
    //     )}
    //   </div>
    // </nav>
  )
}

export default Nav
