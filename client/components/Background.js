import React, { useEffect, useState } from 'react';

function Background({ theme }) {
  const [frameCount, setFrameCount] = useState(2);
  let counter = 0;

  useEffect(() => {
    window.addEventListener('click', handleIncrement);
  }, []);

  const handleIncrement = ({ target }) => {
    if (target.dataset.type !== 'foreground' && theme === 'default') {
      counter = (counter + 1) % 13;
      setFrameCount(counter + 2);
    }
  };

  const renderBg = () => {
    switch (theme) {
      case 'default':
        return (
          <div id="frame-container">
            {[...Array(15)].map((frame, i) => (
              <div
                key={i}
                className="frame"
                style={{
                  animationDelay: `${400 * i}ms`,
                  visibility: i < frameCount ? 'visible' : 'hidden',
                  opacity: `${1.0 - i * 0.06}`,
                  transform: `rotate(45deg) translateY(${
                    30 * i
                  }px) translateZ(${-30 * i}px)`,
                }}
              />
            ))}
          </div>
        );
    }
  };

  return (
    <div id="background" className={theme}>
      <div id="gradient-mask" />
      {renderBg()}
    </div>
  );
}

export default Background;
