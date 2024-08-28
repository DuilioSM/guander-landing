import logo from "../assets/img/guander_logo_simple.png";
import { useState, useRef, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { RiTiktokLine } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import gsap from "gsap";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f0ff]">
      <header className="z-50 fixed md:left-40 md:right-40 top-10 right-10 left-10 flex items-center justify-between p-4 bg-white border-2 border-black rounded-full md:space-x-5">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="X" className="w-10 h-10" />
          <span className="bg-pink-300 text-black font-bold py-1 px-3 rounded">
            Guander
          </span>
        </div>

        {/* Navigation Links */}
        {/* <nav className="flex space-x-6">
          <a href="#" className="font-semibold text-black">
            Valores
          </a>
          <a href="#" className="font-semibold text-black">
            Portafolio
          </a>
          <a href="#" className="font-semibold text-black">
            Resume
          </a>
        </nav> */}

        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleMenu}>
            <IoMenu size={40} />
          </button>
        </div>

        <div
          ref={menuRef}
          className="fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg p-4 transform translate-x-full"
        >
          {/* Close button */}
          <button onClick={toggleMenu} className="text-gray-500">
            Cerrar
          </button>

          {/* Menu items */}
          <div className="mt-8">
            <a
              href="https://www.instagram.com/guander.mx/"
              className="flex items-center py-2"
            >
              <FaInstagram size={24} className="mr-2" />
              Instagram
            </a>
            <a
              href="https://www.instagram.com/guander.mx/"
              className="flex items-center py-2"
            >
              <IoLogoLinkedin size={24} className="mr-2" />
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/guander.mx/"
              className="flex items-center py-2"
            >
              <RiTiktokLine size={24} className="mr-2" />
              TikTok
            </a>
            <a
              href="https://calendly.com/elias-guander"
              className="mt-5 flex items-center py-2 bg-black text-white text-center rounded-full justify-center"
            >
              Hablemos!
            </a>
          </div>
        </div>

        <div className="md:flex hidden items-center space-x-4">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/guander.mx/">
              <RiTiktokLine size={40} />
            </a>
            <a href="https://www.instagram.com/guander.mx/">
              <IoLogoLinkedin size={43} />
            </a>
            <a href="https://www.instagram.com/guander.mx/">
              <FaInstagram size={40} />
            </a>
          </div>

          {/* Hire Me Button */}
          <div className="cursor-pointer">
            <a
              href="https://calendly.com/elias-guander"
              className="bg-black text-white font-semibold py-2 px-4 rounded-full"
            >
              Hablemos!
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="text-center p-4 bg-[#5e17eb] text-white">
        © 2024 Guander. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Layout;
