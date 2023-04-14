import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.pageYOffset;
    if (currentScrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-4 text-gray-950 right-4 p-2 rounded-full transition-all ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
        
      <FaArrowUp color='black' className="text-white" size={20} />
    </button>
  );
};

export default BackToTopButton;