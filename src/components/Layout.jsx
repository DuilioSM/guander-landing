import logo from "../assets/img/guander_logo_simple.png";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { RiTiktokLine } from "react-icons/ri";

const Layout = ({ children }) => {
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
        <nav className="flex space-x-6">
          <a href="#" className="font-semibold text-black">
            Valores
          </a>
          <a href="#" className="font-semibold text-black">
            Portafolio
          </a>
          <a href="#" className="font-semibold text-black">
            Resume
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#">
            <RiTiktokLine size={40} />
          </a>
          <a href="#">
            <IoLogoLinkedin size={43} />
          </a>
          <a href="#">
            <FaInstagram size={40} />
          </a>
        </div>

        {/* Hire Me Button */}
        <div className="cursor-pointer">
          <a
            href="#"
            className="bg-black text-white font-semibold py-2 px-4 rounded-full"
          >
            Hablemos!
          </a>
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
