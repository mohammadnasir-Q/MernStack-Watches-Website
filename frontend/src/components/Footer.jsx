import React from 'react';
import { assets } from '../assets/assets';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=' text-white py-16'>
      <div className='max-w-screen-xl mx-auto px-8 sm:grid grid-cols-[2fr_1fr_1fr] gap-12'>
        {/* Company Description */}
        <div className='flex flex-col items-start'>
          <img src={assets.logo} className='mb-5 w-32' alt="Ved Stationary Logo" />
          <p className='w-full md:w-2/3 text-gray-400'>
            At Breguet Watches, we bring time to life with premium watches crafted for enthusiasts, professionals, and trendsetters. Our mission is to combine style and functionality while embracing quality and innovation.
          </p>
        </div>

        {/* Company Links */}
        <div className='flex flex-col'>
          <p className='text-xl font-semibold mb-4 text-black'>COMPANY</p>
          <ul className='space-y-3'>
            <li><a href="/" className='text-gray-400 hover:text-black transition-colors'>Home</a></li>
            <li><a href="/about" className='text-gray-400 hover:text-black transition-colors'>About us</a></li>
            <li><a href="/privacy-policy" className='text-gray-400 hover:text-black transition-colors'>Privacy Policy</a></li>
            <li><a href="/terms-conditions" className='text-gray-400 hover:text-black transition-colors'>Terms & Conditions</a></li>
            <li><a href="/return-policy" className='text-gray-400 hover:text-black transition-colors'>Return Policy</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className='flex flex-col'>
          <p className='text-xl font-semibold mb-4 text-black'>GET IN TOUCH</p>
          <ul className='space-y-3'>
            <li className='text-gray-400'>+92 9899459288</li>
            <li className='text-gray-400'>nasirqureshi786@gmail.com</li>
          </ul>
          <div className='flex gap-4 mt-6'>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-black'>
              <FaInstagram size={20} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-black'>
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-black'>
              <FaTwitter size={20} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-black'>
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className='mt-12'>
        <hr className='border-gray-600' />
        <p className='text-center py-6 text-sm text-gray-400'>
          &copy; 2024 Breguet Watches. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
