import { useEffect } from 'react';

const LandbotWidget = () => {
  useEffect(() => {
    const initLandbot = () => {
      if (!window.myLandbot) {
        const script = document.createElement('script');
        script.type = "module";
        script.async = true;

        script.addEventListener('load', () => {
          window.myLandbot = new window.Landbot.Livechat({
            configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2730671-DS3F90S5C7ENBF36/index.json',
          });
        });

        script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';

        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
      }
    };

    window.addEventListener('mouseover', initLandbot, { once: true });
    window.addEventListener('touchstart', initLandbot, { once: true });

    return () => {
      window.removeEventListener('mouseover', initLandbot);
      window.removeEventListener('touchstart', initLandbot);
    };
  }, []);

  return (
    <div className="fixed bottom-0 right-0 p-4 z-50">
      {/* No need for an actual element, the script will trigger the bot */}
    </div>
  );
};

export default LandbotWidget;
