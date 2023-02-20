import React from 'react';

function Background({ theme }) {
  const renderBg = () => {
    switch (theme) {
      case 'default':
        return (
          <div id="frame-container">
            {[...Array(10)].map((frame, i) => (
              <div
                key={i}
                className="frame"
                style={{
                  animationDelay: `${400 * i}ms`,
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
