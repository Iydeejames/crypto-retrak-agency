import { useEffect } from 'react';

const LandbotWidget = () => {
  useEffect(() => {
    // Function to initialize the Landbot widget
    const initLandbot = () => {
      if (!window.myLandbot) {
        const script = document.createElement('script');
        script.type = "module";
        script.async = true;

        script.addEventListener('load', () => {
          window.myLandbot = new window.Landbot.Livechat({
            configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2731401-HKO7OE81MLN8FD61/index.json', // Updated URL
          });
        });

        script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';

        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
      }
    };

    // Trigger initialization on mouseover or touchstart events
    window.addEventListener('mouseover', initLandbot, { once: true });
    window.addEventListener('touchstart', initLandbot, { once: true });

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('mouseover', initLandbot);
      window.removeEventListener('touchstart', initLandbot);
    };
  }, []);

  return null;
};

export default LandbotWidget;
