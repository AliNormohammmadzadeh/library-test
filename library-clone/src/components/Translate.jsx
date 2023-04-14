import React, { useEffect, useRef } from 'react';

const Translate = () => {
  const translateElementRef = useRef(null);
  const scriptAddedRef = useRef(false);

  useEffect(() => {
    if (!scriptAddedRef.current) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
      scriptAddedRef.current = true;
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
      }, translateElementRef.current);
    };

    return () => {
      const googleTranslateWidget = document.querySelector('.goog-te-banner-frame');
      if (googleTranslateWidget) {
        googleTranslateWidget.parentNode.removeChild(googleTranslateWidget);
      }
    };
  }, []);

  return (
        <div ref={translateElementRef}></div> 
  );
};

export default Translate;
