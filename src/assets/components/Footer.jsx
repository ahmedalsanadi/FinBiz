import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaGithub } from 'react-icons/fa';
import Button from './reusable-components/Button';

const Footer = () => {
  return (
    <footer className="bg-veryDarkGray text-lightGray py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Section: Logo and Description */}
        <div className="mb-8 md:mb-0 md:mr-12 flex-1 text-left">
          <h2 className="text-green text-xl font-semibold mb-3">FinBiz</h2>
          <p className="text-sm text-gray">
            Data analysis software is a type of software tool used for data analysis and reporting.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-customWhite hover:text-green"><FaTwitter size={18} /></a>
            <a href="#" className="text-customWhite hover:text-green"><FaFacebook size={18} /></a>
            <a href="#" className="text-customWhite hover:text-green"><FaInstagram size={18} /></a>
            <a href="#" className="text-customWhite hover:text-green"><FaPinterest size={18} /></a>
            <a href="#" className="text-customWhite hover:text-green"><FaGithub size={18} /></a>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="flex-1 grid grid-cols-2 gap-8 mb-8 md:mb-0 text-left ">
          <div>
            <h3 className="text-customWhite font-semibold text-lg mb-2">Company</h3>
            <ul className='text-left'>
              <li className="mb-2"><a href="#" className="text-gray hover:text-customWhite text-sm">Service</a></li>
              <li className="mb-2"><a href="#" className="text-gray hover:text-customWhite text-sm">Resources</a></li>
              <li className="mb-2"><a href="#" className="text-gray hover:text-customWhite text-sm">About us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-customWhite font-semibold text-lg mb-2 text-left">Help</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray hover:text-customWhite text-sm">Customer Support</a></li>
              <li className="mb-2"><a href="#" className="text-gray hover:text-customWhite text-sm">Terms & Conditions</a></li>
              <li className="mb-2"><a href="#" className="text-gray hover:text-customWhite text-sm">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section: Newsletter */}
        <div className="flex-1 ">
          <h3 className="text-customWhite font-semibold text-lg mb-4 text-left">Subscribe to Newsletter</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 py-2 px-3 rounded-l-lg bg-cardDarkBackground text-customWhite placeholder-gray text-sm focus:outline-none"
            />
            <Button text="Join" variant="contact" addClass="rounded-r-lg px-5" />
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray text-sm mt-10">
        © Copyright 2024, All Rights Reserved by Ahmed Al-Sanadi
      </div>
    </footer>
  );
};

export default Footer;
