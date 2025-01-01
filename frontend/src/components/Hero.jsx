import React, { useState, useEffect } from 'react';
import kidsbanner from '../assets/39863-425400884.mp4'; // Video file
import kidsbanner1 from '../assets/m128345rbr-0068_v01.avif';
import kidsbanner2 from '../assets/g-shock-gg-b100-for-rough-land-environments-1.jpg';

const Hero = () => {
  const slides = [
    {
      type: 'video', // Specify it's a video
      media: kidsbanner,
      title: "Men's Fashion",
      description: 'Discover the latest trends in men\'s watches.',
    },
    {
      type: 'image',
      media: kidsbanner1,
      title: "Women's Style",
      description: 'Elegant and trendy watches for women.',
    },
    {
      type: 'image',
      media: kidsbanner2,
      title: "Kids\' Wear",
      description: 'Comfortable and stylish watches for kids.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[600px] border border-gray-400 overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0 opacity-100 z-10' : 'translate-x-full opacity-0 z-0'
          }`}
        >
          {slide.type === 'video' ? (
            <video
              src={slide.media}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
            ></video>
          ) : (
            <img
              src={slide.media}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-10 bg-black/50">
            <h1 className="text-3xl sm:text-5xl font-bold">{slide.title}</h1>
            <p className="text-sm sm:text-lg mt-3">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full z-20"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full z-20"
      >
        ❯
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            } transition-all duration-300`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
