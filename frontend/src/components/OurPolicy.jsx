import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className='py-20'>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-10 px-8 sm:px-16'>
        
        {/* Easy Exchange Policy */}
        <div className='flex flex-col items-center bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300'>
          <img 
            src={assets.exchange_icon} 
            className='w-16 mb-6 transition-transform transform hover:scale-110' 
            alt="Easy Exchange" 
          />
          <p className='text-lg sm:text-xl font-semibold text-gray-900'>Easy Exchange Policy</p>
          <p className='text-sm sm:text-base text-gray-500'>Hassle-free exchange policy for your convenience</p>
        </div>

        {/* 7 Days Return Policy */}
        <div className='flex flex-col items-center bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300'>
          <img 
            src={assets.quality_icon} 
            className='w-16 mb-6 transition-transform transform hover:scale-110' 
            alt="7 Days Return" 
          />
          <p className='text-lg sm:text-xl font-semibold text-gray-900'>7 Days Return Policy</p>
          <p className='text-sm sm:text-base text-gray-500'>Enjoy a seven-day free return option</p>
        </div>

        {/* Customer Support */}
        <div className='flex flex-col items-center bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300'>
          <img 
            src={assets.support_img} 
            className='w-16 mb-6 transition-transform transform hover:scale-110' 
            alt="Customer Support" 
          />
          <p className='text-lg sm:text-xl font-semibold text-gray-900'>Customer Support</p>
          <p className='text-sm sm:text-base text-gray-500'>24/7 support for all your needs</p>
        </div>

      </div>
    </div>
  );
};

export default OurPolicy;
