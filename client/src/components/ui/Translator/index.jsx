import React, { useEffect } from 'react';

const Translator = () => {

  const loadScript = () => {
    if (!document.getElementById('google-translate-script')) {
      const listScript = document.createElement('script');
      listScript.id = 'google-translate-script';
      listScript.src = 'https://cdn.gtranslate.net/widgets/latest/dropdown.js';
      listScript.defer = true;
      document.body.appendChild(listScript);

      window.gtranslateSettings = {"default_language":"en","languages":["en","hi"],"wrapper_selector":".gtranslate_wrapper"}

    }
  };

  useEffect(() => {

    // Ensure the Google Translate script is loaded only once
    loadScript();

    // Clean up script when component unmounts
    return () => {
      const script = document.getElementById('google-translate-script');
      if (script && document.body) {
        document.body.removeChild(script);
        delete window.googleTranslateElementInit; // Clean up the global function
      }
    };
  }, []);

  return <div class="gtranslate_wrapper" id="gtranslate_src"></div>
};

export default Translator;
