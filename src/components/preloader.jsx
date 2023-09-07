import React, { useState, useEffect } from 'react';
import './layout.css'; // Import your custom loader CSS

const Preloader = ({ onLoad }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated task or page navigation
    setTimeout(() => {
      setLoading(false);
      // function is called when loading is complete
      onLoad();
    }, 2000);
  }, [onLoad]);

  const preloaderHtml = () => {
    if (loading) {
      return (
        <div className="preloader-wrapper">
          <div className="custom-loader">
            {/* Optional message */}
            {/* <p>Loading...</p> */}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {preloaderHtml()}
    </div>
  );
};

export default Preloader;