import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-12 pb-6 text-center">
      <div className="container">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="text-[#e8c83e] text-2xl hover:text-black transition duration-300" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-[#e8c83e] text-2xl hover:text-black transition duration-300" />
          </a>
        </div>

        {/* Quick Links */}
        <ul className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-sm uppercase tracking-wide text-white">
          <li><Link href="/" className="hover:text-[#e8c83e] transition duration-300">Home</Link></li>
          <li><Link href="#about" className="hover:text-[#e8c83e] transition duration-300">About</Link></li>
          <li><Link href="#packages" className="hover:text-[#e8c83e] transition duration-300">Services</Link></li>
          <li><Link href="#testimonials" className="hover:text-[#e8c83e] transition duration-300">Testimonials</Link></li>
          <li><Link href="#contact" className="hover:text-[#e8c83e] transition duration-300">Contact</Link></li>
        </ul>

        {/* Copyright & Disclaimer */}
        <div className="mt-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Astro Shweta. All Rights Reserved.</p>
          <p>Disclaimer: Astrology is a guiding science. Results may vary for individuals.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
